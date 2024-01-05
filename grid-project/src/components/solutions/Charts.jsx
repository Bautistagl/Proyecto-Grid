import React from 'react'
import BarChart from './BarChart'
import LineChart from '../LineChart'
import { useState } from 'react';
import {UserData} from '../../Data'
import {UserData2} from '../../Data2'
import {UserData3} from '../../Data3'
import {LineData} from '../../DataLine'

const Charts = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
          label:'COST/YEAR',
          data: UserData.map((data) => data.btcGain),
          backgroundColor: ['green', 'yellow', 'blue', 'orange'],
          borderColor: 'white',
          barThickness: 50,
    
        }]
      })

      const handleData1 = () => {
        setUserData({
          labels: UserData.map((data) => data.year),
          datasets: [{
            label: 'COST/YEAR',
            data: UserData.map((data) => data.btcGain),
            backgroundColor: ['green', 'yellow', 'blue', 'orange'],
            borderColor: 'white',
          }],
        });
      };
    
      const handleData2 = () => {
        setUserData({
          labels: UserData2.map((data) => data.year),
          datasets: [{
            label: 'COST/YEAR',
            data: UserData2.map((data) => data.btcGain),
            backgroundColor: ['green', 'yellow', 'blue', 'orange'],
            borderColor: 'white',
          }],
        });
      };
    
      const handleData3 = () => {
        setUserData({
          labels: UserData3.map((data) => data.year),
          datasets: [{
            label: 'COST/YEAR',
            data: UserData3.map((data) => data.btcGain),
            backgroundColor: ['green', 'yellow', 'blue', 'orange'],
            borderColor: 'white',
          }],
        });
      };
      const options = {
        scales: {
          x: {
            ticks: {
              color: 'white', // Color de las marcas del eje X
              font: {
                size: 12, // Tamaño de la fuente del eje X
              },
            },
          },
          y: {
            ticks: {
              color: 'white', // Color de las marcas del eje Y
              font: {
                size: 16, // Tamaño de la fuente del eje Y
              },
            },
          },
        },
      };
      
  return (
    <>
         <div className="titulo-asic"> A fraction of the cost for real privacy</div>
      <div className="subtituloBanner2">Experience the Future of PaaS: 16x Cheaper, 100% Reliable, and data ownership</div>
    <div className='contenedor-general-charts'>
        <button onClick={handleData1}>2 vCPU</button>
        <button onClick={handleData2}>4 vCPU</button>
        <button onClick={handleData3}>8 vCPU</button>
    <div className='contenedor-charts'> 

    <div className="chart-asic-hosting">
    <BarChart options={options} chartData={userData} />
    </div>
   
    </div>
    


    </div>
    </>
   
  )
}

export default Charts