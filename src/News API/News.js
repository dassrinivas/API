import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewsApi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-10-20&sortBy=publishedAt&apiKey=6d8af4ffb7c1474890ab20786a35df8f')
      .then(response => {
        const articles = response.data.articles; // Access the 'articles' array in the response
        setData(articles);
      })
      .catch(error => {
        alert('Error fetching news:', error.message);
      });
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      {data.length > 0 && (
        <div>
          <h1>News</h1>
          <ul>
            {data.map(article => (
              <li key={article.title}>Author : {article.author} , 
              Title  {article.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NewsApi;
