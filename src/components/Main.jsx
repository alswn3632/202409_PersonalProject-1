import React, { useRef, useState } from 'react';
import CreateTodo from './CreateTodo';
import PrintTodo from './PrintTodo';
import TypeTodo from './TypeTodo';
import './main.css'

const Main = () => {

    //리스트 초기값
    const nextId = useRef(6);
    const [todos, setTodos] = useState([
        {
            id : 1,
            content : '내 방 청소하기',
            type : '할일',
            active : true       
        },{
            id : 2,
            content : 'mySQL 정리하기',
            type : '공부',
            active : false        
        },{
            id : 3,
            content : '정보처리기사 실기 접수',
            type : '중요',
            active : true       
        },{
            id : 4,
            content : '5시 베테랑 CGV',
            type : '약속',
            active : false        
        },{
            id : 5,
            content : '멍뭉이랑 산책 1시간',
            type : '운동',
            active : false        
        }
    ])

    //리스트 초기값 (타입)
    const typeList = ['중요','공부','약속','운동','할일','기타'];

    //생성기능 - input값 받아오기
    const [inputs, setInputs] = useState({
        content : '',
        type : '할일'
    })

    const {content,type} = inputs;

    const onChange = (e) => {
        const {name,value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    //생성기능 - 기존 배열에 추가하기
    const onCreate = () => {
        const todo = {
            id : nextId.current,
            content : content,
            type : type
        };

        setTodos((todos.concat(todo)).sort(function(a, b){
            return b.id - a.id;
        }));

        setInputs({content:'',type:'할일'});
        nextId.current += 1;
    }

    //삭제기능
    const onRemove = (id) => {
        setTodos(todos.filter(todo => todo.id != id));
    }

    //완료체크
    const onToggle = (id) => {
        setTodos(
            todos.map(todo => (
                todo.id === id?
                {
                    ...todo,
                    active : !todo.active
                }
                : todo
            ))
        );
    }

    //완료퍼센트
    const cntActive = ((todos.filter(todo=> todo.active).length) / todos.length * 100).toFixed(0)

    return (
        <div className='main'>
            <div className='headBox'>TODOLIST</div>

            <CreateTodo typelist={typeList} content={content} type={type} onChange={onChange} onCreate={onCreate}/>

            <div className='sysBox'>
                <div className='box1'>오늘의 달성률 : {cntActive}%</div>
                <button className='box2'>설정</button>
            </div>

            <div className='mainBox'>
                {
                    typeList.map(p=>(
                        <TypeTodo typelist={p} todos={todos} onRemove={onRemove} onToggle={onToggle}/> 
                    ))
                }
            </div>

        </div>
    );
};

export default Main;