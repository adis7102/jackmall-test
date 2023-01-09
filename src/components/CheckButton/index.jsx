import React from 'react'

const CheckButton = (props) => {
  const { name, title, onChange, value } = props;

  return (
    <div className="input">
      <input
        type="checkbox"
        name={name}
        onChange={(e) => onChange(e?.target?.value)}
        value={value}
      />
      <label for={name}>{title}</label>
    </div>
  );
}

export default CheckButton