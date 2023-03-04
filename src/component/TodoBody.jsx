import React from 'react';
// import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
// import { workingDone, todoDelete, editBtn } from '../redux/modules/todo';
// import Input from './Input';
import Edit from './Edit';
// import { useNavigate } from 'react-router-dom';

const TodoBox = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid purple;
  border-radius: 10px;
`;
function TodoBody({ children, done }) {
  const todo = useSelector((state) => state.todo);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

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
                {/* <button onClick={() => navigate(`/detailpage/${item.id}`)}>
                  상세 ㄱㄱ
                </button> */}
              </TodoBox>
            )
        )}
      </section>
    </main>
  );
}

export default TodoBody;
