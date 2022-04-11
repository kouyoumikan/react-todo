import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form, Input, InputGroup, Button } from 'reactstrap';

function TodoForm({addTodo}) {
    const [value, setValue] = useState('')
  
    // ボタン押下時の処理
    const handleSubmit = e => {
      e.preventDefault()
      addTodo(value)
      setValue('')
      console.log(value)
    }

  return (
    <Form onSubmit={handleSubmit}>
        <InputGroup>
        <Input text="text"
            value={value}
            onChange={e => setValue(e.target.value)}></Input>
        <InputGroup.Addon type="append">
            <Button type="submit" color="primary">追加</Button>
        </InputGroup.Addon>
        </InputGroup>
    </Form>
  );
}

export default TodoForm;
