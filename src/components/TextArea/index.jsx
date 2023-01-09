import React from 'react'

const TextArea = (props) => {
  const { name, title, onChange, value } = props;

  return (
    <div>
      <textarea
        placeholder={title}
        name={name}
        onChange={(e) => onChange(e?.target?.value)}
        value={value}
      />
    </div>
  );
}

export default TextArea