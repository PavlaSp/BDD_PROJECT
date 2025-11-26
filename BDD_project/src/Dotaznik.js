import React, { useState } from "react";

const questions = [
  {
    id: 1,
    text: "Otázka 1",
    answers: ["Odpověď 1", "Odpověď 2", "Odpověď 3"]
  },
  {
    id: 2,
    text: "Otázka 2",
    answers: ["Odpověď 1", "Odpověď 2", "Odpověď 3"]
  }
];

function Dotaznik() {
  const [selected, setSelected] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qId, answer) => {
    setSelected({ ...selected, [qId]: answer });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dotazník</h2>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.text}</p>
          {q.answers.map((a, idx) => (
            <label key={idx}>
              <input
                type="radio"
                name={`question-${q.id}`}
                value={a}
                checked={selected[q.id] === a}
                onChange={() => handleSelect(q.id, a)}
                disabled={submitted}
              />
              {a}
            </label>
          ))}
        </div>
      ))}
      <button type="submit" disabled={submitted}>Odeslat</button>
      {submitted && <div data-testid="submitted">Dotazník byl odeslán!</div>}
    </form>
  );
}

export default Dotaznik;
