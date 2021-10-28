import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import {useEffect, useState} from "react";
import { io } from "socket.io-client";
import { uniqueNamesGenerator, colors, animals } from "unique-names-generator";


const socket = io("http://localhost:5001");

function Chat() {
  const [userInfo, setUserInfo] = useState([]);

  const getUserInfo= async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/biometrics/${id}`);
      const jsonData = await response.json();
      console.log("json", jsonData)
      setUserInfo(jsonData);
      return jsonData;
    }
    catch (err) {
      console.error(err.message)
    }
  }


  useEffect(() => {
    addResponseMessage(`Hello! Chat with your coach here.`);
    socket.on("receive-message", (message) => {
      addResponseMessage(message);
 
    })
  }, []);


  useEffect(() => {
    const info = getUserInfo(1); 
    console.log("chat user info", info)
  }, []);
  // const randomName = uniqueNamesGenerator({
  //   dictionaries: [colors, animals],
  //   style: "upperCase",
  // })

  const handleNewUserMessage = (newMessage) => {
    // console.log(`New message incoming! ${newMessage}`);
   // socket.emit("send-message", `${userInfo[0].first_name}: ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("Hi there!");
 
  };

  return (
    <div>

    <Widget title="NutriAdvisor" subtitle={`Chat with your Coach.`} handleNewUserMessage={handleNewUserMessage}/>
    </div>
  );
}

export default Chat;