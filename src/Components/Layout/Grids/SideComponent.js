import React ,{useRef}from 'react'
import {QrcodeOutlined,PhoneOutlined,BellOutlined,SettingOutlined} from '@ant-design/icons'

import { Row,Col } from 'antd'
import MenuComponent from './MenuComponent'
function SideComponent() {
  const inputElementone = useRef();
  const inputElementtwo = useRef();
  const inputElementthree = useRef();
  const inputElementfour = useRef();
  const clickone=()=>{
    inputElementone.current.classList.add("active")
    inputElementtwo.current.classList.remove("active")
    inputElementthree.current.classList.remove("active")
    inputElementfour.current.classList.remove("active")
  }
 const clicktwo=()=>{
  inputElementone.current.classList.remove("active")
  inputElementtwo.current.classList.add("active")
  inputElementthree.current.classList.remove("active")
  inputElementfour.current.classList.remove("active")
  }
  const clickthree=()=>{
    inputElementone.current.classList.remove("active")
    inputElementtwo.current.classList.remove("active")
    inputElementthree.current.classList.add("active")
    inputElementfour.current.classList.remove("active")
  }
  const clickfour=()=>{
    inputElementone.current.classList.remove("active")
    inputElementtwo.current.classList.remove("active")
    inputElementthree.current.classList.remove("active")
    inputElementfour.current.classList.add("active")
  }
  return (
      <Row style={{height: "100%"}}>
        <Col className="firstsider siderpartone">
            <div className='firstsidericon active' onClick={clickone} ref={inputElementone}><PhoneOutlined/></div>
            <div className='firstsidericon' onClick={clicktwo} ref={inputElementtwo}><BellOutlined/></div>
            <div className='firstsidericon' onClick={clickthree} ref={inputElementthree}><SettingOutlined/></div>
            <div className='firstsidericon' onClick={clickfour} ref={inputElementfour}><QrcodeOutlined/></div>
        </Col>
        <Col className="secondsider siderparttwo">
         <MenuComponent/>
        </Col>
      </Row>
  )
}

export default SideComponent