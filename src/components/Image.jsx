import React from 'react';
import './Image.css';

const Image = () => {
  return (
    <div className="stack-wrapper bg-gray-900">
      <div className="stack border rounded-lg w-full ">
        <img src="" alt=""/> {/* to-do: add logo.html*/}
        <div className="content">Stack 1</div>
      </div>
      <div className="stack border rounded-lg w-full ">
        <img src="" alt=""/>
        <div className="content">Stack 2</div>
      </div>
    </div>
  );
};

export default Image;
