import {
  FC, FormEvent, useState,
} from 'react';
import { useTodoContract } from 'hooks';
import {
  Button, Card, CardBody, Input,
} from '@nextui-org/react';
import { PageTitle } from '../../components/PageTitle';
import { PageWrapper } from '../../components';
import { TasksTable } from './TasksTable';

export const Todo: FC = () => {
  const {
    addTask, tasks, completeTask, tasksLoading, pendingTransactionsCount,
  } = useTodoContract();
  const [inputText, setInputText] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(inputText);
  };

  return (
    <PageWrapper>
      <PageTitle>Todo list</PageTitle>

      <h4 className="font-bold text-xl mb-2">Add new TODO ticket</h4>
      <Card className="mb-10">
        <CardBody>
          <div className="flex flex-col gap-4">
            <form onSubmit={handleSubmit} className="flex w-full gap-6 items-end">
              <Input
                type="text"
                label="Task text"
                placeholder="Type here..."
                labelPlacement="outside"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                minLength={3}
              />
              <Button variant="bordered" type="submit">Add</Button>
            </form>
          </div>
        </CardBody>
      </Card>

      <h4 className="font-bold text-xl mb-2">My curent tasks</h4>
      <TasksTable tasks={tasks} onComplete={completeTask} isLoading={tasksLoading} pendingRows={pendingTransactionsCount} />
    </PageWrapper>
  );
};
