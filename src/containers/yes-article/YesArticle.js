import * as React from 'react';
import { Link } from 'react-router-dom';
import './YesArticle.css';

const YesArticle = () => {
  const article = {
    title: this.id,
    body: '<h2>Testing</h2><p>Ok, let\'s do more now!</p>',
  }
  return (
    <div className="App">
    <header className="App-header">
      <h1 className="blog__title">{article.title}</h1>
      <Link to="/blog">Back to Blog</Link>
    </header>
    <hr />
    <div className="article__body" dangerouslySetInnerHTML={{ __html: article.body }} />
  </div>
  );
};

export default YesArticle;
