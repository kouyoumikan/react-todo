import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Button, Table } from 'reactstrap';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  // // ボタン押下時の処理
  // const handleSubmit = e => {
  //   e.preventDefault()
  //   addTodo(value)
  //   setValue('')
  //   console.log(value)
  // }
  // リストの追加
  const addTodo = text => {
    const newTodos = [...todos, {text, complete:false}]
    setTodos(newTodos)
    console.log(newTodos)
  }
  // リストの削除
  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
    console.log(newTodos)
  }
  // 完了・未完了ボタン押下時の処理
  const completeTodo = index => {
    const newTodos = setTodos(value)
    newTodos.splice[index].complete = !newTodos[index].complete
    setTodos(newTodos)
    console.log(newTodos)
  }

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <TodoForm addTodo={addTodo}></TodoForm>
        {/* <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input text="text"
             value={value}
             onChange={e => setValue(e.target.value)}></Input>
            <InputGroup.Addon type="append">
              <Button type="submit" color="primary">追加</Button>
            </InputGroup.Addon>
          </InputGroup>
        </Form> */}
      </Container>

      <Container>
        <TodoList 
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        >

        </TodoList>
        {/* <Table>
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
        </Table> */}
      </Container>
    </div>
  );
}

export default App;
