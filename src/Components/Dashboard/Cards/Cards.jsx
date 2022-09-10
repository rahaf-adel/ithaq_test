import React from 'react';
import { cardsData } from '../../Assets/Data/Data';
import './cards.css';
import Card from "../Card/Card";

const Cards = () => {
  return (
    <div className='cards'>
        {cardsData.map((card, id) => {
        return (
          <div className="parent-container" key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  )
}

export default Cards