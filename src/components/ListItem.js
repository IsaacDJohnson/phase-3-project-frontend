import React from "react";
import Review from "./Review";

function ListItem({ item, onSubmitRefresh, handleEdit}){

    const {name, reviews} = item

    const handleComicDelete = () => {
        fetch(`http://localhost:9090/comics/${item.id}`, {
            method: "DELETE",
        })
        .then(( r )=> r.json())
        .then((deletedReview)=> onSubmitRefresh(deletedReview));
    }


    return (
        <li className="card">
            <h1>Title: {name}</h1>
            <button onClick={handleComicDelete} className="button">Remove Comic</button>
            <ul>
                {reviews ? reviews.map((x)=>
                    <Review 
                        item={x}
                        key={x.id}
                        onSubmitRefresh={onSubmitRefresh}
                        handleEdit={handleEdit}
                    />) : []}
            </ul>
        </li>
    )
} 


export default ListItem;