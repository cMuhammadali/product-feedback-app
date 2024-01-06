import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { PostService } from "../shared/services/PostService";

const rootReducer = combineReducers({
  [PostService.reducerPath]: PostService.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(PostService.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
