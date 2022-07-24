import { Action } from './actions';

export type Task = {
  id: string;
  title: string;
};

export type List = {
  id: string;
  title: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
};

export const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
