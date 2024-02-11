import { createSlice } from '@reduxjs/toolkit';

type CurrentPage = {
  title: string,
}

type StateType = {
  value: CurrentPage,
}

type ActionType = {
  type: string,
  payload: CurrentPage,
}

const initialState = {
  value: {
    title: 'Главная',
  }
};

export const currentPageSlice = createSlice({
  name: 'current-page-title',
  initialState,
  reducers: {
    changeCurrentPageTitle: (state: StateType, action: ActionType) => {
      state.value = action.payload;
    }
  }
});

export const {changeCurrentPageTitle} = currentPageSlice.actions;
export const currentPageReducer = currentPageSlice.reducer;
export type CurrentPageReducerType = {
  changeCurrentPageTitle: (state: StateType, action: ActionType) => void,
}
