import { useState } from "react";

export default function UserInput({ formInfo, handleChange }) {
  return (
    <div id="input-group">
      {formInfo.map((item, index) => (
        <div id="user-input" key={index}>
          <label>{item.text}</label>
          <input
            value={item.value}
            type="number"
            min={0}
            required
            onChange={(event) => handleChange(item.key, event.target.value)}
          />
        </div>
      ))}
    </div>
  );
}
