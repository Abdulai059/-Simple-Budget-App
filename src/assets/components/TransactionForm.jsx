import React, { useState } from "react";
import Button from "./Button/button";
import SendForm from "./Forms/SendForm";
import ReceiveForm from "./Forms/ReceiveForm";

function TransactionForm({ selectFriend }) {
  const [activeForm, setActiveForm] = useState("send"); // "send here is a default ui to appear"

  return (
    <div className="form-container">
      <div className="transactioon-btn">
        <Button onClick={() => setActiveForm("send")}>Send Crypto</Button>
        <Button onClick={() => setActiveForm("receive")}>
          Received Crypto
        </Button>
      </div>
      {activeForm === "send" && <SendForm onselectedFriend={selectFriend} />}
      {activeForm === "receive" && <ReceiveForm />}
    </div>
  );
}
export default TransactionForm;
