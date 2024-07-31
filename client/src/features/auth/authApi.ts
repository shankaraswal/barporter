import apiClient from "../../utils/apiClientHandler";

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  // Add other registration fields here
}

interface User {
  id: string;
  email: string;
  // Add other user fields here
}

export const authLoginService = async (
  credentials: LoginCredentials
): Promise<User> => {
  try {
    const response = await apiClient.post<User>("/users/login", credentials);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const authRegistrationService = async (
  userData: RegisterData
): Promise<User> => {
  try {
    const response = await apiClient.post<User>("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
