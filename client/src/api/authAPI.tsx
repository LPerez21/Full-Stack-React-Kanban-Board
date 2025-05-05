import { UserLogin } from "../interfaces/UserLogin";

interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email?: string;
  };
}

const login = async (userInfo: UserLogin): Promise<LoginResponse> => {
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    });

    const data = await response.json();

    if (!response.ok) {
      const errorMessage = data?.message || 'Login failed. Please try again.';
      throw new Error(errorMessage);
    }

    // Save token and user info to localStorage
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));

    return data;
  } catch (err: any) {
    console.error('Login error:', err.message || err);
    return Promise.reject(err.message || 'Could not fetch user info');
  }
};

export { login };
