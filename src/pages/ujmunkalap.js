import React from "react"

const NewSheet = () => {
    return (
        <div id="newsheet">
            <h2>Új munkalap felvétele</h2>
            <form>
                <div className="newsheetpart">
                    <h3>Megrendelő</h3>
                    <label>Név: </label>
                    <input type="text" required/>
                    <label>Cím: </label>
                    <input type="text" required/>
                    <label>E-mail: </label>
                    <input type="text" />
                    <label>Telefon: </label>
                    <input type="text" required/>
                </div>
                <div className="newsheetpart">
                    <h3>Hibatípus</h3>
                    <label>Hiba: </label>
                    <select>
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
                    <input type="text" required/>
                    <label>Gyártmány: </label>
                    <input type="text" required/>
                    <label>Típus: </label>
                    <input type="text" />
                    <label>Gyártási év: </label>
                    <input type="text" required/>
                    <label>Alvázszám: </label>
                    <input type="text" required/>
                </div>
                <div className="newsheetpart">
                    <h3>Munkalap</h3>
                    <label>Dátum: </label>
                    <input type="text" required/>
                    <label>Munkalapstátusz: </label>
                    <input type="text" required/>
                    <label>Munkalapszám: </label>
                    <input type="text" />
                    <label>Km-óra: </label>
                    <input type="text" required/>
                    <label>Üzemanyagszint: </label>
                    <select>
                        <option value="Negyed">Negyed tank</option>
                        <option value="Fél">Fél tank</option>
                        <option value="Tele">Tele tank</option>
                    </select>
                    <label>Hiba leírása: </label>
                    <input type="text" required/>
                    <label>Várható határidő: </label>
                    <input type="text" required/>
                    <label>Elvégzett munka megnevezése: </label>
                    <input type="text" required/>
                    <label>Felhasznált alkatrészek: </label>
                    <input type="text" required/>
                </div>
                <button>Mentés</button>
            </form>
        </div>
    )
}


export default NewSheet