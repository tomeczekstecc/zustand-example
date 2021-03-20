import React from 'react';
import {usePeopleStore} from '../store';

const People = () => {
  const people = usePeopleStore((state) => state.people);

  return (
    <div>
      <p>We have {people.length} in ouur DB</p>
      <ul>
        {people.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
};

export default People;
