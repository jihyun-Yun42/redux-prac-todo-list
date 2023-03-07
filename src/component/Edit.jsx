import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { workingDone, todoDelete, todoEdit } from '../redux/modules/todo';
import { Link } from 'react-router-dom';

function Edit({ item }) {
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [editTodo, setEditTodo] = useState({
    title: item.title,
    content: item.content,
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setEditTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEdit = () => {
    const id = item.id;
    dispatch(todoEdit({ ...editTodo, id }));
    setEdit(!edit);
  };

  return (
    <div>
      {edit ? (
        <div>
          <input
            type="text"
            name="title"
            value={editTodo.title}
            onChange={inputHandler}
          />
          <input
            type="text"
            name="content"
            value={editTodo.content}
            onChange={inputHandler}
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
      <button onClick={handleAddEdit}>{edit ? '수정완료' : '수정'}</button>
    </div>
  );
}

export default Edit;
