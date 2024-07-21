import './CSS/Blog.css'
const BlogCard = (_post:Post) =>
{
    const toText = (node:string) =>{
        let Tag = document.createElement('div');
        Tag.innerHTML = node;
        node = Tag.innerText;
        return node;
      }

    return(
        <div className="card">
         <h2>{_post.title}</h2>
         <h3>Posted: {_post.pubDate}</h3>
         <img className='medium-photo' src={_post.photoLink} alt=''></img>
         <p> {`${toText(_post.description.substring(0,1000))}...`}</p>
         <a href={_post.link} target="_blank" rel="noopener noreferrer">Read more</a>   
        </div>
    );
}

export default BlogCard;
export interface Post{
    title:string;
    description:string;
    link:string;
    photoLink:string;
    pubDate:string;
  };