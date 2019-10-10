import React from 'react';
import './CreatedCard.css';

export default function CreatedCard(props) {
  return (
    <div className='CreatedCard'>
      
          <h3>Created Idea</h3>
          <br />
                {props.title}
                {props.description}
                <button
                  type='button'
                  onClick={() => props.onClickDelete(props.id)}
                >
                  delete
                </button>
                
            
                
                <button
                  type='button'
                  onClick={() => props.onClickDelete(props.id)}
                >
                  contact
                </button>
          
    </div>
  )
}

CreatedCard.propTypes = {
  onClickDelete: () => {}
}