import React from 'react';

interface TodoItem {
  id: number;
  title: string;
}

interface TodoProps {
  items?: TodoItem[]; // Make items optional
}

export default function FirstBlog(props: Readonly<TodoProps>) {
  return (
    <div className='todo-container'>
      <ol>
        {props.items?.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </ol>
    </div>
  );
}

// Child component (TodoItem)
interface TodoItemProps {
  title: string;
}

function TodoItem(props: Readonly<TodoItemProps>) {
  return <li>{props.title}</li>;
}
