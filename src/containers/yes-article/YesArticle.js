/* eslint-disable react/no-danger */
import * as React from 'react';
import { Link } from 'react-router-dom';
import './YesArticle.css';

type Props = {
  match: string,
};

const YesArticle = ({ match }: Props) => {
  const article = require(`../../posts/${match.params.id}.md`); // eslint-disable-line
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
