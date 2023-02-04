import React from "react";

const Tasklist = () => {
  return (
    <div>
      <p>All Tasks</p>
      <button>Clear All</button>
      <br />
      <div className="card1">
        <h3>This is some todo header</h3>
        <br />
        <p>This is some todo detail.</p>
      </div>
    </div>
  );
};

export default Tasklist;
