import { FC } from 'react';
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Checkbox, Chip, Button, Spinner, Skeleton,
} from '@nextui-org/react';
import { TaskTableData } from 'hooks';

interface TasksTableProps {
  tasks: TaskTableData[];
  onComplete: (taskIdx: number) => void;
  isLoading: boolean;
  pendingRows?: number;
}

type EmptyRow = { key: number; isEmpty: true };

const tasksWithPendingRows = (tasks: TaskTableData[], pendingRows: number): Array<TaskTableData | EmptyRow> => {
  const emptyRows = [...new Array(pendingRows)];

  return [
    ...tasks,
    ...(emptyRows),
  ].map((item, idx) => (item === undefined ? { key: idx, isEmpty: true } : item));
};

const isEmpty = (row: TaskTableData | EmptyRow): row is EmptyRow => (row as EmptyRow)?.isEmpty;

export const TasksTable: FC<TasksTableProps> = ({
  tasks, onComplete, isLoading, pendingRows = 0,
}) => (
  <div className="flex flex-col gap-3">
    <Table
      aria-label="Example static collection table"
      hideHeader={!tasks.length}
    >
      <TableHeader>
        <TableColumn>Completed</TableColumn>
        <TableColumn>Text</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody
        emptyContent={isLoading ? ' ' : 'No tasks to display'}
        isLoading={isLoading}
        loadingContent={<Spinner />}
        loadingState={isLoading ? 'loading' : 'idle'}
        items={tasksWithPendingRows(tasks, pendingRows)}
      >
        {(task) => (isEmpty(task)
          ? (
            <TableRow>
              <TableCell>
                <Skeleton className="w-1/5 rounded-lg">
                  <div className="h-3 w-1/5 rounded-lg bg-default-300" />
                </Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200" />
                </Skeleton>
              </TableCell>
              <TableCell>
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200" />
                </Skeleton>
              </TableCell>
            </TableRow>
          )
          : (
            <TableRow key={task.index}>
              <TableCell>
                <Checkbox isSelected={task.completed} color="default" disabled className="cursor-default" />
              </TableCell>
              <TableCell>
                {task.completed ? <s>text</s> : task.text}
              </TableCell>
              <TableCell>
                {task.completed
                  ? <Chip variant="light" size="md" color="success">Done</Chip>
                  : (
                    <Button
                      variant="flat"
                      size="sm"
                      radius="full"
                      color="primary"
                      onPress={() => onComplete(task.index)}
                    >
                      Complete
                    </Button>
                  )}
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </div>
);
