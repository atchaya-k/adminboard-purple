import React from 'react'
import { Card } from 'antd'
function StatisticCard(props) {
  return (
    <Card className={`statistic-card ${props.name}`}>
    <span className='small-card-title'>
{props.children}      
</span>
    <div className='small-card-titlemain'>Header</div>
<div className='small-card-num'>77</div>
    </Card> 
  )
}

export default StatisticCard