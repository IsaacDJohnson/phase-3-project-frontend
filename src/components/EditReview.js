import React from "react";

function EditReview({handleChangeBod, handleChangeRate, handleSubmit, reviewBody, reviewRating}){

    return <div>
        <form onSubmit={handleSubmit}>
            <h3>Edit your review:</h3>
            <input type="text" value={reviewBody} onChange={handleChangeBod}></input>
            <h3>Edit your rating</h3>
            <input type="text" value={reviewRating} onChange={handleChangeRate}></input><br/>
            <button type="submit" className="button">Submit</button>
        </form>
    </div>
}

export default EditReview; 