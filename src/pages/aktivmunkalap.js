import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ActiveSheet = () => {
  const [apiData, setApiData] = useState()

  useEffect(()=>{
    fetch('http://localhost:8000/munkalapAktiv.json')
    .then(res => res.json())
    .then(data => setApiData(data))
  }, [])

  return (
    <div id="activesheet">
        <h2>Aktív munkalapok</h2>
        <div className="cards">
            {
            apiData ?
            apiData.map((data, idx) => (
            <ActiveSheetCard key={idx} {...data} />)) :
            <div>Adatok betöltése...</div>
            }
        </div>
    </div>
  )
}
export default ActiveSheet

const ActiveSheetCard = (props) => {
  return (
    <div className='card'>
        <table>
            <tbody>
                <tr>
                    <th>Munkalapszám:</th>
                    <th>{props.munkalapszam}</th>
                </tr>
                <tr>
                    <td>Név:</td>
                    <td>{props.megrendelo_neve}</td>
                </tr>
                <tr>
                    <td>Státusz:</td>
                    <td className='astatusz'>{props.munkalapstatusz}</td>
                </tr>
                <tr>
                    <td>Üzemanyagszint:</td>
                    <td>{props.uzemanyagszint}</td>
                </tr>
                <tr>
                    <td>Hiba:</td>
                    <td>{props.hiba}</td>
                </tr>
                <tr>
                    <td>Márka:</td>
                    <td>{props.gepjarmu}</td>
                </tr>
            </tbody>
        </table>
        <h1>{`/viewsheet/${props.id}`}ezaz</h1>
        <a className='button' href={`/viewsheet/${props.id}`}>Megtekintés</a>
    </div>
  )
}

