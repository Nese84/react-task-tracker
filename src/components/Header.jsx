import React, { useState } from "react";
import AddTask from "./AddTask";
import Button from "./Button";
import Tasks from "./Tasks";

const Header = () => {
  const [show, setShow] = useState(true)
  return (
    <div className="container">
      <h3 className="text-center">Task Tracker</h3>
      <Button show={show} setShow={setShow}/>
      <p className="text-center ">No tasks to show...</p>
    {  <Tasks />}
      <AddTask />
    </div>
  );
};

export default Header;