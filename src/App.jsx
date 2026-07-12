import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import GetStarted from "./pages/GetStarted";
import AICoach from "./pages/AICoach";
import SignIn from "./pages/SignIn";
import LearnersDashboard from "./pages/LearnersDashboard";
import LearningHub from "./pages/LearningHub";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/ai-coach" element={<AICoach />} />
        <Route
  path="/learners-dashboard"
  element={<LearnersDashboard />}
/>
<Route
  path="/learning-hub"
  element={<LearningHub />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;