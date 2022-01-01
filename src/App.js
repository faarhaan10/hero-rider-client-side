import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Packages from "./Pages/Packages/Packages";
import Payment from "./Pages/Payment/Payment";
import PrivateRoute from "./Pages/ProtectedRoutes/PrivateRoute/PrivateRoute";
import Registration from "./Pages/Registration/Registration/Registration";
import UserProfile from "./Pages/UserProfile/UserProfile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="registration" element={<Registration />} />

          <Route path="profile" element={<PrivateRoute>
            <UserProfile />
          </PrivateRoute>} />
          <Route path="packages" element={<PrivateRoute>
            <Packages />
          </PrivateRoute>} />
          <Route path="payment" element={<PrivateRoute>
            <Payment />
          </PrivateRoute>} />
          <Route path="*" exact element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
