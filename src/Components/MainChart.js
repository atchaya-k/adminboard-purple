import { Card } from 'antd'
import React from 'react'
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
function MainChart() {
  return (
    <Card className='chartcard' title="Header">
      <div className="Flip-Chart">
                    <ResponsiveContainer className="small-chart" width="100%" height="100%">
                    <AreaChart
          width={500}
          height={400}
          data={data}
        >
          <Tooltip />
          <defs>
    <linearGradient id="colorUv" x1="1" y1="1" x2="1" y2="0">
      <stop offset="15%" stopColor="#8156d3" stopOpacity={0.2}/>
      <stop offset="100%" stopColor="#8156d3" stopOpacity={0.8}/>
    </linearGradient>
  </defs>
          <Area type="monotone" dataKey="uv"  stroke={false} fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
      </div>
    </Card>
  )
}

export default MainChart