import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function MegrendeloDetail({ match }) {
  const [megrendelo, setMegrendelo] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetchMegrendelo();
  }, []);

  const fetchMegrendelo = async () => {
    const megrendeloId = match.params.id;
    try {
      const response = await fetch(`http://localhost:8000/api/megrendelok/${megrendeloId}/`);
      const data = await response.json();
      setMegrendelo(data);
    } catch (error) {
      console.error('Error fetching megrendelo:', error);
    }
  };

  const handleDelete = async () => {
    const megrendeloId = match.params.id;
    try {
      await fetch(`http://localhost:8000/api/megrendelok/${megrendeloId}/`, {
        method: 'DELETE',
      });
      history.goBack();
    } catch (error) {
      console.error('Error deleting megrendelo:', error);
    }
  };

  if (!megrendelo) {
    return <div>Loading...</div>;
  }

  return (
    <div id="newsheet">
      <h2>Megrendelő részletei</h2>
      <form>
        <div className="newsheetpart">
          <label>Név: </label>
          <input type="text" required value={megrendelo.nev} />
          <label>Cím: </label>
          <input type="text" required value={megrendelo.cim} />
          <label>E-mail: </label>
          <input type="text" required value={megrendelo.email} />
          <label>Telefon: </label>
          <input type="text" required value={megrendelo.telefon} />
          <label>Rendszám: </label>
          <input type="text" required value={megrendelo.rendszam} />
          <label>Gyártmány: </label>
          <input type="text" required value={megrendelo.gyartmany} />
          <label>Típus: </label>
          <input type="text" required value={megrendelo.tipus} />
          <label>Gyártási év: </label>
          <input type="text" required value={megrendelo.gyartasiEv} />
          <label>Alvázszám: </label>
          <input type="text" required value={megrendelo.alvazszam} />

          <div className='button'>
            <button onClick={handleDelete} >Törlés</button>
          </div>
          &nbsp;
          <div className='button'>
            <button onClick={() => history.goBack()}>Bezárás</button>
          </div>


          {/*&nbsp;
          <div className='button'> 
            <Link to={`/megrendelo/${megrendelo.id}/edit`}>Szerkesztés</Link>
          </div>*/
          }
        </div>
      </form>
    </div>
  );
}

export default MegrendeloDetail;
