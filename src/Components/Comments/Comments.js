import React, { useState, useEffect } from 'react';


const Comments = (props) => {
    const {name, body} = props.comment;

    const commentStyle={
       width:'500px',
       marginLeft:'23vh'
    }
    
    return (
        <div style={commentStyle}>
        
            <h6>name: {name} <p>{body}</p></h6>
       
        </div>
    );
};

export default Comments;