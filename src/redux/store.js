// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
// import { contactsReducer, filtersReducer } from './reducer';

import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
