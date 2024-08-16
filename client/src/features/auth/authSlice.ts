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

export interface UserData {
  _id: string;
  username: string;
  email: string;
  about: string;
  mobile: string;
  location: string;
  avatar: string;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  __v: number;
}

export interface AuthResponse {
  statusCode: number;
  data: {
    user: UserData;
    accessToken: string;
    refreshToken: string;
  };
  message: string;
  success: boolean;
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

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

// Load user data from localStorage if available
const loadUserFromLocalStorage = (): AuthState => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    const user = JSON.parse(storedUser) as User;
    return {
      user,
      isLoggedIn: true,
      loading: false,
      error: null,
    };
  }
  return initialState;
};

export const loginUser = createAsyncThunk<
  User,
  Credentials,
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const data = await authLoginService(credentials);

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

const authSlice = createSlice({
  name: "auth",
  initialState: loadUserFromLocalStorage(),
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user"); // Clear localStorage on logout
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
        localStorage.setItem("user", JSON.stringify(action.payload)); // Save user to localStorage
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
        localStorage.setItem("user", JSON.stringify(action.payload)); // Save user to localStorage
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
