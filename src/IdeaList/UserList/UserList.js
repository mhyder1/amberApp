import React from 'react';
import CreatedCard from './CreatedCard/CreatedCard'
import ClaimedCard from './ClaimedCard/ClaimedCard'
import './UserList.css';

export default function UserList(props) {
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <CreatedCard
            key={card.id}
            id={card.id}
            title={card.title}
            description ={card.description}
            onClickDelete={props.onClickDelete}
          />
        )}

          {props.cards.map((card) =>
          <ClaimedCard
            key={card.id}
            id={card.id}
            title={card.title}
            description ={card.description}
            onClickDelete={props.onClickDelete}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.onClickAdd(props.id)}
        >
          
        </button>
      </div>
    </section>
  )
}

UserList.defaultProps = {
  onClickAdd: () => {},
}