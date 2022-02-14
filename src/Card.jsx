import React from 'react';
import './Card.css';

const Card = (props) => {

    return (
        <div className="Card">
             <img src={props.image} alt="ads" className="animeimg" />
             <h1>{props.Name}</h1>
             <p>{props.desc}</p>
             <a href={props.link}>
             

                <button className='button'>Go to IMDB</button>
             
             </a>
             
        </div>
    );
}

export default Card;