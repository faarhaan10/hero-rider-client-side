import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration/Registration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
