import React from 'react'

const DataCollected = ({dataAmount}) => {
  return (
    <div className="dataCollectedContainer">
        <p><span style={{color: '#1f39ff', fontWeight: 'bold'}}>{dataAmount.toLocaleString('en-US')}</span> Data has been collected<br/>by Instagram!</p>
    </div>
  )
}

export default DataCollected