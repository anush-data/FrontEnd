export default function Message({ role, content }) {
  return (
    <div className={`message ${role}`}>
      <div className="avatar">
        {role === "user" ? "🧑" : "🤖"}
      </div>

      <div className="content">
        {content || (role === "assistant" ? "Typing..." : "")}
      </div>
    </div>
  );
}