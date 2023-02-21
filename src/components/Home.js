import React from 'react';
import ListContainer from './ListContainer';

function Home({data, onSubmitRefresh, handleEdit, handleDelete, handleComicDelete}) {

    const styles = {
        background: "#02577a",
        color: "white"
      };

  return (
    <div className="App" style={styles}>
        <ListContainer 
          list={data} 
          onSubmitRefresh={onSubmitRefresh} 
          handleEdit={handleEdit} 
          handleDelete={handleDelete} 
          handleComicDelete={handleComicDelete}/>
    </div>
  );
}

export default Home;