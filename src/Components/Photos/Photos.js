import React from 'react';

const Photos = (props) => {
    const {url} = props.photo;
    const imgStyle={
        width:'70px',
        height: '70px',
        borderRadius:'50%',
        padding:'5px'
    }
    return (
        <div >
            <img style={imgStyle} src={url} alt=""/>
        </div>
    );
};

export default Photos;