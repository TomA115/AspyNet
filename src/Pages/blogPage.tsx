import axios from "axios";
import { useEffect, useState, useRef } from "react";
import BlogCard from "../Components/blogCard";
import { Post } from "../Components/blogCard";
import '../CSS/Blog.css';

const BlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const postsContainerRef = useRef<HTMLDivElement>(null);

    const getPostData = () => {
        axios
          .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@thomasaspy1")
          .then((res) => {
            const allPosts = res.data.items;
            setPosts(allPosts.slice(0, 3));
          });
    }

    const getImage = (node: string) => {
        let tag = document.createElement('div');
        tag.innerHTML = node;
        const imgTag = tag.querySelector('img');
        const imageUrl = imgTag ? imgTag.src : '';
        return imageUrl;
    }

    useEffect(() => {
        getPostData();
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });

        const cards = postsContainerRef.current?.querySelectorAll('.card');
        cards?.forEach(card => {
            observer.observe(card);
        });

        return () => {
            cards?.forEach(card => {
                observer.unobserve(card);
            });
        };
    }, [posts]);

    return (
      <div className="content-blog">
        <div className="posts-container" ref={postsContainerRef}>
          {posts.map((post, index) =>
            (<BlogCard key={index} title={post.title}
            description={post.description} link={post.link} photoLink={`${getImage(post.description)}`} pubDate={post.pubDate} />
            ))}
        </div>
      </div>
    );
}

export default BlogPage;