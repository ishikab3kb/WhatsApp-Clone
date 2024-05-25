import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChat from "./SidebarChat";
import db from "../firebase";
import { useStateValue } from "../StateProvider";

function Sidebar() {
  //state for all the chat rooms
  const [rooms, setRooms] = useState([]);
  const [{user},dispatch] = useStateValue();

  useEffect(() => {
    //db.collection('rooms') ---> imply go to the rooms collection
    //onSnapshot is used to take the snapshot of the database collection for that instance
    //onSnapshot code also runs as the change occurs in the dataset .... basically we can say takes a new snapshot of that instance....its realtime...it renders our code as the database is updated
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      //snapshot.docs is the list of the rooms in database
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          //creating an object for the room with the name property in it
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL}></Avatar>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon></DonutLargeIcon>
          </IconButton>
          <IconButton>
            <ChatIcon></ChatIcon>
          </IconButton>
          <IconButton>
            <MoreVertIcon></MoreVertIcon>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined></SearchOutlined>
          <input placeholder="Search or start new chat" type="text"></input>
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat></SidebarChat>
        {rooms.map((room) => (
          <SidebarChat
            key={room.id}
            id={room.id}
            name={room.data.name}
          ></SidebarChat>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
