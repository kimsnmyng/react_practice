import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDelete = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};


// 고차 컴포넌트 (HOC)
export default memo(TodoItem, (prevPops, nextProps) => {
  // 반환값에 따라, Props가 바뀌었는지 안 바뀌었는지 판단
  // T => Props 바뀌지 않음 -> 리렌더링 X
  // F => Props 바뀜 -> 리렌더링 O

  if (prevPops.id !== nextProps.id) return false;
  if (prevPops.isDone !== nextProps.isDone) return false;
  if (prevPops.content !== nextProps.content) return false;
  if (prevPops.date !== nextProps.date) return false;

  return true; // props의 값이 바뀌지 않았고, 리렌더링 하지 말아라.
});
