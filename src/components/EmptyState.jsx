export default function EmptyState({ totalTasks }) {
  return (
    <div className="empty-state">
      <span>🎯</span>
      <p>
        {totalTasks === 0
          ? "No tasks yet. Add your first task!"
          : "No tasks in this category."}
      </p>
    </div>
  );
}
