export type Action =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: { title: string; listId: string };
    };

export const addTask = (title: string, listId: string): Action => ({
  type: 'ADD_TASK',
  payload: { title, listId },
});

export const addList = (title: string): Action => ({
  type: 'ADD_LIST',
  payload: title,
});
