import React, { useRef, useState } from 'react';
import CreateTodo from './CreateTodo';
import TypeTodo from './TypeTodo';
import './main.css'
import SystemSet from './SystemSet';
import CompList from './CompList';

const Main = () => {

    //투두리스트 초기값
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
            content : '베테랑2 5시 CGV',
            type : '약속',
            active : false        
        },{
            id : 5,
            content : '멍뭉이 산책 1시간',
            type : '운동',
            active : false        
        }
    ])

    //카테고리 초기값
    const [typeList, setTypeList] = useState(['중요','할일','약속','공부','운동'])

    //카테고리 생성기능 - input 값 받아오기
    const [type2, setType2] = useState('')

    const onChange2 = (e) => {
        setType2(e.target.value);
    }

    const onCreate2 = () => {
        if(type2 === ''){
            window.alert("내용을 입력해주세요.")
        }else{
            setTypeList((typeList.concat(type2)));
        }
        setType2('');
    }

    //카테고리 생성기능 - 모달창 구현
    const [modal, setModal] = useState(false);


    //카테고리 삭제기능
    const onRemove2 = (a) => {
        if(todos.filter(todo => todo.type === a).length){
            if(window.confirm("카테고리에 포함된 내용도 같이 삭제됩니다.\n그래도 삭제하시겠습니까?")){
                setTypeList(typeList.filter(t => t != a));
                setTodos(todos.filter(todo => todo.type != a));
            }
        }else{
            setTypeList(typeList.filter(t => t != a));
            setTodos(todos.filter(todo => todo.type != a));
        }
    }

    //리스트 생성기능 - input값 받아오기
    const [inputs, setInputs] = useState({
        content : '',
        type : typeList[0]
    })

    const {content,type} = inputs;

    const onChange = (e) => {
        const {name,value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    }

    //리스트 생성기능 - 기존 배열에 추가하기
    const onCreate = () => {
        if(content === ''){
            window.alert("내용을 입력해주세요.")
        }else if(type === undefined){
            window.alert("카테고리가 없습니다.\n카테고리를 추가하고 진행해주세요.")
        }else{
            console.log(type)
            const todo = {
                id : nextId.current,
                content : content,
                type : type
            };
            
            setTodos((todos.concat(todo)).sort(function(a, b){
                return b.id - a.id;
            }));

            nextId.current += 1;
        }
        setInputs({content:'',type:typeList[0]});
    }

    //리스트 삭제기능
    const onRemove = (id) => {
        setTodos(todos.filter(todo => todo.id != id));
    }

    //리스트 수정기능
    const onEdit = (id) => {
        const edit = prompt("변경 사항을 입력해주세요");

        setTodos(
            todos.map(todo => (
                todo.id === id?
                {
                    ...todo,
                    content : edit
                }
                : todo
            ))
        );
    }

    //리스트 완료체크
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

    //리스트 완료퍼센트
    const cntActive = ((todos.filter(todo=> todo.active).length) / todos.length * 100).toFixed(0)

    //미완료, 완료 구분으로 보기
    const [version, setVersion] = useState(false);

    return (
        <div className='main'>
            <div className='headBox'>TODOLIST</div>

            {
                modal === true? <SystemSet type2={type2} onChange2={onChange2} onCreate2={onCreate2}/> : <CreateTodo typelist={typeList} content={content} type={type} onChange={onChange} onCreate={onCreate}/>
            }

            <div className='sysBox'>
                <div className='box1'>오늘의 달성률 : {cntActive}%</div>
                <button className='box2' onClick={()=>{version === true ? setVersion(false) : setVersion(true)}}>표시</button>
                <button className='box2' onClick={()=>{modal === true ? setModal(false) : setModal(true)}}>설정</button>
            </div>

            <div className='mainBox'>
                {
                    version === false?
                    typeList.map(p=>(
                        <TypeTodo mytype={p} typeList={typeList} todos={todos} onRemove={onRemove} onToggle={onToggle} onRemove2={onRemove2} onEdit={onEdit}/> 
                    ))
                    : null
                }
                {
                    version === true?
                    <CompList todos={todos} onRemove={onRemove} onToggle={onToggle} onEdit={onEdit}/>
                    : null
                }
            </div>
        </div>
    );
};

export default Main;