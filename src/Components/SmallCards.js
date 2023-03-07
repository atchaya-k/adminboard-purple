import { Card, Row,Col } from 'antd'
import React from 'react'
import Icon, { VerifiedOutlined } from '@ant-design/icons'
import { AreaChart, Area,  Tooltip, ResponsiveContainer } from 'recharts';
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
const SmallCards=(props)=> {
  return (
   <Card className={`small-card ${props.name}`}>
    <Row>
      <Col span={8} className="small-card-left">
        <span className='small-card-title'>
      {props.children}      
        </span>
        <div className='small-card-titlemain'>Header</div>
        <div className='small-card-num'>77</div>
      </Col>
      <Col span={16} className='small-card-chart'>
                  <ResponsiveContainer className="small-charts" width="100%" height="100%">
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
      </Col>
    </Row>
   </Card>
  )
}

export default SmallCards;
//<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
//<path fill="#34265a" fill-opacity="1" d="M0,128L360,128L720,224L1080,128L1440,160L1440,320L1080,320L720,320L360,320L0,320Z"></path>
//</svg>