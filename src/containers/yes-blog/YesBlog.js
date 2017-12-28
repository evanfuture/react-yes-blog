import * as React from 'react';
import { Link } from 'react-router-dom';
import './YesBlog.css';

const posts = {};
const req = require.context('../../posts/', false, /\.md$/);

req.keys().forEach((key) => {
  posts[key] = req(key);
});

const ArticleTeasers = () => {
  const articles = () => {
    const articleArray = [];

    Object.keys(posts).forEach((key) => {
      const article = posts[key];
      article.slug = key.replace('./', '').replace('.md', '');
      articleArray.push(article);
    });

    return articleArray
      .filter(post => post.status === 'publish')
      .sort((a, b) => a.created < b.created);
  };

  return articles().map(article => (
    <article className="article" key={article.slug}>
      <Link className="article__link" to={`/blog/${article.slug}`}>
        <h2 className="article__title">{article.title}</h2>
        <p className="article__description">{article.description}</p>
      </Link>
    </article>
  ));
};

const YesBlog = () => (
  <div className="App">
    <header className="App-header">
      <h1>Blog</h1>
      <Link to="/">Home</Link>
    </header>
    <hr />
    <ArticleTeasers />
  </div>
);

export default YesBlog;
