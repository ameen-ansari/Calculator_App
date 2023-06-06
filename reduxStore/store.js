import { configureStore } from "@reduxjs/toolkit";
import slice from "./reducers";

const store = configureStore({
    reducer: {
        slice
    }
});

export default store;