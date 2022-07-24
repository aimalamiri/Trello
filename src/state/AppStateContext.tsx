import { createContext, useReducer , useContext, Dispatch, FC } from 'react';
import { Action } from './actions';
import { Task, List, AppState, appStateReducer } from './appStateReducer';

const appData: AppState = {
  lists: [
    {
      id: '0',
      title: 'To do',
      tasks: [{ id: 'c0', title: 'Generate app scaffold' }],
    },
    {
      id: '1',
      title: 'In Progress',
      tasks: [{ id: 'c2', title: 'Learn TypeScript' }],
    },
    {
      id: '2',
      title: 'Done',
      tasks: [{ id: 'c3', title: 'Begin to use Static Typing' }],
    },
  ],
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

type AppStateProps = {
  children?: React.ReactNode;
};

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);

export const AppStateProvider: FC<AppStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id === id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
