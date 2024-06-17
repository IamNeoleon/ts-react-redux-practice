import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TTask } from '../../@types/task'

interface tasksState {
	tasks: TTask[]
}

const initialState: tasksState = {
	tasks: [],
}

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		setTasks: (state, action: PayloadAction<TTask[]>) => {
			state.tasks = action.payload;
		},
	},
})

// Action creators are generated for each case reducer function
export const { setTasks } = tasksSlice.actions

export default tasksSlice.reducer