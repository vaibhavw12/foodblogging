import React from 'react'
import '../App.css';

export default function Card(props) {
  return (
    <div className='card'>
        <div className='card-inner'>
            <img className='card-img' src={props.item.cover} alt='each card img'></img>
            <h3 className='card-title'>{props.item.title}</h3>
            <p style={{color: 'rgba(68, 73, 87, 1)'}}>
            PLorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's standard...
            </p>
            <button className='card-btn'>Read More</button>
        </div>
    </div>
  )
}
