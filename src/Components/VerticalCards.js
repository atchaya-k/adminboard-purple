import { Card, Row,Col } from 'antd'
import React from 'react'
import { AreaChart, Area,  Tooltip, ResponsiveContainer } from 'recharts';
import Icon, { VerifiedOutlined } from '@ant-design/icons'
const data = [
  {
    name: 'Page A',
    uv: 400,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 700,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const VerticalCards=(props)=> {
  return (
    <Card className={`vertical-card ${props.name}`}>
    <Row>
      <Col span={12} className="vertical-card-left">
        <span className='vertical-card-title'>
      {props.children}      
        </span>
      </Col>
      <Col span={12} className="vertical-card-right">
        <div className='vertical-card-titlemain'>Header</div>
        <div className='vertical-card-num'>77</div>
      </Col>
    </Row>
    <Row className='vertical-card-chart'>
      <ResponsiveContainer className="vertical-charts" width="100%" height="100%">
         <AreaChart
          width={400}
          height={400}
          data={data}
        >
          <Tooltip />
          <defs>
    <linearGradient id="colorPv" x1="1" y1="1" x2="1" y2="0">
      <stop offset="5%" stopColor="#ffffff" stopOpacity={0.2}/>
      <stop offset="55%" stopColor="#ffffff" stopOpacity={0.8}/>
    </linearGradient>
  </defs>
          <Area type="monotone" dataKey="uv"  stroke={false} fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>
    </Row>
   </Card>
  )
}

export default VerticalCards