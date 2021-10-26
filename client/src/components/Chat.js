import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import {useEffect} from "react";
import { io } from "socket.io-client";
import { uniqueNamesGenerator, colors, animals } from "unique-names-generator"

const socket = io("http://localhost:5001");

function Chat() {

  useEffect(() => {
    addResponseMessage(`Hello ${randomName}! Chat with your coach here.`);
    socket.on("receive-message", (message) => {
      addResponseMessage(message);

    })
  }, []);

  const randomName = uniqueNamesGenerator({
    dictionaries: [colors, animals],
    style: "upperCase",
  })

  const handleNewUserMessage = (newMessage) => {
    // console.log(`New message incoming! ${newMessage}`);
    socket.emit("send-message", `${randomName}: ${newMessage}`);
    // Now send the message throught the backend API
 
  };

  return (
    <div>

    <Widget title="NutriAdvisor" subtitle={`Joined as ${randomName}`} handleNewUserMessage={handleNewUserMessage}/>
    </div>
  );
}

export default Chat;