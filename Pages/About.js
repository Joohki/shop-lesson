import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
function About(){
    return (
      <div>
        <h4>about페이지임</h4>
        <Outlet></Outlet>
      </div>
    )
  }

  export {About}