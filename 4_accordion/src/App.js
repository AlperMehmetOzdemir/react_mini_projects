import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

const App = () => {
  const [questions, setQuestions] = useState(data);

  const questionList = questions.map((q) => (
    <SingleQuestion key={q.id} {...q} />
  ));

  return (
    <main className="container">
      <h3>Questions and answers about login</h3>
      <section className="info">{questionList}</section>
    </main>
  );
};

export default App;
