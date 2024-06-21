import { useParams } from 'react-router-dom';
import '../App.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';



function Detail(props){
    
    let [num, setNum] = useState('')
    let {id} = useParams();

    useEffect(()=>{
        if (isNaN(num) == true){
          alert('그러지마세요')
        }
      }, [num])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={props.shose[id].image} width="100%" />
                </div>
                <div className="col-md-6">
                    <input onChange={ (e) => { setNum(e.target.value) } } />
                    <h4 className="pt-5">{props.shose[id].title}</h4>
                    <p>{props.shose[id].content}</p>
                    <p>{props.shose[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;