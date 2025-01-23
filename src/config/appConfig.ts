interface AppConfig {
  appName: string;
  apiUrl: string;
  appUrl: string;
  port: number;
  environment: string;
}

const appConfig: AppConfig = {
  appName: import.meta.env.VITE_APP_NAME || 'MyReactApp',
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  appUrl: import.meta.env.VITE_APP_URL || 'http://localhost:3000',
  port: parseInt(import.meta.env.VITE_PORT || '3000', 10),
  environment: import.meta.env.VITE_ENV || 'development',
};

export default appConfig;
