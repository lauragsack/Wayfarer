import React from 'react';

function DeletePostForm(props){
  return(
    <p className="ml-5 mt-3">Are you sure you want to delete
    <strong>{`"${props.post.title}"`}?</strong>
    </p>
  )
}

export default DeletePostForm;
