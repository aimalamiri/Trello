import { title } from 'process';
import React, { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';
import { useFocus } from './utils/useFocus';

type newItemFormProps = {
  onAdd(text: string): void;
};

export const NewItemForm = ({ onAdd }: newItemFormProps) => {
  const [text, setText] = useState('');
  const inputRef = useFocus();

  const handleAddText = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAdd(text);
    }
  };

  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
