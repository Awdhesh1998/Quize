import { useCookies } from 'react-cookie';

interface CookieOptions {
  path?: string;
  maxAge?: number; // Lifetime of the cookie in seconds
  secure?: boolean; // Transmit over HTTPS only
  sameSite?: 'strict' | 'lax' | 'none'; // Cross-site behavior
}

export const useCookieHandler = () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  // Set a cookie
  const setCookieValue = (
    name: string,
    value: string,
    options: CookieOptions = { path: '/', maxAge: 3600, secure: true, sameSite: 'strict' }
  ) => {
    setCookie(name, value, options);
    console.log(`Cookie "${name}" set with value:`, value);
  };

  // Get a cookie
  const getCookieValue = (name: string): string | undefined => {
    return cookies[name];
  };

  // Remove a cookie
  const removeCookieValue = (name: string, options: { path?: string } = { path: '/' }) => {
    removeCookie(name, options);
    console.log(`Cookie "${name}" removed`);
  };

  return { setCookieValue, getCookieValue, removeCookieValue, cookies };
};
