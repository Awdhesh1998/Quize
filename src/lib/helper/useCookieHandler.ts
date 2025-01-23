interface CookieOptions {
    path?: string;
    maxAge?: number; // Lifetime of the cookie in seconds
    secure?: boolean; // Transmit over HTTPS only
    sameSite?: 'strict' | 'lax' | 'none'; // Cross-site behavior
  }
  
  const defaultOptions: CookieOptions = { path: '/', maxAge: 3600, secure: true, sameSite: 'strict' };
  
  export const useCookieHandler = () => {
    const setCookieValue = (
      name: string,
      value: string,
      options: CookieOptions = defaultOptions
    ) => {
      let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  
      if (options.maxAge) {
        cookieString += `; max-age=${options.maxAge}`;
      }
      if (options.path) {
        cookieString += `; path=${options.path}`;
      }
      if (options.secure) {
        cookieString += `; secure`;
      }
      if (options.sameSite) {
        cookieString += `; samesite=${options.sameSite}`;
      }
  
      document.cookie = cookieString;
      console.log(`Cookie "${name}" set with value:`, value);
    };
  
    const getCookieValue = (name: string): string | undefined => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${encodeURIComponent(name)}=`);
      if (parts.length === 2) {
        return parts.pop()?.split(';').shift();
      }
    };
  
    const removeCookieValue = (name: string, options: { path?: string } = { path: '/' }) => {
      document.cookie = `${encodeURIComponent(name)}=; path=${options.path}; max-age=0`;
      console.log(`Cookie "${name}" removed`);
    };
  
    const cookies: { [key: string]: string } = document.cookie
      .split('; ')
      .reduce((acc, cookie) => {
        const [name, value] = cookie.split('=');
        acc[decodeURIComponent(name)] = decodeURIComponent(value);
        return acc;
      }, {} as { [key: string]: string });
  
    return { setCookieValue, getCookieValue, removeCookieValue, cookies };
  };
  