import { configureStore } from '@reduxjs/toolkit';
import mobilesReducer from './Reducer/mobile_api';
import laptopsReducer from './Reducer/laptop_api';
import storage from 'redux-persist/lib/storage';
import tabletsReducer from './Reducer/tablet_api';

const persistConfig = {
    key: 'root',
    storage,
};

const store = configureStore({
    reducer: {
        mobilesReducer,
        laptopsReducer,
        tabletsReducer,
    },
});
export default store;
