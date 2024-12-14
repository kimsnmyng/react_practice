import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLocaleLowerCase())); // 소문자로 만들어서 대소문자 구분 안 하고 결과값 찾기
  }; // 검색어와 일치하는 값만 필터링

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>To do List😎</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하쇼"
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
        })}
      </div>
    </div>
  );
};

export default List;
