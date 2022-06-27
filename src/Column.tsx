import { FC } from 'react';
import { AddNewItem } from './AddNewItem';
import { ColumnContainer, ColumnTitle } from './styles';

type ColumnProps = {
  title: string;
  children?: React.ReactNode;
};

export const Column: FC<ColumnProps> = ({ title, children }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
      <AddNewItem toggleButtonText="+ Add another task" onAdd={console.log} dark />
    </ColumnContainer>
  );
};
