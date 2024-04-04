import React, { useState } from "react"

const NewSheet = () => {
    const [nev, setNev] = useState('');
    const [cim, setCim] = useState('');
    const [email, setEmail] = useState('');
    const [telefon, setTelefon] = useState('');
    const [hiba, setHiba] = useState('Fékrendszer');
    const [rendszam, setRendszam] = useState('');
    const [gyartmany, setGyartmany] = useState('');
    const [tipus, setTipus] = useState('');
    const [gyartasi_ev, setGyartasi_ev] = useState('');
    const [alvazszam, setAlvazszam] = useState('');
    const [datum, setDatum] = useState('');
    const [munkalapstatusz, setMunkalapstatusz] = useState('');
    const [munkalapszam, setMunkalapszam] = useState('');
    const [kmoraallas, setKmoraallas] = useState('');
    const [uzemenyagszint, setUzemenyagszint] = useState('');
    const [hibaleiras, setHibaleiras] = useState('');
    const [varhatohatarido, setVarhatohatarido] = useState('');
    const [elvegzettmunka, setElvegzettmunka] = useState('');
    const [felhasznaltanyag, setFelhasznaltanyag] = useState('');

    return (
        <div id="newsheet">
            <h2>Új munkalap felvétele</h2>
            <form>
                <div className="newsheetpart">
                    <h3>Megrendelő</h3>
                    <label>Név: </label>
                    <input type="text" required value={nev} onChange={(e)=>setNev(e.target.value)}/>

                    <label>Cím: </label>
                    <input type="text" required value={cim} onChange={(e)=>setCim(e.target.value)}/>

                    <label>E-mail: </label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <label>Telefon: </label>
                    <input type="text" required value={telefon} onChange={(e)=>setTelefon(e.target.value)}/>
                </div>
                <div className="newsheetpart">
                    <h3>Hibatípus</h3>
                    <label>Hiba: </label>
                    <select value={hiba} onChange={(e)=>setHiba(e.target.value)}>
                        <option value="Fékrendszer">Fékrendszer</option>
                        <option value="Futómű">Futómű</option>
                        <option value="Olajcsere">Olajcsere</option>
                        <option value="Akkumulátor">Akkumulátor</option>
                        <option value="Vezérlés">Vezérlés</option>
                        <option value="Gumiabroncs">Gumiabroncs</option>
                        <option value="Kipufogó">Kipufogó</option>
                        <option value="Diagnosztika">Diagnosztika</option>
                        <option value="Motor">Motor</option>
                        <option value="Klíma">Klíma</option>
                    </select>
                </div>
                <div className="newsheetpart">
                    <h3>Gépjármű</h3>
                    <label>Rendszám: </label>
                    <input type="text" required value={rendszam} onChange={(e)=>setRendszam(e.target.value)}/>

                    <label>Gyártmány: </label>
                    <input type="text" required value={gyartmany} onChange={(e)=>setGyartmany(e.target.value)}/>

                    <label>Típus: </label>
                    <input type="text" value={tipus} onChange={(e)=>setTipus(e.target.value)}/>

                    <label>Gyártási év: </label>
                    <input type="text" required value={gyartasi_ev} onChange={(e)=>setGyartasi_ev(e.target.value)}/>

                    <label>Alvázszám: </label>
                    <input type="text" required value={alvazszam} onChange={(e)=>setAlvazszam(e.target.value)}/>
                </div>
                <div className="newsheetpart">
                    <h3>Munkalap</h3>
                    <label>Dátum: </label>
                    <input type="text" required value={datum} onChange={(e)=>setDatum(e.target.value)}/>

                    <label>Munkalapstátusz: </label>
                    <input type="text" required value={munkalapstatusz} onChange={(e)=>setMunkalapstatusz(e.target.value)}/>

                    <label>Munkalapszám: </label>
                    <input type="text" value={munkalapszam} onChange={(e)=>setMunkalapszam(e.target.value)}/>

                    <label>Km-óra: </label>
                    <input type="text" required value={kmoraallas} onChange={(e)=>setKmoraallas(e.target.value)}/>

                    <label>Üzemanyagszint: </label>
                    <select value={uzemenyagszint} onChange={(e)=>setUzemenyagszint(e.target.value)}>
                        <option value="Negyed">Negyed tank</option>
                        <option value="Fél">Fél tank</option>
                        <option value="Tele">Tele tank</option>
                    </select>

                    <label>Hiba leírása: </label>
                    <input type="text" required value={hibaleiras} onChange={(e)=>setHibaleiras(e.target.value)}/>

                    <label>Várható határidő: </label>
                    <input type="text" required value={varhatohatarido} onChange={(e)=>setVarhatohatarido(e.target.value)}/>

                    <label>Elvégzett munka megnevezése: </label>
                    <input type="text" required value={elvegzettmunka} onChange={(e)=>setElvegzettmunka(e.target.value)}/>

                    <label>Felhasznált alkatrészek: </label>
                    <input type="text" required value={felhasznaltanyag} onChange={(e)=>setFelhasznaltanyag(e.target.value)}/>
                </div>
                <button>Mentés</button>
                
            </form>
        </div>
    )
}


export default NewSheet