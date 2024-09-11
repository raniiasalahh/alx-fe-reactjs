import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the content of blog post {id}.</p>
    </div>
  );
};

export default BlogPost;
