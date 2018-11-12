import React from 'react';
import spinner from './spinner.gif';

export default function() {
  return (
    <div>
      <img
        src={spinner}
        style={{ widows: '100px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
}
