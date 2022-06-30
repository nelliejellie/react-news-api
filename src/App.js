import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Heading from './components/Heading';
import Pagination from './components/Pagination';
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    fetchArticles()
  },[page])

  const fetchArticles = () =>{
    axios.get(`https://newsapi.org/v2/everything?q=nigeria&apiKey=f8fd61d8395e419da31226ff9dc65845&pageSize=6&page=${page}`)
      .then(res => {
        setArticles(res.data.articles)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  return (
    <section>
      <Navbar/>
      <Heading/>
      <Card articles={articles}/>
      <div className='flex justify-end mr-8 mt-16 mb-4'>
        <Pagination setPage={setPage} page={page}/>
      </div>
    </section>
  );
}

export default App;
