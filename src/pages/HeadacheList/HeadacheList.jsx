import React from 'react';
import HeadacheCard from '../../components/HeadacheCard/HeadacheCard';
import './HeadacheList.css';

const HeadacheList = (props) => {
  return (
    <>
    <h3>My Headaches</h3>
    {props.headaches.length > 0 ? 
       <div className='HeadacheList-grid'>
        {props.headaches.reverse().map(headache =>
          <HeadacheCard
            key={headache._id}
            headache={headache}
            handleDeleteHeadache={props.handleDeleteHeadache}
            // handleUpdateHeadache={props.handleUpdateHeadache}
            user={props.user}
          />
        )}
      </div>   
    :
    <div className="none">
      <p>No headaches yet</p>
    </div>
    }
    </>
  );
}

export default HeadacheList;