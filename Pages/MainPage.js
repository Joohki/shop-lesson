import {Shoes} from '../Components/shoesComponent.js';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
function MainPage(props) {
    let [buttonCount,setButtonCount]=useState(0);
    const [disable, setDisable] = useState(false);
    useEffect(()=>{if(buttonCount===1){
        axios.get('https://codingapple1.github.io/shop/data2.json').then((e)=>{
        console.log(e.data);
        let copy=[...props.shoes,...e.data];
        props.setShoes(copy);
    })
    .catch((e)=>{
        console.log(e)
    })}
    else if(buttonCount===2){
        axios.get('https://codingapple1.github.io/shop/data3.json').then((e)=>{
        console.log(e.data);
        let copy=[...props.shoes,...e.data];
        props.setShoes(copy);
        setDisable(true);
    })
    .catch((e)=>{
        console.log(e)
    })}
    },[buttonCount])
    return(
        <div>
            <div className="container">
                <div className="row">
                    {
                    props.shoes.map(function(a,i){
                        return(<Shoes shoes={props.shoes[i]} ></Shoes>)
                    })
                    }
                </div>
            </div>
            <button disabled={disable} onClick={()=>{
                setButtonCount(buttonCount+1);
            }}>상품 더가져와</button>
        </div>
    )
  }

export {MainPage}