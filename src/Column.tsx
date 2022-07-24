import { FC } from 'react';
import { AddNewItem } from './AddNewItem';
import { ColumnContainer, ColumnTitle } from './styles';
import { useAppState } from './state/AppStateContext';
import { Card } from './Card';

type ColumnProps = {
  title: string;
  id: string;
};

export const Column: FC<ColumnProps> = ({ title, id }: ColumnProps) => {
  const state = useAppState();

  const tasks = state.getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
        {tasks.map((task) => (
          <Card title={task.title} id={task.id} key={task.id} />
        ))}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={console.log} dark />
    </ColumnContainer>
  );
};
