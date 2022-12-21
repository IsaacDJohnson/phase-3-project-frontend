import React, {useEffect, useState} from "react";
import EditReview from "./EditReview";



function Review({item, onSubmitRefresh}){ 

    const {body, rating} = item
    const [reviewBody, setReviewBody] = useState(body)
    const [reviewRating, setReviewRating] = useState(rating)
    const [editForm, setEditForm] = useState(false)
    //DELETE request 

    const handleDelete = (e) => {
      e.preventDefault()
        fetch(`http://localhost:9090/reviews/${item.id}`, {
            method: "DELETE",
        })
        .then(( r )=> r.json())
        .then((deletedReview)=> onSubmitRefresh(deletedReview));
    }


    //PATCH request

    const handleChangeBod = (e) => {
        setReviewBody(e.target.value)
    }

    const handleChangeRate = (e) => {
        setReviewRating(e.target.value)
    }

    const handlePatch = (e) => {
      e.preventDefault()
      fetch(`http://localhost:9090/reviews/${item.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: item.id,
          body: reviewBody,
          rating: reviewRating,
          comic_id: item.comic_id
        }),
      })
      .then((r) => r.json())
      .then((updatedReview) => onSubmitRefresh(updatedReview));
      setEditForm("")
    }


    //RENDER

    return (
        <div className="reviewStyle">
            <ul>
                <p>{item.body}</p>
                <h4>{item.rating} out of 5</h4>
                <button className="button" onClick={() => editForm ? setEditForm(false) : setEditForm(true)}>--Edit--</button>
                <button onClick={handleDelete} className="button">--Delete-</button>
                {editForm ? <EditReview handleChangeBod={handleChangeBod} 
                            handleChangeRate={handleChangeRate} 
                            handleSubmit={handlePatch}
                            reviewBody={reviewBody}
                            reviewRating={reviewRating}
                            />: []} 
            </ul>
        </div>
    )
}

export default Review;