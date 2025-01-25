import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import NotFoundPage from "./pages/error/404";
// import { useCookieHandler } from "./lib/helper/useCookieHandler";
import { useUserInfoQuery } from "./service/user/user";
import { userSelector } from "./slice/userSlice";
import Organization from "./pages/organization/Organization";
import Student from "./pages/student/Student";
import Group from "./pages/Group/Group";
import Result from "./pages/Result/Result";
import Performance from "./pages/Performance/Performance";
import Configuration from "./pages/Configuration/Configuration";
import Support from "./pages/Support/Support";
import Exam from "./pages/Exam/Exam";

// Authentication Logic
const isAuthenticated = () => {
  // const { getCookieValue } = useCookieHandler();
  // return !!getCookieValue("authToken"); // Replace with actual cookie/auth logic
  return true; // Replace with actual cookie/auth logic
};

// Public Route Component
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? <Navigate to="/dashboard" replace /> : <>{children}</>;
};

// Private Route Component
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const user = useSelector(userSelector);

  // Use the `useUserInfoQuery` hook for fetching user data
  const { data: userInfo } = useUserInfoQuery({}, { skip: !isAuthenticated() });

  useEffect(() => {
    if (userInfo && !user?.user) {
      // Dispatch an action to store user information in Redux
      console.log("User info loaded:", userInfo);
    }
  }, [userInfo, user?.user]);

  return isAuthenticated() ? <>{children}</> : <Navigate to="/" replace />;
};

// Routes Configuration
const routes = [
  { path: "/", element: <Login />, isPublic: true },
  { path: "/login", element: <Login />, isPublic: true },
  { path: "/dashboard", element: <Dashboard />, isPublic: false },
  { path: "/student", element: <Student />, isPublic: false },
  { path: "/group", element: <Group />, isPublic: false },
  { path: "/performance", element: <Performance />, isPublic: false },
  { path: "/result", element: <Result />, isPublic: false },
  { path: "/exam", element: <Exam />, isPublic: false },
  { path: "/configuration", element: <Configuration />, isPublic: false },
  { path: "/support", element: <Support />, isPublic: false },
  { path: "/profile", element: <Profile />, isPublic: false },
  { path: "/organization", element: <Organization />, isPublic: false },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              route.isPublic ? (
                <PublicRoute>{route.element}</PublicRoute>
              ) : (
                <PrivateRoute>{route.element}</PrivateRoute>
              )
            }
          />
        ))}

        {/* Redirect `/` to login or dashboard */}
        <Route path="/" element={isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Login />} />

        {/* Catch-All Route: Redirect to NotFoundPage */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
