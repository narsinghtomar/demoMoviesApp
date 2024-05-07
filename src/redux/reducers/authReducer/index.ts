import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserInfoState {
  isAuthDone: boolean;
  userInfo: Record<string, any> | null;
}

const initialState: UserInfoState = {
  isAuthDone: false,
  userInfo: null,
};

export const userAuthSlice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    setUserInfo: (
      state,
      action: PayloadAction<{ loginData?: Record<string, any> }>,
    ) => {
      const { loginData } = action.payload || {};
      state.userInfo = loginData || {};
    },
    setAuthCompleted: state => {
      state.isAuthDone = true;
    },
    resetAuthCompleted: state => {
      state.isAuthDone = false;
      state.userInfo = null;
    },
  },
});

export const { setUserInfo, setAuthCompleted, resetAuthCompleted } =
  userAuthSlice.actions;

export default userAuthSlice.reducer;
