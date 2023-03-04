import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoEdit } from '../redux/modules/todo';

function Input({ item }) {
  const [editTitle, setEditTitle] = useState(item.title);
  const [editContent, setEditContent] = useState(item.content);

  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        value={editTitle}
        onChange={(event) => setEditTitle(event.target.value)}
      />
      <input
        type="text"
        value={editContent}
        onChange={(event) => setEditContent(event.target.value)}
      />
      <button
        onClick={() => {
          dispatch(todoEdit(editTitle, editContent, item.id, item.edit));
          // setEdit(!edit);
        }}
      >
        수정완료
      </button>
    </div>
  );
}

export default Input;
