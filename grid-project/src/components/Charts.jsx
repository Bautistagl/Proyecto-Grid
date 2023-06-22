import React from 'react'
import BarChart from './BarChart'
import LineChart from './LineChart'
import { useState } from 'react';
import {UserData} from '../Data'
import {LineData} from '../DataLine'

const Charts = () => {
    const [userData, SetUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
          label:'Minado BTC',
          data: UserData.map((data) => data.btcGain),
          backgroundColor: ['#36B079'],
          borderColor: 'white'
    
        }]
      })
      const [userData2, SetUserData2] = useState({
        labels: LineData.map((data) => data.year),
        datasets: [{
          label:'Valor total cuenta BTC',
          data: LineData.map((data) => data.btcGain),
          backgroundColor: ['#36B079'],
          borderColor: 'white'
    
        }]
      })
  return (
    <div className='contenedor-general-charts'>
    <div className='contenedor-charts'> 

    <div className="chart-asic-hosting">
    <BarChart  chartData={userData} />
    </div>
    <div className="chart-line-asic-hosting">
    <LineChart  chartData={userData2} />
    </div>
    </div>
    <div className='contenedor-hardware'> 
    <h4> Antminer S19 Pro</h4>
    <img alt='' className='foto-hardware' src='/asicpng.png'/>
    <div className='total-balance'> 
    Total balance
    <h5> $2043.32 </h5>

    </div>


    </div>
    </div>
  )
}

export default Charts