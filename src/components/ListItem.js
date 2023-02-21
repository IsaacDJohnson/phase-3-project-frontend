import React from "react";
import Review from "./Review";

function ListItem({ item, onSubmitRefresh, handleEdit, handleDelete, handleComicDelete}){

    const {name, reviews} = item

    const handleClickDelete = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/comics/${item.id}`, {
            method: "DELETE",
        })
        .then(( r )=> r.json())
        .then((deletedComic)=> handleComicDelete(deletedComic));
    }

    return (
        <li className="card">
            <h1>Title: {name}</h1>
            <button onClick={handleClickDelete} className="button">Remove Comic</button>
            <ul>
                {reviews ? reviews.map((x)=>
                    <Review 
                        item={x}
                        key={x.id}
                        onSubmitRefresh={onSubmitRefresh}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />) : []}
            </ul>
        </li>
    )
} 


export default ListItem;