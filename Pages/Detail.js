import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';
import {Nav} from 'react-bootstrap'
import {TabComponent} from '../Components/tabComponent.js';
import { increaseItem } from "../store.js"
import { useDispatch, useSelector } from "react-redux"

function Detail(props){
    let dispatch = useDispatch();
    let {id} = useParams();
    console.log(id);
    let checked = props.shoes.find((a)=>{return(Number(a.id)===Number(id))});
    let [alert,setAlert] = useState(true);
    // useEffect(()=>{setTimeout(()=>{setAlert(false)},2000)},[]);
    let [num,setNum] = useState('');
    useEffect(()=>{if(isNaN(num)){setAlert(true)}else{setAlert(false)}},[num]);

    let [tab,setTab]=useState(0);

    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes1.jpg`} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{checked.title}</h4>
            <p>{checked.content}</p>
            <p>{checked.price}</p>
            <button className="btn btn-danger" onClick={()=>{dispatch(increaseItem({id:checked.id, name: checked.title, count:1}))}}>주문하기</button> 
            {alert ? <div className="yellow">숫자만 입력</div> : null}
          </div>
          <input onChange={(e)=>{setNum(e.target.value)}}></input>
        </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
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
        <TabComponent tab={tab}/>

      </div> 
    )
  }
export {Detail}