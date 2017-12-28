import * as React from 'react';
import { Link } from 'react-router-dom';
import './YesBlog.css';

const ArticleTeasers = () => {
  const articles = () => {
    return [
        {
          slug: 'first-article',
          title: 'Article One',
          description: 'This is article one\'s description',
        },
        {
          slug: 'second-article',
          title: 'Article Two',
          description: 'This is article two\'s description',
        },
    ];
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
