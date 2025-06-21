import React, {useState, useEffect, useContext} from "react";
import "./Blog.scss";
import BlogCard from "../../components/blogCard/BlogCard";
import {blogSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs(props) {
  const {isDark: contextIsDark} = useContext(StyleContext);
  const [mediumBlogs, setMediumBlogs] = useState([]);

  function setMediumBlogsFunction(array) {
    setMediumBlogs(array);
  }

  useEffect(() => {
    if (blogSection.displayMediumBlogs === "true") {
      const getMediumBlogs = async () => {
        try {
          const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${blogSection.username}`;
          const response = await fetch(rssUrl);
          const data = await response.json();
          setMediumBlogsFunction(data.items);
        } catch (error) {
          console.error("ERROR fetching Medium blogs:", error);
        }
      };
      getMediumBlogs();
    }
  }, []);

  if (blogSection.displayMediumBlogs === "false") {
    return null;
  }
  const isDark = props.isDark;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="main" id="blogs">
        <div className="blog-header">
          <h1 className="blog-header-text">{blogSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blogSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {mediumBlogs.map((blog, i) => {
              return (
                <BlogCard
                  key={i}
                  isDark={isDark}
                  blog={{
                    url: blog.link,
                    image: blog.thumbnail,
                    title: blog.title,
                    description: blog.description
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
