import React from 'react';
import './ClaimedCard.css';

export default function ClaimedCard(props) {
  return (
    <div className='ClaimedCard'>
        <h3>Claimed Idea</h3>
      <h3>{props.title}</h3>
      <p>{props.description}</p> 
      
      <button
        type='button'
      
      >
        contact creator
      </button>

      <button
        type='button'
      
      >
        release idea
      </button>

      <button
        type='button'
        onClick={() => props.onClickDelete(props.id)}
      >
        contact collaborator
      </button>
      
    </div>
  )
}

ClaimedCard.propTypes = {
  onClickDelete: () => {}
}