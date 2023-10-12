import { useEffect, useState } from 'react';
import { Contract } from 'ethers';
import { todoListContractAbi } from 'abis';
import { useProvider } from './useProvider';
import { useAppStore } from '../store';

export type TaskResponse = [string, boolean];
export type TaskTableData = {
  index: number;
  text: string;
  completed: boolean;
};

const contractAddress = '0x756f739a0c08d3cb341bdf8e41796a113ae00b16';

const mapTasksToTable = (tasksResponse: TaskResponse[]): TaskTableData[] => tasksResponse.map(
  ([text, completed], index) => ({
    text, completed, index,
  }),
);

export const useTodoContract = () => {
  const { activeAccount } = useAppStore();
  const provider = useProvider();
  const [contract, setContract] = useState<Contract | null>(null);
  const [tasks, setTasks] = useState<TaskTableData[]>([]);
  const [tasksLoading, setTasksLoading] = useState<boolean>(false);
  const [pendingTransactionsCount, setPendingTransactionsCount] = useState<number>(0);

  const initContract = async () => {
    try {
      const signer = await provider.getSigner(activeAccount as string);
      const contractObject = new Contract(contractAddress, todoListContractAbi, signer);

      setContract(contractObject);
    } catch (_e) {
      console.log('Contract initialization failed');
    }
  };

  const getTasks = async () => {
    setTasksLoading(true);

    if (contract) {
      try {
        const response: TaskResponse[] = await contract.getTodoList(activeAccount);
        setTasks(mapTasksToTable(response));
        setTasksLoading(false);
      } finally {
        setTasksLoading(false);
      }
    }
  };

  const addTask = async (task: string) => {
    if (contract) {
      try {
        const tx = await contract.addTask(task);
        setPendingTransactionsCount((prev) => prev + 1);
        await tx.wait();
        setPendingTransactionsCount((prev) => prev - 1);
      } catch (_e) {
        console.log('Unable to create new task');
      }
    }
  };

  const completeTask = async (idx: number) => {
    if (contract) {
      try {
        await contract.markTaskCompleted(idx);
      } catch (_e) {
        console.log('Unable to complete task');
      }
    }
  };

  useEffect(() => {
    initContract();
  }, [activeAccount]);

  useEffect(() => {
    getTasks();
  }, [contract, activeAccount, pendingTransactionsCount]);

  return {
    tasks,
    tasksLoading,
    addTask,
    completeTask,
    pendingTransactionsCount,
  };
};
