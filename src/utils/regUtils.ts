export default class RegUtils {
  static match = (pattern: RegExp, value: string): boolean => {
    return pattern.test(value);
  };

  static numberMatch = (value: string): boolean => {
    const numberRegex = /^\d*$/;
    return this.match(numberRegex, value);
  };

  static emailMatch = (value: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return this.match(emailRegex, value);
  };

  static passwordMatch = (value: string): boolean => {
    const passwordRegex = /^(?=.*?[a-z-A-Z-])(?=.*?[0-9])(?=.*?[!@#$&*~]).{8,}$/;
    return this.match(passwordRegex, value);
  };

  static birthDateMatch = (value: string): boolean => {
    const birthRegex = /^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/;
    return this.match(birthRegex, value);
  };

  static phoneMatch = (value: string): boolean => {
    const phoneRegex = /^010[0-9]{8}$/;
    return this.match(phoneRegex, value);
  };

  static authNumMatch = (value: string): boolean => {
    const authNumRegex = /^\d{6}$/;
    return this.match(authNumRegex, value);
  };

  /** Content-Disposition 헤더에서 파일명 추출하기 */
  static filenameMatch = (value: string, defaultName: string): string => {
    const filenameRegex = /filename\*=UTF-8''([\w%\-.]+)(?:; ?|$)/i;
    const match = filenameRegex.exec(value);
    return (match && match[1]) ?? defaultName;
  };
}
