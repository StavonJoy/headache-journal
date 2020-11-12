import React from 'react';
import './HeadacheCard.css'
import { Link } from 'react-router-dom';
import moment from 'moment';

function HeadacheCard({ user, headache, handleDeleteHeadache }) {

  return (
    <>
    {/* {user._id === headache.owner._id && */}
       <div className="card">
        <div className="card-content">
          <h4><span className="card-title activator grey-text text-darken-4">{headache.title}</span></h4>
          <p className="date">{moment(headache.createdAt).format("L")}</p>
          <p className="length">Length:  {headache.headacheLength}</p>
          <p>Pain scale: {parseInt(headache.painLevel)}</p>
          <p>Medications used: {headache.medsUsed.join(', ')}</p>
          <hr />
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
      {/* } */}
    </>
  )
};

export default HeadacheCard;