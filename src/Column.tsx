import { FC } from 'react';
import { AddNewItem } from './AddNewItem';
import { ColumnContainer, ColumnTitle } from './styles';
import { useAppState } from './state/AppStateContext';
import { Card } from './Card';
import { addTask } from './state/actions';

type ColumnProps = {
  title: string;
  id: string;
};

export const Column: FC<ColumnProps> = ({ title, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();

  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {tasks.map((task) => (
        <Card title={task.title} id={task.id} key={task.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(title) => dispatch(addTask(title, id))}
        dark
      />
    </ColumnContainer>
  );
};
