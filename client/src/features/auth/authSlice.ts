import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { authLoginService, authRegistrationService } from "./authApi";
interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

interface User {
  id: string;
  email: string;
}

interface Credentials {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  // Add other registration fields here
}

export const loginUser = createAsyncThunk<
  User,
  Credentials,
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  alert("asdfasd");
  try {
    const data = await authLoginService(credentials);
    console.log(data);

    return data as User;
  } catch (error) {
    return rejectWithValue(error as string);
  }
});

export const registerUser = createAsyncThunk<
  User,
  RegisterData,
  { rejectValue: string }
>("auth/registerUser", async (userData, { rejectWithValue }) => {
  try {
    const data = await authRegistrationService(userData);
    return data;
  } catch (error) {
    return rejectWithValue(error as string);
  }
});

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
