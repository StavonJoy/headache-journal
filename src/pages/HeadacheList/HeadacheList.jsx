import React from 'react';
import HeadacheCard from '../../components/HeadacheCard/HeadacheCard';
import './HeadacheList.css';

const HeadacheList = (props) => {
  return (
    <>
    {props.headaches? 
       <div className='HeadacheList-grid'>
        {props.headaches.map(headache =>
          <HeadacheCard
            key={headache._id}
            headache={headache}
            handleDeleteHeadache={props.handleDeleteHeadache}
            user={props.user}
          />
        )}
      </div>   
    :
    <div>
      <p>No headaches yet</p>
    </div>
    }
    </>
  );
}

export default HeadacheList;