import React, { useState } from 'react';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const message = 'There is no feedback';

  const handleFeedbackBtns = option => {
    if (option === 'good') {
      setGood(good + 1);
    }
    if (option === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (option === 'bad') {
      setBad(bad + 1);
    }
  };

  const total = good + neutral + bad;

  const percentOfGood = Math.round((good / total) * 100) || 0;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onClick={handleFeedbackBtns} />
      </Section>

      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentOfGood={percentOfGood}
          />
        ) : (
          <p style={{ fontSize: '2rem', fontWeight: '600' }}>{message}</p>
        )}
      </Section>
    </>
  );
}
