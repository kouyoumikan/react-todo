import React, {createContext, useState} from 'react';

export const TodosContext = createContext()

const TodosContextProvider = (props) => {
    const [todos, setTodos] = useState([])

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
        <TodosContext.Provider value={{todos, addTodo, removeTodo, completeTodo}}>
            {props.children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;