import React from 'react';
import './createTodo.css'

const CreateTodo = ({content, type, onChange, onCreate, typeList}) => {
    
    return (
        <div className='createTodo'>
            <div className='pbox'>
                <select name="type" value={type} onChange={onChange} className='box box1' >
                    {
                        typeList.map(p=>(
                            <option value={p.title}>{p.title}</option>
                        ))
                    }
                </select>
                <input type="text" name ='content' placeholder='내용을 입력해주세요!' 
                onChange={onChange} value={content} className='box box2'/>
                <button onClick={onCreate} className='box box3'>추가</button>
            </div>
        </div>
    );
};

export default CreateTodo;