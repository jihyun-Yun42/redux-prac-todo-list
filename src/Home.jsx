import TodoBody from './component/TodoBody';
import TodoCreate from './component/TodoCreate';

function Home() {
  return (
    <div>
      <TodoCreate />
      <TodoBody children="working" done={false} />
      <TodoBody children="done" done />
    </div>
  );
}

export default Home;
