import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/types/user";

interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },

    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    clearUsers: (state) => {
      state.users = [];
    },
  },
});

export const {
  setUsers,
  setLoading,
  setError,
  clearUsers,
} = userSlice.actions;

export default userSlice.reducer;