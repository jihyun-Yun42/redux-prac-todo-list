import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { workingDone, todoDelete, todoEdit } from '../redux/modules/todo';
import { Link } from 'react-router-dom';

function Edit({ item }) {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(item.title);
  const [editContent, setEditContent] = useState(item.content);

  return (
    <div>
      {edit ? (
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
        </div>
      ) : (
        <div>
          <Link to={`/detailpage/${item.id}`}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </Link>
          <button onClick={() => dispatch(workingDone(item.id))}>
            {item.done ? '취소' : '완료'}
          </button>
          <button onClick={() => dispatch(todoDelete(item.id))}>삭제</button>
        </div>
      )}
      <button
        onClick={() => {
          dispatch(todoEdit(editTitle, editContent, item.id));
          setEdit(!edit);
        }}
      >
        {edit ? '수정완료' : '수정'}
      </button>
    </div>
  );
}

export default Edit;
