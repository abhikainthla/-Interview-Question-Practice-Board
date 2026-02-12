import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import TopicsDashboard from "./pages/TopicDashboard";
import TopicQuestion from "./pages/TopicQuestions";
import QuestionDetail from "./pages/QuestionDetail";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TopicsDashboard />} />
        <Route path="/topic/:topicId" element={<TopicQuestion />} />
        <Route
          path="/topic/:topicId/question/:questionId"
          element={<QuestionDetail />}
        />
      </Routes>
    </>
  );
}
