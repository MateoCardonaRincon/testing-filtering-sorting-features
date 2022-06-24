import { createSlice } from "@reduxjs/toolkit"

type bugType = {
    bugId: number,
    title: string,
    developerEmail: string
}

const initialState: bugType[] = []

const bugSlice = createSlice(
    {
        name: 'bugs',
        initialState,
        reducers: {
            getAllBugs(state, action) {
                return action.payload
            }
        }
    }
)

export const { getAllBugs } = bugSlice.actions

export default bugSlice.reducer

export type { bugType }