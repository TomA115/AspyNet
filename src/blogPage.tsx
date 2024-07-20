import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./blogCard";
import { Post } from "./blogCard";
import './CSS/Blog.css'
import Footer from "./footer";
import TopBanner from "./topbanner";


const BlogPage = () =>{
    const[posts,setPosts] = useState<Post[]>([]);

    const getPostData = () => {
        axios
          .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@pavicary")
          .then((res) => {
            const allPosts = res.data.items;
            setPosts(allPosts.slice(0,3));
          })
    }

    const getImage = (node:string) =>{
      let tag = document.createElement('div');
      tag.innerHTML = node;
      const imgTag = tag.querySelector('img');
      const imageUrl = imgTag ? imgTag.src : '';
      return imageUrl;
    }
    useEffect(() =>{
        getPostData();
    },[])

    return(
      <div className="content-blog">
        <TopBanner/>
      <div className="posts-container">
        {posts.map((post,index) => 
        (<BlogCard key={index} title={post.title}
        description={post.description} link={post.link} photoLink={`${getImage(post.description)}`} pubDate= {post.pubDate}/>
        ))}
      </div>
      <Footer wideFooter={false}/>
      </div>
      
    )
}

export default BlogPage;