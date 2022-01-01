import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login";
import Packages from "./Pages/Packages/Packages";
import Payment from "./Pages/Payment/Payment";
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
          <Route path="profile" element={<UserProfile />} />
          <Route path="packages" element={<Packages />} />
          <Route path="payment" element={<Payment />} />
          {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
