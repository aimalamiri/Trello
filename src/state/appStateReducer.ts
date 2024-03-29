import { nanoid } from 'nanoid';
import { Action } from './actions';
import { findItemIndexById } from '../utils/arrayUtils';

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

//                              Draft is here for use-immer library
export const appStateReducer = (draft: AppState, action: Action): AppState | void => {
  switch (action.type) {
    case 'ADD_LIST': {
      draft.lists.push({
        id: nanoid(),
        title: action.payload,
        tasks: [],
      });
      break;
    }
    case 'ADD_TASK': {
      const { title, listId } = action.payload;
      const targetListIndex = findItemIndexById(draft.lists, listId);

      draft.lists[targetListIndex].tasks.push({
        id: nanoid(),
        title,
      });
      break;
    }
    default: {
      break;
    }
  }
};
