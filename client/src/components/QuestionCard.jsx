import React from 'react';
export default function QuestionCard({ question, value, onChange }) {
  return (
    <article className="question-card">
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <label key={option} className={value === index ? 'selected option' : 'option'}>
            <input type="radio" checked={value === index} onChange={() => onChange(index)} />
            {option}
          </label>
        ))}
      </div>
    </article>
  );
}
