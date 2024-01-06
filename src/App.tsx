import { Main, AddFeedback, Home, OneFeedback } from "./shared/ui/index";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/add-feedback" element={<AddFeedback />} />
        <Route path="/one-feedback/:id" element={<OneFeedback />} />
      </Route>
    </Routes>
  );
}

export default App;
