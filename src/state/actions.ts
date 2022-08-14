export type Action =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: { title: string; listId: string };
    }
  | {
      type: 'MOVE_LIST';
      payload: {
        draggedId: string;
        hoverId: string;
      };
    };

export const addTask = (title: string, listId: string): Action => ({
  type: 'ADD_TASK',
  payload: { title, listId },
});

export const addList = (title: string): Action => ({
  type: 'ADD_LIST',
  payload: title,
});

export const moveList = (draggedId: string, hoverId: string): Action => ({
  type: 'MOVE_LIST',
  payload: { draggedId, hoverId },
});
