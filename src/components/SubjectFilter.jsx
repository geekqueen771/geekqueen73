import React, { useState } from 'react';

const SubjectFilter = ({ subjects, onFilter }) => {
  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const handleSubjectChange = (subject) => {
    setSelectedSubjects((prevSelected) => {
      if (prevSelected.includes(subject)) {
        return prevSelected.filter((s) => s !== subject);
      } else {
        return [...prevSelected, subject];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(selectedSubjects);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Filter by Subject</h3>
      {subjects.map((subject) => (
        <label key={subject}>
          <input
            type="checkbox"
            value={subject}
            checked={selectedSubjects.includes(subject)}
            onChange={() => handleSubjectChange(subject)}
          />
          {subject}
        </label>
      ))}
      <button type="submit">Apply Filter</button>
    </form>
  );
};

export default SubjectFilter;