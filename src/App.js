import { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import "./index.css";

function App() {
  const [habits, setHabits] = useState([]);

  // Load data
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("habits")) || [];
    setHabits(data);
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // Add habit
  const addHabit = (name) => {
    setHabits([
      ...habits,
      { id: Date.now(), name, streak: 0, done: false }
    ]);
  };

  // Delete habit
  const deleteHabit = (id) => {
    setHabits(habits.filter(h => h.id !== id));
  };

  // Toggle habit
  const toggleHabit = (id) => {
    setHabits(
      habits.map(h =>
        h.id === id
          ? {
              ...h,
              done: !h.done,
              streak: h.done ? Math.max(0, h.streak - 1) : h.streak + 1
            }
          : h
      )
    );
  };

  return (
    <div className="app-container">
      <h1 className="title">🔥 Habit Tracker</h1>
      <HabitForm addHabit={addHabit} />
      <HabitList
        habits={habits}
        toggleHabit={toggleHabit}
        deleteHabit={deleteHabit}
      />
    </div>
  );
}

export default App;