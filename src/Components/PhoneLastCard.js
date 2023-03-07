import React from 'react'
import { GroupOutlined, BlockOutlined,GlobalOutlined ,LaptopOutlined} from '@ant-design/icons';
import {Progress,Row,Statistic,Col,Card, Avatar, List} from 'antd'
import StatisticCard from './StatisticCard';
import RightCard from './RightCard';
const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
function PhoneLastCard() {
  return (
     <div>
        <div className='header-two'>Header One</div>  
        <Row className='circle-bar'>
          <Progress type="circle" percent={75} strokeWidth={9}/>
        </Row>
        <div className='header-two'>Header One</div> 
        <Row gutter={24} style={{marginTop:"10px"}}>
            <Col span={10} offset={1}>
             <StatisticCard name="one" children={<BlockOutlined/>}/>
            </Col>
            <Col span={10} offset={2}>
              <StatisticCard name="two" children={<GlobalOutlined/>}/>
            </Col>
          </Row> 
          <Row gutter={24} style={{marginTop:"10px"}}>
            <Col span={10} offset={1}>
             <StatisticCard name="three" children={<GroupOutlined/>}/>
            </Col>
            <Col span={10} offset={2}>
              <StatisticCard name="four" children={<LaptopOutlined/>}/>
            </Col>
          </Row> 
        <div className='header-two' style={{marginBottom:"15px"}}>Header One</div>
        <Row gutter={24} style={{marginTop:"10px"}}>
        <Col span={24}>
        <RightCard name="four" children={<LaptopOutlined/>}/>
        </Col>
        <Col span={24} >
        <RightCard name="three" children={<GroupOutlined/>}/>
        </Col></Row>
     </div>
  )
}

export default PhoneLastCard;