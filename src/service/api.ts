import { createApi, FetchArgs, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
// import { getValidAuthTokens } from '@/hooks/cookies';
import { toast } from 'react-toastify';
import appConfig from '../config/appConfig';
import { useCookieHandler } from '../lib/helper/useCookieHandler';

// Utility function to handle errors
const handleApiError = (error: { status?: number | string }) => {
  switch (error.status) {
    case 'FETCH_ERROR':
      toast.error('500 Internal Server Error.');
      break;
    case 'TIMEOUT_ERROR':
      toast.error('Request Timeout Error.');
      break;
    case 'PARSING_ERROR':
      toast.error('Response Parsing Error.');
      break;
    case 401:
      toast.error('Session expired. Redirecting to login.');
      const {removeCookieValue} = useCookieHandler();
      removeCookieValue('authToken');
    //   deleteCookie('auth_token');
      window.location.href = '/login';
      break;
    case 500:
      toast.error('Server Error. Please try again later.');
      break;
    default:
      toast.error('An unexpected error occurred.');
  }
};

// Create a baseQuery instance with token setup
const baseQuery = fetchBaseQuery({
  baseUrl: appConfig.apiUrl + 'api/',
  prepareHeaders: (headers, { endpoint }) => {

     // Identify if the request is public or private using endpoint metadata
     const publicEndpoints = ['login']; // Replace with actual public endpoints

     if (!publicEndpoints.includes(endpoint) ) {
        console.log("calling........"+endpoint)
        const {getCookieValue} = useCookieHandler();
        const token  = getCookieValue('authToken');
        if (token) {
          headers.set('Authorization', `Bearer ${decodeURIComponent(token)}`);
        }
     }
    headers.set('Content-Type', 'application/json');
    headers.set('Accept', 'application/json');
    return headers;
  },
});

// Retryable baseQuery with enhanced error handling and conditional retries
const baseQueryWithRetry = retry(
  async (args: string | FetchArgs, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error) {
      const errorStatus = result.error.status;
      
      // Check if the error is a 500 and prevent retries for server errors
      if (errorStatus === 500) {
        handleApiError(result.error);
        return result;  // Do not retry on 500 error
      }

      // Handle retries for other types of errors
      handleApiError(result.error);
      retry.fail(result.error);
    }

    return result;
  },
  { maxRetries: 3 }
);

// Define the API
export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Assignment', 'Auth', 'Profile', 'User'],
  endpoints: () => ({}),
});

// Enhance API with additional configuration or utility endpoints if needed
export const enhancedApi = api.enhanceEndpoints({
  endpoints: () => ({
    getPost: () => 'test', // Example endpoint (replace or remove as needed)
  }),
});
