import React from 'react';

const PrintTodo = ({todo, onRemove, onToggle}) => {

    const bgColor =  (
        (todo.type==='공부' ? "rgba(109, 152, 195, 0.5)" 
            : todo.type==='운동' ? "rgba(255, 237, 166, 0.5)" 
            : todo.type==='할일' ? "rgba(255, 142, 179, 0.5)" 
            : todo.type==='약속' ? "rgba(160, 255, 177, 0.5)" 
            : "rgba(149, 149, 149, 0.5)")
    );    

    return (
        <div className='printTodo'>
            <div className='pbox'>
                <span className='box box1' style={{backgroundColor:`${bgColor}`}}>{todo.type}</span>
                <span style={{cursor : 'pointer', textDecoration : todo.active? 'line-through' : 'none'}} onClick={()=>onToggle(todo.id)} className='box box2'>{todo.id}{todo.content}</span>
                <button onClick={() => onRemove(todo.id)} className='box box3'>삭제</button>
            </div>
        </div>
    );
};

export default PrintTodo;