import React from 'react';
import './typeTodo.css'

const TypeTodo = ({mytype, typeList, todos, onRemove, onToggle, onRemove2, onEdit}) => {

    const newTodos = todos.filter(t => t.type === mytype.title);

    // #95BA8b, #6FA2DB, #FCB2CB, #81939D, #FBCD35

    return (
        <div className='typeTodo'>
            <div className='typeName' style={{color:`${mytype.color}`}}>{mytype.title} <span onClick={()=>onRemove2(mytype.title)}>☰</span></div>
            {
                newTodos.map(todo=>(
                <div className="typeValue">
                    <div className='checkBox'>
                    <input type="checkbox" id={`checkTodo${todo.id}`} style={{accentColor:`${mytype.color}`}} onClick={()=>onToggle(todo.id)} checked={todo.active? true : false}/>
                    <label htmlFor={`checkTodo${todo.id}`}>{todo.content}</label>
                    </div>
                    <button onClick={() => onEdit(todo.id)} className='box box3'>수정</button>
                    <button onClick={() => onRemove(todo.id)} className='box box3'>삭제</button>
                </div>
                ))
            }
        </div>
    );
};

export default TypeTodo;