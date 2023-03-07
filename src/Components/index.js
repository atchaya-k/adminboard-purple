import { Col,Row } from 'antd'
import React from 'react'
import MainChart from './MainChart';
import SmallCards from './SmallCards';
import VerticalCards from './VerticalCards';
import { BlockOutlined,GlobalOutlined,GroupOutlined,LaptopOutlined } from '@ant-design/icons';
import RightEndCard from './RightEndCard';
import PhoneLastCard from './PhoneLastCard';
import SecondChart from './SecondChart';
const w = window.innerWidth;
function Components() {
  return (
    <Row gutter={24} style={{marginRight: "0px",marginLeft: "0px"}}>
      { w < 1024 ? 
       <Col xs={24} sm={24} md={24} className="main-content">
       <Row>
         <MainChart/>
       </Row>
       <div className='header-one'>Header One</div>          
       <Row gutter={24}>            
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <SmallCards name="one" children={<BlockOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <SmallCards name="two" children={<GlobalOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <SmallCards name="three" children={<GroupOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <SmallCards name="four" children={<LaptopOutlined/>}/>
        </Col>
       </Row>
       <div className='header-one' style={{marginTop:"1em"}}>Header One</div>
       <Row gutter={24}>
       <Col xs={24} sm={24} md={12} lg={6} xl={6}>
         <VerticalCards name="one" children={<BlockOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <VerticalCards name="two" children={<GlobalOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <VerticalCards name="three"children={<GroupOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <VerticalCards name="four" children={<LaptopOutlined/>}/>
        </Col>
       </Row>
       <Row gutter={24} style={{marginRight: "5px",marginLeft: "5px"}}>
        <Col xs={24} sm={24} md={24} className='phonerightendcard'>
        <PhoneLastCard/></Col>
       </Row>
       <Row>
        <SecondChart/>
       </Row>
     </Col> :
       <Col lg={19} xl={19} className="main-content">
       <Row>
         <MainChart/>
       </Row>
       <div className='header-one'>Header One</div>          
       <Row gutter={24}>            
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <SmallCards name="one" children={<BlockOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <SmallCards name="two" children={<GlobalOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <SmallCards name="three" children={<GroupOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <SmallCards name="four" children={<LaptopOutlined/>}/>
        </Col>
       </Row>
       <div className='header-one' style={{marginTop:"1em"}}>Header One</div>
       <Row gutter={24}>
       <Col xs={24} sm={24} md={12} lg={6} xl={6}>
         <VerticalCards name="one" children={<BlockOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <VerticalCards name="two" children={<GlobalOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <VerticalCards name="three"children={<GroupOutlined/>}/>
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6}>
        <VerticalCards name="four" children={<LaptopOutlined/>}/>
        </Col>
       </Row>
       <Row>
        <SecondChart/>
       </Row>
     </Col>
      }
        { w < 1024 ? null :
        <Col xs={5} sm={5} md={5} lg={5} xl={5} className="rightendcard">
        <RightEndCard/>
        </Col>
}
    </Row>
  )
}

export default Components;