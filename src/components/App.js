import React, { useEffect, useState} from 'react';
import Home from './Home'
import Header from './Header'
import NewReview from './NewReview';
import NavBar from './NavBar';
import { Route, Router, Routes } from "react-router-dom"


function App() {
      
  const [comic, setComic] = useState("")
  const [review, setReview] = useState("")
  const [rating, setRating] = useState("")
  const [comic_id, setComicId] = useState("")
  const [data, setData] = useState([])
  
  //get data from server

  
  useEffect(()=>{
      fetch("http://localhost:9292/comics")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
 
  const handleComicChange = (e) => {
    setComic(e.target.value)
    setComicId(e.target.value)
  } 

  //change handlers for NewReview component

  const handleChangeRev = (e) => {
    setReview(e.target.value)
  }

  const handleChangeRate = (e) => {
    setRating(e.target.value)
  }

  //DELETE request refresh

  const onSubmitRefresh = (submission) => {
    const updatedData = data.map((comic)=>{
      if (submission.comic_id === comic.id) {
        return {
          ...comic, 
          reviews: comic.reviews.map((review)=>{
            if (review.id === submission.id) {
              return submission
            }
            else {
              return review
            }
          })
        }
      } 
      else {
        return comic
      }
    })
    setData(updatedData)
  }


  const handleComicDelete = (submission) => {
    const updatedData = data.filter((comic) => submission.id !== comic.id)
    setData(updatedData)
  }

  const handleDelete = (submission) => {
    const updatedData = data.map((comic)=>{
      if (submission.comic_id === comic.id) {
        return {
          ...comic, 
          reviews: comic.reviews.filter((review) => submission.id !== review.id)
        }
      } 
      else {
        return comic
      }
    })
    setData(updatedData)
  }

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home 
          data={data} 
          onSubmitRefresh={onSubmitRefresh}
          handleDelete={handleDelete} 
          handleComicDelete={handleComicDelete}
        />}/>
        <Route exact path="/submissionForm" element ={<NewReview 
          data={data} 
          handleComicChange={handleComicChange}
          handleChangeRev={handleChangeRev}
          handleChangeRate={handleChangeRate}
          onSubmitRefresh={onSubmitRefresh}
          comic={comic}
          review={review}
          rating={rating}
          comic_id={comic_id}
        />}/>
      </Routes>
    </div>
  );
}

export default App;