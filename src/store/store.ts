import { configureStore } from '@reduxjs/toolkit'
import { postApi } from '../api/postApi'

const store = configureStore({
	reducer: {
		[postApi.reducerPath]: postApi.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(postApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
