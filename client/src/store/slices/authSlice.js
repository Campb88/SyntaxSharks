import { createSlice } from '@reduxjs/toolkit';

const initialUserState = {
  username: '', // changed from userName to username for consistency
  email: '',
  password: '',
};

const initialState = {
  user: initialUserState,
  token: '', // store token here
  loaded: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // login action now expects payload to have both user and token
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loaded = true;
    },
    // logout resets both user and token
    logout: (state) => {
      state.user = initialUserState;
      state.token = '';
      state.loaded = false;
    },
    loader: (state, action) => {
      state.loaded = action.payload;
    }
  },
});

export const { login, logout, loader } = authSlice.actions;
export default authSlice.reducer;
