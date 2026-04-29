import HabitItem from "./HabitItem";

function HabitList({ habits = [], toggleHabit, deleteHabit }) {
  return (
    <div>
      {habits.length === 0 && <p>No habits yet 😅</p>}

      {habits.map((h) => (
        <HabitItem
          key={h.id}
          habit={h}
          toggleHabit={toggleHabit}
          deleteHabit={deleteHabit}
        />
      ))}
    </div>
  );
}

export default HabitList;