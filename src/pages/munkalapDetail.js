import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const enumToReadable = {
  enum_value_1: 'Aktív',
  enum_value_2: 'Lezárt'
  // Folytasd a többi értékkel...
};
const enumToReadable2 = {
  enum_value_1: 'Negyed',
  enum_value_2: 'Fél',
  enum_value_3: 'Háromnegyed',
  enum_value_4: 'Tele'
  // Folytasd a többi értékkel...
};



function MunkalapDetail({ match }) {
  const [munkalap, setMunkalap] = useState(null);
  const [editMunkalap, setEditMunkalap] = useState(null);
  const munkalapId = match.params.id;
  const history = useHistory();

  useEffect(() => {
    fetchMunkalap();
  }, []);

  const fetchMunkalap = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/munkalapok/${munkalapId}/`);
      const data = await response.json();
      setMunkalap(data);
      setEditMunkalap(data);
    } catch (error) {
      console.error('Error fetching munkalap:', error);
    }
  };

  const handleDelete = async () => {
    const megrendeloId = match.params.id;
    try {
      await fetch(`http://localhost:8000/api/munkalapok/${munkalapId}/`, {
        method: 'DELETE',
      });
      history.goBack()
    } catch (error) {
      console.error('Error deleting megrendelo:', error);
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setMunkalap({ ...munkalap, [name]: value });
    setEditMunkalap({ ...editMunkalap, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const munkalapId = match.params.id;
      await fetch(`http://localhost:8000/api/munkalapok/${munkalapId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editMunkalap),
      });
      console.log('POST request data:', editMunkalap); // Log data here
      history.goBack()
    } catch (error) {
      console.error('Error updating megrendelo:', error);
    }
  };


  if (!munkalap) {
    return <div>Loading...</div>;
  }

  return (
    <div id='newsheet'>
      <h2>Munkalap részletei</h2>
      <form onSubmit={handleSubmit}>
        <div className='newsheetpart'>
          <label>Munkalap száma:</label>
          <input type="text" name="munkalapszam" value={munkalap.munkalapszam} onChange={handleChange} disabled />
          <label>Létrehozva:</label>
          <input type="text" name="datum" value={munkalap.datum} onChange={handleChange} disabled />
          <label>Utólsó módosítás</label>
          <input type="text" name="utolsomodositas" value={munkalap.utolsomodositas} onChange={handleChange} disabled />
          <label>Megrendelő:</label>
          <input type="text" name="megrendelo" value={munkalap.megrendelo_id} onChange={handleChange} disabled />
          <label>Kmóra állás:</label>
          <input type="text" name="kmoraallas" value={munkalap.kmoraallas} onChange={handleChange} disabled />
          <label>Üzemanyagszint:</label>
          <input type="text" name="uzemenyagszint" value={enumToReadable2[munkalap.uzemenyagszint]} onChange={handleChange} disabled
          />
          <label>Hibatípus:</label>
          <input type="text" name="hibatipus" value={munkalap.hibatipus_id} onChange={handleChange} disabled />
          <label>Státusz:</label><select name="munkalapstatus" value={munkalap.munkalapstatus} onChange={handleChange} >
            <option value="enum_value_1">Aktív</option>
            <option value="enum_value_2">Lezárt</option>
          </select>
          <label>Hibaleírás:</label>
          <input type="text" name="hibaleiras" value={munkalap.hibaleiras} onChange={handleChange} />
          <label>Várható határidő:</label>
          <input type="text" name="varhatohatarido" value={munkalap.varhatohatarido} onChange={handleChange} />
          <label>Elvégzett munka:</label>
          <input type="text" name="elvegzettmunka" value={munkalap.elvegzettmunka} onChange={handleChange} />
          <label>Felhasznált anyag:</label>
          <input type="text" name="felhasznaltanyag" value={munkalap.felhasznaltanyag} onChange={handleChange} />
          <div>
            <button type="submit">Módosítás mentése</button>
          </div>
          &nbsp;
          <div>
            <button onClick={handleDelete}>Munkalap törlése</button>
          </div>
          &nbsp;
          <div>
            <button onClick={() => history.goBack()}>Bezárás</button>
          </div>
        </div>
      </form>
      {/* További részletek */}
    </div>
  );
}

export default MunkalapDetail;
