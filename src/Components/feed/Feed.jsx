import React, {useState, useEffect} from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import "./feed.css";
import { Posts } from '../../dummyData';
import AddPagination from '../Pagination/AppPagination';

const Feed = () => {
  const [feed, setFeed] = useState([]);
  const [post, setPost] = useState(3);
  const [numberOfPost, setnumberOfPost] = useState(4);
  const [loading, setLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);

  const fetchFeed = async () => {
    try{
      const {dummyData} = await post.get({dummyData}
        );
        setFeed(dummyData?.results);
        setLoading(false);
        setnumberOfPost(dummyData?.total_pages);
      }catch (error){
        console.error(error);
        setIsErr(true);
      }
    };
    useEffect(()=>{
      fetchFeed();
    }, [post]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (<Post key={p.id} post={p} />) )}
       <AddPagination setPost={setPost} postNumber={numberOfPost}/>
      </div>
    </div>
  )
}

export default Feed;
