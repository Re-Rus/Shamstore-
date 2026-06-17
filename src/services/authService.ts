const AUTH_KEY = "shamstore_user";

interface LoginData {
  email: string;
  password: string;
}

interface User {
  email: string;
}

export const authService = {

  async login(data: LoginData) {

    // مؤقت Frontend فقط
    const user: User = {
      email: data.email,
    };

    localStorage.setItem(
      AUTH_KEY,
      JSON.stringify(user)
    );

    return user;
  },


  logout() {
    localStorage.removeItem(AUTH_KEY);
  },


  getCurrentUser(): User | null {

    const user =
      localStorage.getItem(AUTH_KEY);

    if (!user) return null;

    return JSON.parse(user);
  },


  isAuthenticated(): boolean {

    return !!localStorage.getItem(AUTH_KEY);

  }

};