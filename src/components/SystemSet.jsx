import React from 'react';
import './systemSet.css'

const SystemSet = ({type2, onChange2, onCreate2}) => {
    return (
        <div className='systemSet'>
            <input type="text" name ='type2' placeholder='카테고리명' 
            onChange={onChange2} value={type2} className='sys1'/>
            <button onClick={onCreate2} className='sys2'>카테고리명 추가</button>
        </div>
    );
};

export default SystemSet;