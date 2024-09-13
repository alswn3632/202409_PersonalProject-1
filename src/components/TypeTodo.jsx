import React from 'react';
import './typeTodo.css'

const TypeTodo = ({typelist, todos, onRemove, onToggle}) => {

    const newTodos = todos.filter(t => t.type === typelist);

    return (
        <div className='typeTodo'>
            <div className='typeName'>{typelist}</div>
            {
                newTodos.map(todo=>(
                <div className="typeValue">
                    <input type="checkbox" id={`checkTodo${todo.id}`} onClick={()=>onToggle(todo.id)} checked={todo.active? true : false}/>
                    <label htmlFor={`checkTodo${todo.id}`}>{todo.content}</label>
                    {/* <span style={{cursor : 'pointer', textDecoration : todo.active? 'line-through' : 'none'}} onClick={()=>onToggle(todo.id)} className='box box2'>{todo.id}{todo.content}</span> */}
                    <button onClick={() => onRemove(todo.id)} className='box box3'>☰</button>
                </div>
                ))
            }
        </div>
    );
};

export default TypeTodo;