/* eslint-disable array-callback-return */
import React, { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('')
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => {
    setToDo(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo.length === 0) {
      return;
    }

    // 리액트에서는 스테이트를 직접 변경하면 안됨!
    // 빈 array에 push하는 방법!
    setToDos(prev => [toDo, ...prev]);

    setToDo('');
  }

  return (
    <div>
      <h1>해야할것 {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="To Do" value={toDo} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {toDos.map((item, index) =>
          <li key={index}>{item}</li>
        )}

      </ul>
    </div>
  );
}

export default App;