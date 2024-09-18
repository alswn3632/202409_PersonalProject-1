import React from 'react';
import './compList.css'

const CompList = ({todos, onRemove, onToggle, onEdit}) => {

    const comp1 = todos.filter(todo=> todo.active);
    const comp2 = todos.filter(todo=> !todo.active);

    return (
        <div className='compList'>
            <div className='typeName'>진행<span>☰</span></div>
            {
                comp2.map(todo=>(
                <div className="typeValue">
                    <div className='checkBox'>
                        <input type="checkbox" id={`checkTodo${todo.id}`} style={{accentColor:'#93b3d2'}} onClick={()=>onToggle(todo.id)} checked={todo.active? true : false}/>
                        <label htmlFor={`checkTodo${todo.id}`}>{todo.content}</label>
                    </div>
                    <button onClick={() => onEdit(todo.id)} className='box box3'>수정</button>
                    <button onClick={() => onRemove(todo.id)} className='box box3'>삭제</button>
                </div>
                ))
            }
            <div className='typeName margin'>완료<span>☰</span></div>
            {
                comp1.map(todo=>(
                <div className="typeValue">
                    <div className='checkBox'>
                        <input type="checkbox" id={`checkTodo${todo.id}`} style={{accentColor:'#93b3d2'}} onClick={()=>onToggle(todo.id)} checked={todo.active? true : false}/>
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

export default CompList;