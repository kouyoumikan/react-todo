import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Form, Input, InputGroup, InputGroupAddon, Button, Table } from 'reactstrap';

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  // ボタン押下時の処理
  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue('')
    console.log(value)
  }
  // リストの追加
  const addTodo = text => {
    const newTodos = [...todos, text]
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

  return (
    <div className="App">
      <Container>
        <h1 className="mt-4">Todo リスト</h1>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Input text="text"
             value={value}
             onChange={e => setValue(e.target.value)}></Input>
            <InputGroupAddon type="append">
              <Button type="submit" color="primary">追加</Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </Container>

      <Container>
        <Table>
          <tbody>
            {todos && todos.map((todo, index) => (
            <tr key={index}>
              <th className="text-left">
                {todo}
              </th>

              <th className="text-right">
                <Button color="danger"
                onClick={() => removeTodo(index)}>削除</Button>
              </th>
            </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
