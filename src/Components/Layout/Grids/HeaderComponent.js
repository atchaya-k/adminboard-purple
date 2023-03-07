import { Col, Row, Input,Drawer} from 'antd'
import React,{useState} from 'react'
import {AudioOutlined,QrcodeOutlined,PhoneOutlined,BellOutlined,SettingOutlined} from '@ant-design/icons'
const { Search } = Input;
const w = window.innerWidth;
function HeaderComponent() {

  return (
    <Row>
        <Col className="logostyle partone">
        <QrcodeOutlined className="logoicon"/>         
        </Col>
        <Col className="headername parttwo">
         Explore
        </Col>
        <Col className="searchbar partthree">
        <Search className='commonsearch'
      placeholder="Explore"/>
        </Col>
        <Col className='iconsbar partfour'>
        <Row className="iconsgrid">
            <Col className="iconatend"> <PhoneOutlined/></Col>
            <Col className="iconatend"><BellOutlined/></Col>
            <Col className="iconatend"><SettingOutlined/></Col>
        </Row>
        </Col>
     
    </Row>
  )
}

export default HeaderComponent