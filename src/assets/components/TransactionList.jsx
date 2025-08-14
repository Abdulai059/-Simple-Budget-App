import React from "react";
import TransactionItem from "./TransactionItem";

function TransactionList({
  friends,
  onDeleteFriend,
  onSelection,
  selectFriend,
}) {
  return (
    <ul>
      {friends.map((t) => (
        <TransactionItem
          key={t.id}
          transaction={t}
          selectFriend={selectFriend}
          onSelection={onSelection}
          onDeleteFriend={onDeleteFriend}
        />
      ))}
    </ul>
  );
}

export default TransactionList;
