import { Col, Row, Input,Drawer,Menu} from 'antd'
import React,{useState,useRef} from 'react'
import {AudioOutlined,QrcodeOutlined,PhoneOutlined,BellOutlined, AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import MenuComponent from './MenuComponent';
const { Search } = Input;
function PhoneHeader() {
  const items = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
    },
    {
      label: 'Navigation Three',
      key: 'setting',
      icon: <SettingOutlined />,
    },
  ];
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    setOpen(false);
  };
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
  const showDrawer = () => {
    console.log("op")
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <Row>
        <Col className="logostyle partone">
        <QrcodeOutlined onClick={showDrawer}  className="logoicon"/>
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
        <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key="left"
      >
         <Row style={{height: "100%"}}>
        <Col className="firstsider siderpartone">
            <div className='firstsidericon active' onClick={clickone} ref={inputElementone}><PhoneOutlined/></div>
            <div className='firstsidericon' onClick={clicktwo} ref={inputElementtwo}><BellOutlined/></div>
            <div className='firstsidericon' onClick={clickthree} ref={inputElementthree}><SettingOutlined/></div>
            <div className='firstsidericon' onClick={clickfour} ref={inputElementfour}><QrcodeOutlined/></div>
        </Col>
        <Col className="secondsider siderparttwo">
        <Menu className='menustyle' onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} />
        </Col>
      </Row>
      </Drawer>
    </Row>
  )
}

export default PhoneHeader
