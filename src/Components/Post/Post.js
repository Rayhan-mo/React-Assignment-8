import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    // console.log(props);
    const {title, id} = props.post;
    const setStyle = {
        border:'1px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'10px'
    }
    return (
        <div style={setStyle}>
           <h2>Post: {title}</h2>
           <p><Link to={`/post/${id}`}>
           <button>Show detail of {id}</button>
           </Link></p>
           {/* <button>Show detail</button> */}
        </div>
    );
};

export default Post;