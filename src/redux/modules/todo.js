const WORKING = 'todo/working';
const DELETE = 'todo/delete';
const TODO = 'todo/title';
const EDIT = 'todo/edit';

export const addTitle = (payload) => {
  return {
    type: TODO,
    payload,
  };
};
export const workingDone = (payload) => {
  return {
    type: WORKING,
    payload,
  };
};
export const todoDelete = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};
export const todoEdit = (payload) => {
  return {
    type: EDIT,
    payload,
  };
};

const initialState = [
  { id: 1, title: '리덕스배우기', content: 'Lv2과제 마무리 하기', done: false },
  { id: 2, title: 'Lv3 과제', content: 'styled-components 적용해보기', done: false },
  { id: 3, title: '라우터', content: '벨로그에 정리하기', done: true },
  { id: 4, title: '동기, 비동기', content: '벨로그에 정리하기 22', done: true },
];
const todo = (state = initialState, action) => {
  switch (action.type) {
    case TODO:
      return [
        ...state,
        {
          id: state[state.length - 1].id + 1,
          title: action.payload.title,
          content: action.payload.content,
          done: false,
        },
      ];
    case WORKING:
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    case DELETE:
      return state.filter((item) => item.id !== action.payload);
    case EDIT:
      return state.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              title: action.payload.title,
              content: action.payload.content,
            }
          : item
      );
    // case EDIT_BTN:
    //   return state.map((item) =>
    //     item.id === action.id ? { ...item, edit: !item.edit } : item
    //   );
    default:
      return state;
  }
};

export default todo;
