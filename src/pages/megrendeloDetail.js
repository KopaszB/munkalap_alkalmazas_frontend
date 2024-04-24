import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MegrendeloDetail({ match }) {
  const [megrendelo, setMegrendelo] = useState(null);
  const [editMegrendelo, setEditMegrendelo] = useState(null);
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
      setEditMegrendelo(data); // Inicializáljuk az űrlapot az aktuális rekord adataival
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
      history.push('/megrendelok');
    } catch (error) {
      console.error('Error deleting megrendelo:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditMegrendelo({ ...editMegrendelo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const megrendeloId = match.params.id;
      await fetch(`http://localhost:8000/api/megrendelok/${megrendeloId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editMegrendelo),
      });
      history.push('/megrendelok')
    } catch (error) {
      console.error('Error updating megrendelo:', error);
    }
  };

  if (!megrendelo) {
    return <div>Loading...</div>;
  }

  return (
    <div id="newsheet">
      <h2>Megrendelő adatai</h2>
      <form onSubmit={handleSubmit}>
        <div className="newsheetpart">
          <label>Név:</label>
          <input type="text" name="nev" value={editMegrendelo.nev} onChange={handleChange} />
          <label>Cím:</label>
            <input type="text" name="cim" value={editMegrendelo.cim} onChange={handleChange} />
          <label>E-mail:</label>
            <input type="email" name="email" value={editMegrendelo.email} onChange={handleChange} />
          <label>Telefon:</label>
            <input type="text" name="telefon" value={editMegrendelo.telefon} onChange={handleChange} />
          <label>Rendszám:</label>
            <input type="text" name="rendszam" value={editMegrendelo.rendszam} onChange={handleChange} />
          <label>Gyártmány:</label>
            <input type="text" name="gyartmany" value={editMegrendelo.gyartmany} onChange={handleChange} />
          <label>Típus:</label>
            <input type="text" name="tipus" value={editMegrendelo.tipus} onChange={handleChange} />
          <label>Gyártási év:</label>
            <input type="text" name="gyartasi_ev" value={editMegrendelo.gyartasi_ev} onChange={handleChange} />
          <label>Alvázszám:</label>
            <input type="text" name="alvazszam" value={editMegrendelo.alvazszam} onChange={handleChange} />
          <div>
            <button onClick={handleSubmit}>Módosítás mentése</button>
          </div>
          &nbsp;
          <div>
            <button onClick={handleDelete}>Megrendelő törlése</button>
          </div>
          &nbsp;
          <div>
            <button onClick={() => {history.push('/megrendelok')}}>Bezárás</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MegrendeloDetail;
