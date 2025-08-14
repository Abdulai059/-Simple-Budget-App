import TransactionList from "./assets/components/TransactionList";
import Addfriend from "./assets/components/Addfriend";
import TransactionForm from "./assets/components/TransactionForm";
import Summary from "./assets/components/Summary";
import { useState } from "react";
import initialTransactions from "./assets/data/data";

export default function App() {
  const [friends, setFriends] = useState(initialTransactions);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
  }
  function handleDeleteFriend(id) {
    setFriends(friends.filter((friend) => friend.id !== id));
  }

  function handleSelection(friend){
    setSelectFriend((cur) => (cur?.id === friend.id ? null : friend));
  }

  return (
    <>
      <div className="app">
        <h1>💰 Simple Budget App</h1>
        <Summary />
        <div className="app-grid">
          <div className="sidebar">
            <h2>Transaction history</h2>

            <TransactionList
              friends={friends}
              selectFriend={selectFriend}
              onDeleteFriend={handleDeleteFriend}
                onSelection={handleSelection}
            />

            <Addfriend onAddFriend={handleAddFriend} />
          </div>

          <TransactionForm />
        </div>
      </div>
    </>
  );
}
