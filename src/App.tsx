import { Route, Routes } from "react-router-dom";
import {
  Home,
  Main,
  AddFeedback,
  EditFeedback,
  OneFeedback,
} from "@pages/index";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/add-feedback" element={<AddFeedback />} />
        <Route path="/one-feedback/:id" element={<OneFeedback />} />
        <Route path="/edit-feedback/:id" element={<EditFeedback />} />
      </Route>
    </Routes>
  );
}

export default App;
