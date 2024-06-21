import { useParams } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';

function Detail(props){
    
    let [num, setNum] = useState('')
    let {id} = useParams();
    let [tab, setTab] = useState(0);
    
    let [fade2, setFade2] = useState('')

    useEffect(()=>{
        setFade2('end')
        return ()=>{
        setFade2('')
        }
    },[])


    return (
        <div className={'container start ' + fade2}>
            <div className="row">
                <div className="col-md-6"> 
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <input onChange={ (e) => { setNum(e.target.value) } } />
                    <h4 className="pt-5">{props.shose[id].title}</h4>
                    <p>{props.shose[id].content}</p>
                    <p>{props.shose[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant='tabs' defaultActiveKey="lick0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />

        </div> 
    )
}

function TabContent({tab}){

    let [fade, setFade] = useState('')

    useEffect(()=>{
        setTimeout(() => {
            setFade('end')
        }, 100)
        return () => {
            setFade('')
        }
    }, [tab])

    return <div className={'start' + fade}>
        {
            [ <div>내용0</div>, <div>내용1</div>, <div>내용2</div> ][tab]
        }
    </div>
}

export default Detail;