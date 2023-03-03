import React from "react";

const AddTask = ({data, setData}) => {

  const handleDouble=(id,e)=>{
    setData(data.map((item)=>item.id ===id ? {...data, clicked: !item.clicked}: item))

  }

  return (
    <div>

      {data.map((item)=> {
        const {day,time,text,id,clicked}= item
        return(
        <ul key={id} onDoubleClick={(e)=>handleDouble(id,e)} >
        <div className="script"></div>
        <li className="list">
          <div>
            <p className=" fs-4">{text}</p>
            <p>{day} / {time} </p>
          </div>
          ❌
        </li>
      </ul>)
      })}
      
    </div>
  );
};

export default AddTask;