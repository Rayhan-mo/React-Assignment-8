import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Photos from '../Photos/Photos';
import Photo from '../FakePhoto/Photo';

// postDetail.js

const PostDetail = () => {
    const {postId} = useParams();
    const [photo, setPhoto] = useState(Photo);
    const [postDetail, setPostDetail] = useState([]);
    useEffect(() => {
        const url =`https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data)) 
       
    }, [])
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        // console.log(commentUrl)
        fetch(commentUrl)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])
    const detailStyle={
        marginLeft: '5vh',
        padding: '5px'
    }
    return (
        <div style={detailStyle} >
           
            <h4>Post Details {postId}</h4>
            <h6 >{postDetail.body}</h6>
            <h5>Post Comments</h5>
            {
                 photo.map(photo => <Photos photo={photo}></Photos>)
             }
            {
                 comment.map(comment => <Comments comment={comment}
                 ></Comments>)
             }
        </div>
    );
};

export default PostDetail;