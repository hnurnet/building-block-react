import React from 'react';
import "./styles.css";

function Create() {
  return (
    <div className='form-container'>
      <form>
        <h2>Add a New Blog</h2>
        <input type="text" name="title" placeholder="Write Title" />
        <input type="text" name="desc" placeholder="Write Description" />
        <input type="file" />
        <button className='newblog-btn'>Submit</button>

      </form>
    </div>
  )
}

export default Create
