import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Table } from 'reactstrap';

function TodoList({todos, completeTodo, removeTodo}) {

  return (
    <Table>
        <tbody>
        {todos && todos.map((todo, index) => (
        <tr key={index}>
            <th className="text-left" style={{ textDecoration: todo.complete ? "Line-through" : ""}}>
            {todo.text}
            </th>

            <th className="text-right">
            <Button 
            color={todo.complete ? "secondary" : "success"} 
            className="mr-2"
            onClick={() => completeTodo(index)}>{todo.complete ? '完了' : '未完了'}</Button>

            <Button color="danger"
            onClick={() => removeTodo(index)}>削除</Button>
            </th>
        </tr>
        ))}
        </tbody>
    </Table>
  );
}

export default TodoList
