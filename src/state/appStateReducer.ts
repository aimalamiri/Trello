import { nanoid } from 'nanoid';
import { Action } from './actions';
import { findItemIndexById, moveItem } from '../utils/arrayUtils';
import { DragItem } from '../DragItem';

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
  draggedItem: DragItem | null;
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
    case 'MOVE_LIST': {
      const { draggedId, hoverId } = action.payload;
      const draggedIndex = findItemIndexById(draft.lists, draggedId);
      const hoveredIndex = findItemIndexById(draft.lists, hoverId);
      draft.lists = moveItem(draft.lists, draggedIndex, hoveredIndex);
      break;
    }
    case 'SET_DRAGGED_ITEM': {
      draft.draggedItem = action.payload;
      break;
    }
    default: {
      break;
    }
  }
};
