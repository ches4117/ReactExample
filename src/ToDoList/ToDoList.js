import React, { useState } from 'react'
import logo from './logo.svg'
import './ToDoList.less'

export default function ToDoList() {
    const [todos, setTodos] = useState([
        {
            content: '1',
            isCompleted: false,
        }, {
            content: '2',
            isCompleted: false,
        }, {
            content: '3',
            isCompleted: false,
        }, {
            content: '4',
            isCompleted: false,
        }, {
            content: '5',
            isCompleted: false,
        }
    ])

    const [pages, setPages] = useState(1)
    const [nowPage, setNowPage] = useState(1)
    const pageLimit = 5

    function handleKeyDown(e, i) {
        if (e.key === 'Enter') {
            createTodoAtIndex(e, i)
        }
        if (e.key === 'Backspace' && todos[i].content === '') {
            e.preventDefault()
            return removeTodoAtIndex(i)
        }
    }

    function createTodoAtIndex(e, i) {
        const newTodos = [...todos]
        newTodos.splice(i + 1, 0, {
            content: '',
            isCompleted: false,
        })

        setTodos(newTodos)
        setPages(Math.ceil(newTodos.length / pageLimit))
        setNowPage(Math.floor((i + 1) / pageLimit) + 1)
        setTimeout(() => {
            document.forms && document.forms[0].elements[(i + 1) % pageLimit].focus()
        }, 0)
    }

    function updateTodoAtIndex(e, i) {
        const newTodos = [...todos]
        newTodos[i].content = e.target.value
        setTodos(newTodos)
    }

    function removeTodoAtIndex(i) {
        if (i === 0 && todos.length === 1) return
        setTodos(todos => todos.slice(0, i).concat(todos.slice(i + 1, todos.length)))
        if(todos.length > pageLimit) {
            setPages(Math.ceil((todos.length - 1) / pageLimit))
        }
        setTimeout(() => {
            document.forms && document.forms[0].elements[(i % pageLimit) - 1] && document.forms[0].elements[(i % pageLimit) - 1].focus()
        }, 0)
    }

    function toggleTodoCompleteAtIndex(index) {
        const temporaryTodos = [...todos]
        temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted
        setTodos(temporaryTodos)
    }

    return (
        <div className="app">
            <div className="header">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <form className="todo-list">
                <ul>
                    {todos
                        .map((todo, i) => {
                            if (i >= (nowPage - 1) * pageLimit && i < nowPage * pageLimit) {
                                return (
                                    <div key={`now${i}`} className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
                                        <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(i)}>
                                            {todo.isCompleted && (
                                                <span>&#x2714;</span>
                                            )}
                                        </div>
                                        <input
                                            type="text"
                                            value={todo.content}
                                            onKeyDown={e => handleKeyDown(e, i)}
                                            onChange={e => updateTodoAtIndex(e, i)}
                                            style={{ color: 'black' }}
                                        />
                                    </div>
                                )
                            } else {
                                return null
                            }
                        })}
                </ul>

                <div className="pagination">
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            setNowPage(nowPage - 1 > 0 ? nowPage - 1 : 1 )
                        }}
                    >&laquo;
                    </a>
                    {
                        Array.from({ length: pages }, (_, page) => {
                            return (
                                <a
                                    href="#"
                                    key={`page${page + 1}`}
                                    className={(page + 1) === nowPage ? 'active' : null}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        setNowPage(page + 1)
                                    }}
                                >
                                    {page + 1}
                                </a>
                            )
                        })
                    }
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            setNowPage(nowPage + 1 <= pages ? nowPage + 1 : nowPage)
                        }}
                    >&raquo;
                    </a>
                </div>
            </form>

        </div>
    )
}
