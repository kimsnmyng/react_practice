import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
        onSubmit(); // enter로 데이터 submit 기능
    }
  }
  const onSubmit = () => {
    if (content === "") { // 공백 방지
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // 빈 문자열로 초기화
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        onKeyDown={onKeyDown}
        value={content}
        onChange={onChangeContent}
        placeholder="새로운 Todo"
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
