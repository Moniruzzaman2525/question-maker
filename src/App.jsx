
import { Route, Router } from "react-router-dom";
import MainQuestion from "./Component/Main/MainQuestion";
import Navbar from "./Component/Navbar/Navbar";
import QuestionAnswer from "./Component/QuestionsAnswer/QuestionAnswer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Router>
        <Route path="/" element={<MainQuestion />}></Route>
        <Route path="/answer" el={<QuestionAnswer />}></Route>
      </Router>
    </div>
  );
};

export default App;


