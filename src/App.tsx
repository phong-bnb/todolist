import './App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskList from './components/TaskList/taskList';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/homepage" element={<TaskList />} />
      </Routes>
    </Router>
  );
}

export default App;
