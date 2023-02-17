import { Table } from 'react-bootstrap' 
import { useDispatch, useSelector } from "react-redux"
import { createSelectorCreator } from 'reselect'
import { setCart, increaseCount, decreaseCount } from "../store.js"
function Cart(){
    let state = useSelector((state) => { return state } )
    let dispatch = useDispatch();
    return (
    <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
            </tr>
        </thead>
        <tbody>
        {
            state.cart.map((a, i)=>
            <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].name}</td>
                <td>{state.cart[i].count}</td> 
                <td><button onClick={()=>{dispatch(increaseCount(state.cart[i].id))}}>+</button><button onClick={()=>{dispatch(decreaseCount(state.cart[i].id))}}>-</button></td>
            </tr>
            )
        }
        <button onClick={()=>{
            dispatch(setCart())
        }}>초기화</button>
        </tbody>
    </Table>)
}

export {Cart};