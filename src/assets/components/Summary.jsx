import React from "react";

function Summary() {
  const receive = 0;
  const transfered = 0;
  const balance = 1000;
  return (
    <div className="summary">
      <div className="summary-card">
        <h3>Received</h3>
        <p>${receive}</p>
      </div>

      <div className="summary-card">
        <h3>Transfered</h3>
        <p>${transfered}</p>
      </div>

      <div className="summary-card">
        <h3>Balance</h3>
        <p>${balance}</p>
      </div>
    </div>
  );
}

export default Summary;
