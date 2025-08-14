import React from "react";
import Button from "../Button/button";

function SendForm() {
  return (
    <>
      <h2>Send Transaction</h2>
      <form>
        <label> 💰 Amount</label>
        <input
          className="no-spinner"
          type="number"
          placeholder="Amount(₿)"
          id="amount"
        />

        <label htmlFor="platform">🪙 Select Crypto</label>
        <select id="platform">
          <option value="binance">Bitcoin</option>
          <option value="okx">Ethereum</option>
          <option value="kraken">Solana</option>
          <option value="kraken">Cadano</option>
          <option value="coinbase">Ondo</option>
        </select>

        <label> 🤑 Are you sending or recieving</label>
        <select>
          <option value="user">You</option>
          <option value="friend">x</option>
        </select>

        <Button>Send</Button>
      </form>
    </>
  );
}

export default SendForm;
