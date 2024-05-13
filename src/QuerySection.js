// QuerySection.js
import React from 'react';

const QuerySection = ({ queries }) => {
  return (
    <div className="admin-section">
      <h3>Query Section</h3>
      <ul>
        {queries.map((query, index) => (
          <li key={index}>{query}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuerySection;
