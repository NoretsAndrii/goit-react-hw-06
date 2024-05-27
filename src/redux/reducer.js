import { combineReducers } from 'redux';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact': {
      return [...state, action.payload];
    }
    case 'contacts/deleteContact': {
      return state.filter(item => item.id !== action.payload);
    }
    default:
      return state;
  }
};

const filtersInitialState = {
  name: '',
};

const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setFilter': {
      return {
        ...state,
        name: action.payload,
      };
    }

    default:
      return state;
  }
};

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return {
//         ...state,
//         contacts: { items: [...state.contacts.items, action.payload] },
//       };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(
//             item => item.id !== action.payload
//           ),
//         },
//       };
//     }

//     case 'filters/setFilter': {
//       return {
//         ...state,
//         filters: { ...state.filters, name: action.payload },
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const rootReducer = (state = {}, action) => {
//   return {
//     contacts: contactsReducer(state.contacts, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
