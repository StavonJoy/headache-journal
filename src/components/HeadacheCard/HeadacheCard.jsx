import React from 'react';
import './HeadacheCard.css'
import { Link } from 'react-router-dom';
import moment from 'moment';
import PainLevel0 from '../PainLevelEmojis/PainLevel0'
import PainLevel1 from '../PainLevelEmojis/PainLevel1'
import PainLevel2 from '../PainLevelEmojis/PainLevel2'
import PainLevel3 from '../PainLevelEmojis/PainLevel3'
import PainLevel4 from '../PainLevelEmojis/PainLevel4'
import PainLevel5 from '../PainLevelEmojis/PainLevel5'
import PainLevel6 from '../PainLevelEmojis/PainLevel6'
import PainLevel7 from '../PainLevelEmojis/PainLevel7'
import PainLevel8 from '../PainLevelEmojis/PainLevel8'
import PainLevel9 from '../PainLevelEmojis/PainLevel9'
import PainLevel10 from '../PainLevelEmojis/PainLevel10'

function HeadacheCard({ user, headache, handleDeleteHeadache }) {

  return (
    <>
    {/* {user._id === headache.owner._id && */}
       <div className="card">
        <div className="card-content">
          <h4><span className="card-title activator grey-text text-darken-4">{headache.title}</span></h4>
          <p className="date"> {moment(headache.createdAt).format("M/D/YYYY")}</p>
          { headache.headacheLength ? 
            <p className="length"><span className="bold">Length:</span> {headache.headacheLength} hours</p>
          : <></>}
          <p className="pain"><span className="bold">Pain level:</span> {parseInt(headache.painLevel)} 
          { headache.painLevel === 0 ?
          <PainLevel0/>
          : headache.painLevel === 1 ? 
          <PainLevel1/>
          : headache.painLevel === 2 ? 
          <PainLevel2/>
          : headache.painLevel === 3 ? 
          <PainLevel3/>
          : headache.painLevel === 4 ? 
          <PainLevel4/>
          : headache.painLevel === 5 ? 
          <PainLevel5/>
          : headache.painLevel === 6 ? 
          <PainLevel6/>
          : headache.painLevel === 7 ? 
          <PainLevel7/>
          : headache.painLevel === 8 ? 
          <PainLevel8/>
          : headache.painLevel === 9 ? 
          <PainLevel9/>
          : headache.painLevel === 10 ? 
          <PainLevel10/>
          :
           <p>n/a</p>} </p>
          { headache.medsUsed[0] === "" ? 
          <></>
          :
        <p><span className="bold">Medications used:</span> {headache.medsUsed.join(', ')}</p>
        }
          <hr />
          <p className="desc">{headache.description}</p>
          <p className="time"><span className="bold">Time:</span> {moment(headache.createdAt).format("h:mma")}</p>
        </div> 
        <button type="submit" className="btn delete" onClick={() => handleDeleteHeadache(headache._id)}>    
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </button>  
        <Link 
          className="btn yellow black-text"
            to={{
              pathname: '/edit',
              state: {headache}
            }}
        >
          <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-pencil-square edit" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
          </svg>
        </Link>
      </div>
      {/* } */}
    </>
  )
};

export default HeadacheCard;