import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger'
import { rootPersistConfig, rootReducer } from './rootReducer';

// ----------------------------------------------------------------------

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger),
  
});

const persistor = persistStore(store);

const useSelector = useReduxSelector;

const useDispatch = () => useReduxDispatch();

export { store, persistor, useSelector, useDispatch };
