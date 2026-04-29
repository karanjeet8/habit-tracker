import { useState } from "react";

function HabitForm({ addHabit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addHabit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter habit"
      />
      <button className="add-btn">Add</button>
    </form>
  );
}

export default HabitForm;