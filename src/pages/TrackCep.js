import React from 'react';
import './TrackCep.css';

function TrackCEP({events}) {
    if (!events || events.length === 0) return null;
    return (
        <>
        
        <ul className='list-group'>
            {events.map(item => 
            <li className='list-group-item' key={item.cep}>
                <span>Rua: {item.logradouro}</span>
                <span>Bairro: {item.bairro}</span>
                <span>Cidade: {item.localidade}</span>
                <span>Estado: {item.uf}</span>
            </li>)}
        </ul>
        </>
    )
}

export default TrackCEP;