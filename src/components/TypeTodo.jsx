import React from 'react';
import './typeTodo.css'

const TypeTodo = ({mytype, typeList, todos, onRemove, onToggle, onRemove2, onEdit}) => {

    const newTodos = todos.filter(t => t.type === mytype);

    // #95BA8b, #6FA2DB, #FCB2CB, #81939D, #FBCD35

    const myColor =  (
        (mytype===typeList[0] ? "#ffcb21" 
            : mytype===typeList[1] ? "#6FA2DB" 
            : mytype===typeList[2] ? "#FCB2CB" 
            : mytype===typeList[3] ? "#81939D" 
            : mytype===typeList[4] ? "#95BA8b" 
            : mytype===typeList[5] ? "#a8a8a8" 
            : "#62a3a8")
    );    

    const myid =  (
        (mytype===typeList[0] ? "typeA" 
            : mytype===typeList[1] ? "typeB" 
            : mytype===typeList[2] ? "typeC" 
            : mytype===typeList[3] ? "typeD" 
            : mytype===typeList[4] ? "typeE" 
            : mytype===typeList[5] ? "typeF" 
            : "typeG")
    );    

    return (
        <div className='typeTodo'>
            <div className='typeName' style={{color:`${myColor}`}}>{mytype} <span onClick={()=>onRemove2(mytype)}>☰</span></div>
            {
                newTodos.map(todo=>(
                <div className="typeValue" id={myid}>
                    <input type="checkbox" id={`checkTodo${todo.id}`} onClick={()=>onToggle(todo.id)} checked={todo.active? true : false}/>
                    <label htmlFor={`checkTodo${todo.id}`}>{todo.content}</label>
                    {/* <span style={{cursor : 'pointer', textDecoration : todo.active? 'line-through' : 'none'}} onClick={()=>onToggle(todo.id)} className='box box2'>{todo.id}{todo.content}</span> */}
                    <button onClick={() => onEdit(todo.id)} className='box box3'>수정</button>
                    <button onClick={() => onRemove(todo.id)} className='box box3'>삭제</button>
                </div>
                ))
            }
        </div>
    );
};

export default TypeTodo;