import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// backend server for chat
const socket = io("http://localhost:5001");

function Chat() {
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/biometrics/${id}`);
      const jsonData = await response.json();
      setUserInfo(jsonData);
      return jsonData;
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    addResponseMessage(`Hello! Chat with your coach here.`);
    socket.on("receive-message", (message) => {
      addResponseMessage(message);
    });
  }, []);

  useEffect(() => {
    getUserInfo(1);
  }, []);

  const handleNewUserMessage = (newMessage) => {
    // socket.emit("send-message", `${userInfo[0].first_name}: ${newMessage}`);
    // Now send the message through the backend API
    addResponseMessage("Hello! Your coach will be available shortly.");
  };

  return (
    <div>
      <Widget
        title="NutriAdvisor"
        subtitle={`Chat with your Coach.`}
        handleNewUserMessage={handleNewUserMessage}
      />
    </div>
  );
}

export default Chat;
