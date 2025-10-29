import React, { useState } from "react";

const StatusFilter = ({ onSelectStatus }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Status");

  const options = ["New Items", "Featured", "Out of Stock"];

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    onSelectStatus(option); 
  };

  return (
    <div style={{ position: "relative", display: "inline-block" ,width : "200px"}}>
      <button
        onClick={() => setOpen(!open)}
        style={{ padding: "5px 10px", cursor: "pointer" }}
      >
        {selected} {open ? "▲" : "▼"}
      </button>

      {open && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            background: "#fff",
            border: "1px solid #ccc",
            width: "150px",
            listStyle: "none",
            padding: "5px 0",
            margin: 0,
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            zIndex: 100,
          }}
        >
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              style={{
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StatusFilter;
