import React, {useState} from 'react';

function NewReview({comic_id, data, handleComicChange, handleChangeRev, handleChangeRate, review, rating, comic}){

    const [comicVal, setComicVal] = useState('Add A New Comic.')

    const handleSubmit = () => {
        fetch(`http://localhost:9090/reviews`, { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              body: review,
              rating: rating,
              comic_id: comic_id
            }),
        })
          .then((res) => res.json())
          .then((newReview) => console.log(newReview));
      }

      const newComic = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9090/comics`, { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              name: comicVal,
              reviews: []
            }),
        })
          .then((res) => res.json())
          .then((newReview) => console.log(newReview));
      }


    return (
        <div className='review'>
            <h1>Personal Profile</h1>
            <form onSubmit={newComic}>
                <input type="text" value={comicVal} onChange={(e)=>{setComicVal(e.target.value)}}></input>
                <button type="submit" className='button'>Add</button>
            </form>
            <form onSubmit={handleSubmit}>
                <select onChange={handleComicChange}>
                    <option value={comic}> -- Select a Comic to Review --</option> 
                    {data.map((item) => <option value={item.id} key={item.id}>{item.name} </option>)} 
                </select><br/>
                <p> Write your review here:</p>
                <input type="text" value={review} onChange={handleChangeRev}></input><br/>
                <p> Leave a rating between 1 and 5 here:</p>
                <input type="text" value={rating} onChange={handleChangeRate}></input><br/>
                <button type="submit" className='button'>submit</button>
            </form>
        </div>
    )
}

export default NewReview;