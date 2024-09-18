import React from 'react';
import './systemSet.css'

const SystemSet = ({title, color, onChange2, onCreate2}) => {
    return (
        <div className='systemSet'>
            <input type="color" name="color" onChange={onChange2} value={color} className='sys1'/>
            <input type="text" name ='title' placeholder='카테고리 제목을 입력해주세요!' 
            onChange={onChange2} value={title} className='sys2'/>
            <button onClick={onCreate2} className='sys3'>추가</button>
        </div>
    );
};

export default SystemSet;