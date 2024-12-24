export class LoginStorage {
  static isLoggedIn(): boolean {
    return this.getToken().length > 0;
  }

  static getToken(): string {
    if (!localStorage) return '';
    return localStorage.getItem('token') ?? '';
  }

  static getUerName(): string {
    if (!localStorage) return '';
    return localStorage.getItem('name') ?? '';
  }

  static setToken(token: string) {
    localStorage.setItem('token', token);
  }

  static setName(userName: string) {
    localStorage.setItem('name', userName);
  }

  static login(token: string, userName: string) {
    LoginStorage.setToken(token);
    LoginStorage.setName(userName);
  }

  static logout() {
    this.removeToken();
    this.removeName();
  }

  static removeToken() {
    localStorage.removeItem('token');
  }

  static removeName() {
    localStorage.removeItem('name');
  }
}

export default LoginStorage;
