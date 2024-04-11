import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


const ViewSheet = () => {
    const [apiData, setApiData] = useState()
    const param = useParams()
    /*
      useEffect(()=>{
        fetch("http://localhost:8000/munkalapAll.json")
        .then(res => res.json())
        .then(data => setApiData(data))
      }, [])
    
      return (
        <div id="viewsheet">
            <h2>Megtekintés</h2>
            <div className="viewsheetcard">
               <h1>{id}. elem</h1>
            </div>
        </div>
      )
    }
    */
    useEffect(() => {
        fetch("http://localhost:8000/munkalapAll.json")
            .then(res => res.json())
            .then(data => {

                data.forEach(element => {
                    if (element.id == param.id) {
                        setApiData(element)
                    }
                });

            })
    })

    return (
        <div id="viewsheet">
            <h2>Megtekintés</h2>
            <div className="viewsheetcard">
                {
                    apiData ?
                        <ViewSheetCard {...apiData} /> :
                        <div>Adatok betöltése...</div>
                }
            </div>
        </div>
    )
}
export default ViewSheet

const ViewSheetCard = (props) => {
  return(
    <div className='viewdata'>
        <table>
            <tbody>
                <tr>
                    <th>MunkalapID:</th>
                    <th>{props.id}</th>
                </tr>
                <tr>
                    <td>Név:</td>
                    <td>{props.megrendelo_id.nev}</td>
                </tr>
                <tr>
                    <td>Lakcím:</td>
                    <td>{props.megrendelo_id.cim}</td>
                </tr>
                <tr>
                    <td>E-mail:</td>
                    <td>{props.megrendelo_id.email}</td>
                </tr>
                <tr>
                    <td>Telefon:</td>
                    <td>{props.megrendelo_id.telefon}</td>
                </tr>
                <tr>
                    <td>Hiba:</td>
                    <td>{props.hibatipus_id.hiba}</td>
                </tr>
                <tr>
                    <td>Rendszám:</td>
                    <td>{props.gepjarmu.rendszam}</td>
                </tr>
                <tr>
                    <td>Gyártmány:</td>
                    <td>{props.gepjarmu.gyartmany}</td>
                </tr>
                <tr>
                    <td>Típus:</td>
                    <td>{props.gepjarmu.tipus}</td>
                </tr>
                <tr>
                    <td>Gyártási év:</td>
                    <td>{props.gepjarmu.gyartasi_ev}</td>
                </tr>
                <tr>
                    <td>Alvázszám:</td>
                    <td>{props.gepjarmu.alvazszam}</td>
                </tr>
            </tbody>
        </table>
        <button >Módosítás</button>
        <button >Bezárás</button>
    </div>
  )
}