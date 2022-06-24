import { configureStore } from "@reduxjs/toolkit";
import bugsReducer, { bugType } from "./bugSlice";

const store = configureStore(
    {
        reducer: {
            bugs: bugsReducer
        }
    }
)

type storeType = {
    bugs: bugType[]
}

export default store

export type { storeType }