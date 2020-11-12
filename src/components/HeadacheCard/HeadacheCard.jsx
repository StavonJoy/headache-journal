import React from 'react';
import { Link } from 'react-router-dom';

function HeadacheCard({ user, headache, handleDeleteHeadache }) {
  return (
    <>
    {/* {user && (user._id === headache.owner._id) && */}
       <div className="card">
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">{headache.title}</span>
          <h6>Pain level: {headache.painLevel}</h6>
          <div>Medications used: {headache.medsUsed.join(', ')}</div>
          <div>Length:  {headache.headacheLength}</div>
          <p>{headache.description}</p>
         </div> 
         <button type="submit" className="btn red" onClick={() => handleDeleteHeadache(headache._id)}>    
          Delete 
        </button>  
        {/* <Link 
          className="btn yellow black-text"
            to={{
              pathname: '/edit',
              state: {headache}
            }}
        ><i className="material-icons left">build</i>
          Edit Headache
        </Link> */}
      </div>
    </>
  )
};

export default HeadacheCard;