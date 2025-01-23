import { ValidationInterface } from "../ValidationInterface";

export interface ILoginRequest {
    email: string;
    password: string;
    isRemember: boolean;
  }
  
  export const loginValidation = (req: ILoginRequest): ValidationInterface => {
    const data: ValidationInterface = { isError: false, data: {} };
  
    // Validate email
    if (!req.email || req.email.trim() === '') {
      data.data['email'] = 'Please enter your email';
    }
  
    // Validate password
    if (!req.password || req.password.trim() === '') {
      data.data['password'] = 'Please enter your password';
    }
  
    // If any validation error exists, set `isError` to true
    if (Object.keys(data.data).length) {
      data.isError = true;
    }
  
    return data;
  };
  