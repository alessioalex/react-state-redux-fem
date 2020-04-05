import { lists as defaultLists } from '../normalized-state';

const listReducer = (lists = defaultLists, action) => {
  if (action.type === 'CARD_CREATE') {
    const { cardId, listId } = action.payload;
    const entities = { ...lists.entities };

    entities[listId] = {
      ...entities[listId],
      cards: entities[listId].cards.concat(cardId),
    };

    return {
      ...lists,
      entities,
    };
  }

  return lists;
};

export default listReducer;
