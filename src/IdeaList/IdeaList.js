import React, { Component } from 'react'
import UserList from './UserList/UserList'
import STORE from '../STORE'
import './IdeaList.css'
import FormContext from '../FormContext/FormContext'

// const newRandomCard = () => {
//   const id = Math.random().toString(36).substring(2, 4)
//     + Math.random().toString(36).substring(2, 4);
//   return {
//     id,
//     title: `Random Card ${id}`,
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum molestie aliquet. Sed tristique felis lacinia imperdiet pretium. Fusce ante velit, auctor sit amet mollis sed, imperdiet nec tellus. Etiam pharetra posuere luctus. Pellentesque ac arcu mollis, dapibus erat eu, luctus diam. Suspendisse nec nulla leo. Morbi at feugiat tellus, quis placerat nisl.',
//   }
// }

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key]: value},
    {}
  );
}

class IdeaList extends Component {
  state = {
    store: STORE,
  };
  static contextType = FormContext;
  handleDeleteCard = (cardId) => {
    const { lists, allCards } = this.state.store;

    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));

    const newCards = omit(allCards, cardId);

    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };

  handleAddCard = (listId) => {
    // const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
	      return {
          ...list,
          cardIds: [...list.cardIds]
        };
      }
      return list;
    })

    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
        }
      }
    })
  };

  render() {
    const { store } = this.state
    console.log(this.context)
    return (
      <main className='IdeaListApp'>
       
        <div className='IdeaListApp-list'>
          {store.lists.map(list => (
            <UserList
              key={list.id}
              id={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
              onClickDelete={this.handleDeleteCard}
              onClickAdd={this.handleAddCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default IdeaList;
// in render function
// main className='IdeaListApp'>
//         <FormContext.Consumer>
//            {(context) => (
//               <React.Fragment>
//               // your code goes here, and you can access your state from within your provider by doing context.state.whateverstatepropertyhere
//               </React.Fragment>
//          </FormContext.Consumer>
//           ))}
//         </div>
//       </main>

// Unless you have a need for additional contexts, I would wrap everything
//  in the return statement of your App.js with your provider component. 
//  In my example code I created a class called "MyProvider", but you 
//  can call it what you want. But the provider that you create is where 
//  your state will live. And then yes, in your ideaList you could 
//  do something like