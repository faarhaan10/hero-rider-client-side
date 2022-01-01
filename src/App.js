import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import ManageUsers from "./Pages/Dashboard/ManageUsers/ManageUsers";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Payment from "./Pages/Payment/Payment";
import AdminRoute from "./Pages/ProtectedRoutes/AdminRoute/AdminRoute";
import PrivateRoute from "./Pages/ProtectedRoutes/PrivateRoute/PrivateRoute";
import Registration from "./Pages/Registration/Registration/Registration";
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />

          <Route path="profile" element={<PrivateRoute>
            <UserProfile />
          </PrivateRoute>} />
          <Route path="payment/:vehicle" element={<PrivateRoute>
            <Payment />
          </PrivateRoute>} />

          <Route path="dashboard/*" element={<PrivateRoute>
            <Dashboard />
          </PrivateRoute>} />
          <Route path="*" exact element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
