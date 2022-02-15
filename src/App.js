import React, {useState} from 'react';
import TrackCEP from './pages/TrackCep';
import './index.css';

function App() {

  const [events, setEvents] = useState([]);

  const convertToArray = (obj) => {
    const arr = [obj];
    return arr;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch(`http://localhost:3001/?tracking=${data.tracking}`)
    .then(response => response.json())
    .then(data => {
      const array = convertToArray(data);
      setEvents(array);
    })
    .catch(error => console.error);
  }

  return (
    <div className='container'>
      <h1>Buscar CEP</h1>
      <form onSubmit={submitHandler}>
        <div className='input'>
          <input type='text' name='tracking' className='form-control' placeholder='CEP'/>
        </div>
        <button type='submit' name='TrackCEP' className='btn btn-primary'>Buscar</button>
        <div>
          
        </div>
      </form>
      <TrackCEP events={events}/>
    </div>
  );
}

export default App;
