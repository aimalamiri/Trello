import { FC } from 'react';
import { AddNewItem } from './AddNewItem';
import { Column } from './Column';
import { AppContainer } from './styles';
import { useAppState } from './state/AppStateContext';
import { addList } from './state/actions';

export const App: FC = () => {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column key={list.id} title={list.title} id={list.id} />
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={(title) => dispatch(addList(title))} />
    </AppContainer>
  );
};
