// MegrendeloDetail.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MegrendeloDetail({ match }) {
  const [megrendelo, setMegrendelo] = useState(null);

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
      // Redirect or do something after successful deletion
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
      <div className="megrendelofelulet">
        <p><strong>Név:</strong> {megrendelo.nev}</p>
        <p><strong>Cím:</strong> {megrendelo.cim}</p>
        <p><strong>E-mail:</strong> {megrendelo.email}</p>
        <p><strong>Telefon:</strong> {megrendelo.telefon}</p>
        <p><strong>Rendszám:</strong> {megrendelo.rendszam}</p>
        <p><strong>Gyártmány:</strong> {megrendelo.gyartmany}</p>
        <p><strong>Típus:</strong> {megrendelo.tipus}</p>
        <p><strong>Gyártási év:</strong> {megrendelo.gyartasiEv}</p>
        <p><strong>Alvázszám:</strong> {megrendelo.alvazszam}</p>

        <div className='button'>
          <button onClick={handleDelete}>Törlés</button>
          &nbsp;
          <Link to={`/megrendelo/${megrendelo.id}/edit`}>Szerkesztés</Link>
        </div>


      </div>
      
    </div>
  );
}

export default MegrendeloDetail;
