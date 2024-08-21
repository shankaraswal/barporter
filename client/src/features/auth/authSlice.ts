import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { authLoginService, authRegistrationService } from "./authApi";

// Unified UserData interface
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

// Unified AuthResponse interface
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

// Interface for the authentication state in the Redux store
interface AuthState {
  user: UserData | null; // Store user data directly
  accessToken: string | null; // Store access token separately
  isLoggedIn: boolean;
  loading: boolean;
  error: string | null;
}

// Interface for user login credentials
interface Credentials {
  email: string;
  password: string;
}

// Interface for user registration data
interface RegisterData {
  email: string;
  password: string;
  // TODO: Add other fields as needed
}

const initialState: AuthState = {
  user: null,
  accessToken: null,
  isLoggedIn: false,
  loading: false,
  error: null,
};

// Load user data from localStorage if available
const loadUserFromLocalStorage = (): AuthState => {
  const storedAccessToken = localStorage.getItem("access_token");
  const storedUser = localStorage.getItem("user");

  if (storedAccessToken && storedUser) {
    return {
      user: JSON.parse(storedUser) as UserData,
      accessToken: storedAccessToken,
      isLoggedIn: true,
      loading: false,
      error: null,
    };
  }
  return initialState;
};

export const loginUser = createAsyncThunk<
  AuthResponse,
  Credentials,
  { rejectValue: string }
>("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    const data = await authLoginService(credentials);
    return data as unknown as AuthResponse;
  } catch (error) {
    return rejectWithValue(error as string);
  }
});

export const registerUser = createAsyncThunk<
  AuthResponse,
  RegisterData,
  { rejectValue: string }
>("auth/registerUser", async (userData, { rejectWithValue }) => {
  try {
    const data = await authRegistrationService(userData);
    return data as unknown as AuthResponse;
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
      state.accessToken = null;
      state.isLoggedIn = false;
      localStorage.removeItem("access_token"); // Clear localStorage on logout
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.user = action.payload.data.user;
          state.accessToken = action.payload.data.accessToken;
          state.isLoggedIn = true;

          localStorage.setItem("access_token", action.payload.data.accessToken);
          localStorage.setItem(
            "user",
            JSON.stringify(action.payload.data.user)
          );
        }
      )
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.user = action.payload.data.user;
          state.accessToken = action.payload.data.accessToken;
          state.isLoggedIn = true;

          localStorage.setItem("access_token", action.payload.data.accessToken);
          localStorage.setItem(
            "user",
            JSON.stringify(action.payload.data.user)
          );
        }
      )
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
