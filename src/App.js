import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Heading from './components/Heading';
import Pagination from './components/Pagination';
import axios from 'axios';
import loadingImage from './images/Loading_2.gif'

function App() {
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoaded] = useState(false)

  useEffect(()=>{
    fetchArticles()
  },[page])

  const fetchArticles = () =>{
    setLoaded(true)
    axios.get(`https://newsapi.org/v2/everything?q=nigeria&apiKey=f8fd61d8395e419da31226ff9dc65845&pageSize=6&page=${page}`)
      .then(res => {
        setArticles(res.data.articles)
        setLoaded(false)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  
  return (
    <section>
      <Navbar/>
      <Heading/>
      {loading === false && <Card articles={articles}/>}
      {loading && <img src={loadingImage} alt='image' className='w-16 h-16 mx-auto'/>}
      <div className='flex justify-end mr-8 mt-16 mb-4' >
        <Pagination setPage={setPage} page={page}/>
      </div>
    </section>
  );
}

export default App;
