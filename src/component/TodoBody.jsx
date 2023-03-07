import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Edit from './Edit';

const TodoBox = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid purple;
  border-radius: 10px;
`;

function TodoBody({ children, done }) {
  const todo = useSelector((state) => state.todo);

  console.log(todo);
  return (
    <main>
      <h1>{children}</h1>
      <section
        style={{
          display: 'flex',
        }}
      >
        {todo.map(
          (item) =>
            item.done === done && (
              <TodoBox key={item.id}>
                <Edit item={item} />
              </TodoBox>
            )
        )}
      </section>
    </main>
  );
}

export default TodoBody;
