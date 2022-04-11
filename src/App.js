import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Form, Input, InputGroup, InputGroupAddon, Button, Table } from 'reactstrap';

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = e => {
    e.preventDefault()
    addTodo(value)
    console.log(value)
  }

  const addTodo = text => {
    const newTodos = [...todos, text]
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
              <th  className="text-left">
                {todo}
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
