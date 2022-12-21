import React from "react";
import ListItem from "./ListItem";


function ListContainer({list, onSubmitRefresh, handleEdit}){
  
    return (
        <div>
            <h1 className="title">Comics List</h1>
            <ul className="cards">
                {list ? list.map((item)=> 
                    <ListItem 
                        item={item} 
                        key={item.id} 
                        onSubmitRefresh={onSubmitRefresh}
                        handleEdit={handleEdit}
                    />) : []}
            </ul>
        </div>
    )
}

export default ListContainer;