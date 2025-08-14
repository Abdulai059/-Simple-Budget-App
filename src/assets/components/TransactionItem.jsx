import React from "react";
import Button from "./Button/button";
import { FaTrash } from "react-icons/fa";

function TransactionItem({
  transaction,
  onDeleteFriend,
  selectFriend,
  onSelection,
}) {
  const isSelected = selectFriend?.id === transaction.id;

  return (
    <li
      className={isSelected ? "selected" : ""}
      onClick={() => onSelection(transaction)}
    >
      <img src={transaction.image} alt={transaction.name} />
      <h3>{transaction.name}</h3>

      {transaction.amount < 0 && (
        <p className="red">
          You send {Math.abs(transaction.amount)}₿ {transaction.crypto}.
        </p>
      )}

      {transaction.amount > 0 && (
        <p className="green">
          You received {Math.abs(transaction.amount)}₿ from {transaction.crypto}
          .
        </p>
      )}

      {transaction.amount === 0 && (
        <p className="">
          No transaction
          {/* You have {Math.abs(transaction.amount)}€ from {transaction.name}. */}
        </p>
      )}

      <Button onClick={() => onDeleteFriend(transaction.id)}>
        <FaTrash style={{ fontSize: "17px" }} />
        {/* Delete */}
      </Button>
    </li>
  );
}

export default TransactionItem;
