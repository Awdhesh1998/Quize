import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { api } from '../service/api'
import auth from '../slice/authSlice'
import user from '../slice/userSlice'
import student from '../slice/studentSlice'

export const makeStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined,) => {
  return configureStore({
    reducer: {
      [api.reducerPath]:api.reducer,
      auth,
      user,
      student
    //   auth,
    //   assigment,
    //   configuration,
    //   exam
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']