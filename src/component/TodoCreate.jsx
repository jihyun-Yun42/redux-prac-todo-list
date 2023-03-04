import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTitle } from '../redux/modules/todo';

function TodoCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  return (
    <header>
      <label>
        제목 :
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        내용 :
        <input
          type="text"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          dispatch(addTitle(title, content));
          // dispatch(addContent(content));
          // console.log(title, content);
        }}
      >
        추가
      </button>
    </header>
  );
}
export default TodoCreate;
