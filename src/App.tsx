import { FC } from 'react';
import { AddNewItem } from './AddNewItem';
import { Card } from './Card';
import { Column } from './Column';
import { AppContainer } from './styles';

export const App: FC = () => {
  return (
    <AppContainer>
      <Column title="To Do">
        <Card title="Geneare app scaffold" />
      </Column>
      <Column title="In Progress">
        <Card title="Learn Typescript" />
      </Column>
      <Column title="Done">
        <Card title="Begin to use static typing" />
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
    </AppContainer>
  );
};
