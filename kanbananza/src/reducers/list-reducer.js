import { lists as defaultLists } from '../normalized-state';
import set from 'lodash/fp/set';

// set(chain of properties, what you want to replace, the object)

const listReducer = (lists = defaultLists, action) => {
  if (action.type === 'CARD_CREATE') {
    const { cardId, listId } = action.payload;

    const cards = lists.entities[listId].cards.concat(cardId);
    return set(['entities', listId, 'cards'], cards, lists);

    /*
    const entities = { ...lists.entities };

    entities[listId] = {
      ...entities[listId],
      cards: entities[listId].cards.concat(cardId),
    };

    return {
      ...lists,
      entities,
    };
    */
  }

  return lists;
};

export default listReducer;
