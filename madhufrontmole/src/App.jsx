import { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
import "./App.css";
function App() {
  // ✅ state must be inside component
  const [messages, setMessages] = useState([]);

  const sendMessage = async (text) => {
    const newMessages = [...messages, { role: "user", content: text }];

    // show user message immediately
    setMessages(newMessages);

    try {
      const res = await fetch(
        `https://shopping-marsupial-fanciness.ngrok-free.dev/chat?prompt=${encodeURIComponent(text)}`,
        { method: "POST" }
      );

      const data = await res.json();

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.response },
      ]);

    } catch (err) {
      console.error(err);

      setMessages([
        ...newMessages,
        { role: "assistant", content: "Error connecting to backend" },
      ]);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
  };

  return (
    <div className="app">
      <Sidebar onNewChat={handleNewChat} />
      <div className="main">
        <ChatWindow messages={messages} />
        <InputBox onSend={sendMessage} />
      </div>
    </div>
  );
}

export default App;