// MegrendeloList.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MegrendeloList() {
  const [megrendelok, setMegrendelok] = useState([]);

  useEffect(() => {
    fetchMegrendelok();
  }, []);

  const fetchMegrendelok = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/megrendelok/');
      const data = await response.json();
      setMegrendelok(data);
    } catch (error) {
      console.error('Error fetching megrendelok:', error);
    }
  };

  return (
    <div id='megrendelok'>
      <h2>Megrendelők</h2>
      <div className='link'>
        <Link to="/megrendelo/new" style={{ textDecoration: 'none' }}>Új megrendelő létrehozása</Link>
      </div>
      
      <ul>
        {megrendelok.map(megrendelo => (
          <div className='megrendelo'>
            <li key={megrendelo.id}>
              <Link to={`/megrendelo/${megrendelo.id}`} style={{ textDecoration: 'none'}}>{megrendelo.nev}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MegrendeloList;
