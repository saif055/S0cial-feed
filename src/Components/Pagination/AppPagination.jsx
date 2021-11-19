import React from 'react';
import Pagination from '@mui/material/Pagination';
import './pagination.css';
import { display } from '@mui/system';

const AppPagination = ({setPost, postNumber}) => {
    const handleChange = (post) =>{
        setPost(post)
        window.scroll(0,0) 
    }

    return (
        <>
        <div className="container">
            <div className="root">
            <Pagination
            onChange={(e) => handleChange(e.target.display)}
            style={{display: "flex", justifyContent: "center"}} variant="outlined" count={postNumber}/>
            </div>
        </div>
        </>
    )
}

export default AppPagination;
