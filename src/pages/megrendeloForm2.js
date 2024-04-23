import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function MegrendeloForm({ megrendeloId }) {
  const [megrendelo, setMegrendelo] = useState({
    nev: '',
    cim: '',
    email: '',
    telefon: '',
    rendszam: '',
    gyartmany: '',
    tipus: '',
    gyartasi_ev: '',
    alvazszam: ''
  });
  const history = useHistory();

  useEffect(() => {
    if (megrendeloId) {
      fetchMegrendelo();
    }
  }, [megrendeloId]);

  const fetchMegrendelo = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/megrendelok/${megrendeloId}/');
      const data = await response.json();
      setMegrendelo(data);
    } catch (error) {
      console.error('Error fetching megrendelo:', error);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setMegrendelo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (megrendeloId) {
        await fetch('http://localhost:8000/api/megrendelok/${megrendeloId}/', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(megrendelo),
        });
      } else {
        await fetch('http://localhost:8000/api/megrendelok/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(megrendelo),
        });
      }
      // Redirect or do something after successful form submission
      console.log('POST request data:', megrendelo);
    } catch (error) {
      console.error('Error submitting megrendelo form:', error);
    }
  };

  return (
    <div id="newsheet">
      <form onSubmit={handleSubmit}>
        <div className="newsheetpart">
          <h3>Megrendelő</h3>
          <label>Név:</label>
          <input type="text" name="nev" value={megrendelo.nev} onChange={handleChange} />
          <label>Cím:</label>
          <input type="text" name="cim" value={megrendelo.cim} onChange={handleChange} />
          <label>E-mail:</label>
          <input type="text" name="email" value={megrendelo.email} onChange={handleChange} />
          <label>Telefon:</label>
          <input type="text" name="telefon" value={megrendelo.telefon} onChange={handleChange} />
          <label>Rendszám:</label>
          <input type="text" name="rendszam" value={megrendelo.rendszam} onChange={handleChange} />
          <label>Gyártmány:</label>
          <input type="text" name="gyartmany" value={megrendelo.gyartmany} onChange={handleChange} />
          <label>Típus:</label>
          <input type="text" name="tipus" value={megrendelo.tipus} onChange={handleChange} />
          <label>Gyártási év:</label>
          <input type="text" name="gyartasi_ev" value={megrendelo.gyartasiEv} onChange={handleChange} />
          <label>Alvázszám:</label>
          <input type="text" name="alvazszam" value={megrendelo.alvazszam} onChange={handleChange} />
        </div>
        <button type="submit" onClick={() => history.goBack()}>Mentés</button>
      </form>
    </div>

  );
}

export default MegrendeloForm;
