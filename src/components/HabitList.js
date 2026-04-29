function HabitItem({ habit, toggleHabit, deleteHabit }) {
  if (!habit) return null;

  return (
    <div className="habit-item">
      <div>
        <strong>{habit.name}</strong>
        <p>🔥 Streak: {habit.streak}</p>
      </div>

      <div>
        <button
          className="done-btn"
          onClick={() => toggleHabit(habit.id)}
        >
          {habit.done ? "Undo" : "Done"}
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteHabit(habit.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default HabitItem;