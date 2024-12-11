import React from "react";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import TodosPage from "./pages/todosPage/TodosPage";

const App = () => {
  return (
    <div>
      <MainPage />
      <AboutPage />
      <TodosPage />
    </div>
  );
};

export default App;
