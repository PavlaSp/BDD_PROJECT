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
  },
  {
    id: 3,
    text: "Otázka 3: Komentář (povinné)",
    type: "comment"
  }
];

function Dotaznik() {
  const [role, setRole] = useState("uzivatel");
  const [userSubmitted, setUserSubmitted] = useState(false);
  const [selected, setSelected] = useState({});
  const [comment, setComment] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [approval, setApproval] = useState(null); // null | "schvaleno" | "zamítnuto"

  const handleSelect = (qId, answer) => {
    setSelected({ ...selected, [qId]: answer });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allAnswered = questions
      .filter(q => q.type !== "comment")
      .every(q => selected[q.id]);
    if (!allAnswered) {
      setError("Nejsou vyplněny všechny povinné odpovědi.");
      return;
    }
    if (comment.trim() === "") {
      setError(""); // zrušit případnou předchozí hlášku
      // nativní validace textarea se postará o alert
      return;
    }
    setError("");
    setSubmitted(true);
    setUserSubmitted(true);
    setApproval(null);
  };

  // Rekapitulace: uživatel vidí vše read-only, pokud je role uzivatel, dotazník je odeslán a schvalovatel schválil/zamítl
  const isRecap = role === 'uzivatel' && userSubmitted && approval !== null;
  // Schvalovatel musí zadat komentář před schválením/zamítnutím
  const [schvalovatelKomentar, setSchvalovatelKomentar] = useState("");
  const [schvalovatelError, setSchvalovatelError] = useState("");

  return (
    <form onSubmit={handleSubmit} style={{
      maxWidth: 400,
      margin: '2rem auto',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
      background: '#fff',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Dotazník</h2>
      <div style={{marginBottom: '1.5rem'}}>
        <label style={{fontWeight: 'bold', marginRight: 8}}>Role:</label>
        <select
          value={role}
          onChange={e => setRole(e.target.value)}
            disabled={isRecap}
          style={{padding: 6, borderRadius: 4, border: '1px solid #ccc'}}
        >
          <option value="uzivatel">Uživatel</option>
          <option value="schvalovatel" disabled={!userSubmitted}>Schvalovatel</option>
        </select>
        {userSubmitted && (
          <button
            type="button"
            style={{marginLeft: 12, padding: '6px 14px', borderRadius: 4, border: 'none', background: '#2563eb', color: '#fff', fontWeight: 'bold', cursor: 'pointer'}}
            onClick={() => setRole(role === 'uzivatel' ? 'schvalovatel' : 'uzivatel')}
          >Přepnout na {role === 'uzivatel' ? 'schvalovatele' : 'uživatele'}</button>
        )}
      </div>
      {questions.map((q) => (
        <fieldset key={q.id} style={{
          border: '1px solid #eee',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          padding: '1rem',
          background: '#fafbfc'
        }}>
          <legend style={{fontWeight: 'bold', marginBottom: 8}}>{q.text}</legend>
          {q.type === "comment" ? (
            <textarea
              value={role === 'schvalovatel' ? schvalovatelKomentar : comment}
              onChange={e => {
                if (role === 'schvalovatel') setSchvalovatelKomentar(e.target.value);
                else setComment(e.target.value);
              }}
              disabled={isRecap}
              rows={4}
              style={{width: '100%', borderRadius: 6, border: '1px solid #ccc', padding: 8, fontSize: '1rem'}}
              placeholder={role === 'schvalovatel' ? "Komentář schvalovatele..." : "Váš komentář..."}
            />
          ) : (
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              {q.answers.map((a, idx) => (
                <label key={idx} style={{display: 'flex', alignItems: 'center', gap: 8, padding: '2px 0'}}>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={a}
                    checked={selected[q.id] === a}
                      onChange={() => handleSelect(q.id, a)}
                        disabled={isRecap}
                    style={{marginRight: 6}}
                  />
                  {a}
                </label>
              ))}
            </div>
          )}
        </fieldset>
      ))}
      {error && <div style={{
        color: '#b91c1c',
        background: '#fee2e2',
        borderRadius: '6px',
        padding: '0.75rem',
        marginBottom: '1rem',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1rem'
      }}>{error}</div>}

  <button type="submit" disabled={submitted || isRecap} style={{
        width: '100%',
        padding: '0.75rem',
        fontSize: '1rem',
        borderRadius: '6px',
        border: 'none',
        background: '#2563eb',
        color: '#fff',
        fontWeight: 'bold',
        cursor: submitted ? 'not-allowed' : 'pointer',
        marginTop: '1rem',
        boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
      }}>Odeslat</button>
      {submitted && (
        <div style={{marginTop: '1.5rem', textAlign: 'center'}}>
          <div data-testid="submitted" style={{
            padding: '1rem',
            background: '#e0ffe0',
            borderRadius: '6px',
            color: '#256029',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            marginBottom: '1rem'
          }}>Dotazník byl odeslán!</div>
          {role === 'schvalovatel' && !approval && (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12}}>
              <textarea
                value={schvalovatelKomentar}
                onChange={e => setSchvalovatelKomentar(e.target.value)}
                required
                rows={3}
                style={{width: '80%', borderRadius: 6, border: '1px solid #ccc', padding: 8, fontSize: '1rem', marginBottom: 8}}
                placeholder="Komentář schvalovatele..."
              />
              {schvalovatelError && <div style={{color: '#b91c1c', background: '#fee2e2', borderRadius: 6, padding: '0.5rem', fontWeight: 'bold'}}>{schvalovatelError}</div>}
              <div style={{display: 'flex', gap: 16}}>
                <button type="button" style={{
                  background: '#22c55e', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.5rem', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer'
                }} onClick={() => {
                  if (!schvalovatelKomentar.trim()) {
                    setSchvalovatelError('Komentář je povinný!');
                    return;
                  }
                  setSchvalovatelError("");
                  setApproval('schvaleno');
                }}>Schválit</button>
                <button type="button" style={{
                  background: '#ef4444', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.5rem', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer'
                }} onClick={() => {
                  if (!schvalovatelKomentar.trim()) {
                    setSchvalovatelError('Komentář je povinný!');
                    return;
                  }
                  setSchvalovatelError("");
                  setApproval('zamítnuto');
                }}>Zamítnout</button>
              </div>
            </div>
          )}
          {approval === 'schvaleno' && (
            <div style={{marginTop: 16, color: '#166534', background: '#bbf7d0', borderRadius: 6, padding: '1rem', fontWeight: 'bold'}}>
              Dotazník byl schválen.<br />
              {isRecap && (
                <span data-testid="schvalovatel-komentar">Komentář schvalovatele: {schvalovatelKomentar}</span>
              )}
            </div>
          )}
          {approval === 'zamítnuto' && (
            <div style={{marginTop: 16, color: '#7f1d1d', background: '#fee2e2', borderRadius: 6, padding: '1rem', fontWeight: 'bold'}}>Dotazník byl zamítnut.</div>
          )}
        </div>
      )}
    </form>
  );
}

export default Dotaznik;