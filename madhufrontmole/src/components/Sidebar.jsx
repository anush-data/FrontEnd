export default function Sidebar({ onNewChat }) {
  return (
    <div className="sidebar">
      <h2>ChatGPT Clone</h2>
      <button onClick={onNewChat}>+ New Chat</button>
    </div>
  );
}