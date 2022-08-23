import React, { useContext, useState } from "react"
import { GlobalContext } from "../context/GlobalState"

export const AddTransaction = () => {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)

  const { addTransaction } = useContext(GlobalContext)

  const onSubmit = (e) => {

    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit} id="form">
        <div className="form-control">
          <label htmlFor="text">Transaction</label>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
            id="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (Enter negative for expense, positive for income)
          </label>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
