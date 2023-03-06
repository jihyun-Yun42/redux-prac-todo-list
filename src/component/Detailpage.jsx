import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detailpage() {
  const params = useParams();
  const todo = useSelector((state) => state.todo);

  const foundData = todo.find((item) => {
    console.log(todo);
    return item.id === parseInt(params.id);
  });
  return (
    <header>
      <h1>{foundData.title}</h1>
      <p>{foundData.content}</p>
    </header>
  );
}

export default Detailpage;
