import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";
import "./blog.css";

const Blog = () => (
  <div className="gpt5__blog section__padding" id="blog">
    <div className="gpt5__blog-heading">
      <h1 className="gradient__text">
        "There's so much going on <br /> Check out our latest blogs to stay
        updated!"
      </h1>
    </div>
    <div className="gpt5__blog-container">
      <div className="gpt5__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Dec 26, 2024"
          text="GPT-5 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
      <div className="gpt5__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Dec 26, 2024"
          text="GPT-5 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog03}
          date="Dec 26, 2024"
          text="GPT-5 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog04}
          date="Dec 26, 2024"
          text="GPT-5 and Open  AI is the future. Let us exlore how it is?"
        />
        <Article
          imgUrl={blog05}
          date="Dec 26, 2024"
          text="GPT-5 and Open  AI is the future. Let us exlore how it is?"
        />
      </div>
    </div>
  </div>
);

export default Blog;
