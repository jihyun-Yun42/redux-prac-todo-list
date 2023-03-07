import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTitle } from '../redux/modules/todo';

function TodoCreate() {
  const [todo, setTodo] = useState({
    title: '',
    content: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(addTitle({ ...todo }));
    setTodo({ title: '', content: '' });
  };
  return (
    <header>
      <label>제목 :</label>
      <input type="text" name="title" value={todo.title} onChange={handleChange} />

      <label>내용 :</label>
      <input type="text" name="content" value={todo.content} onChange={handleChange} />

      <button onClick={handleSubmit}>추가</button>
    </header>
  );
}
export default TodoCreate;
