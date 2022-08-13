type Item = {
  id: string;
};

export const findItemIndexById = <TItem extends Item>(items: TItem[], id: string) => {
  return items.findIndex((item: TItem) => item.id === id);
};

export const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), to, item);
}
