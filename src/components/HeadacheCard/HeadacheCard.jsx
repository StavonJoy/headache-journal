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
          <p className="date"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar-event" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
            </svg> {moment(headache.createdAt).format("M/D/YYYY - h:mma")}</p>
          <p className="length"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-alarm" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
            </svg> {headache.headacheLength} hours</p>
          <p className="pain">Pain level: {parseInt(headache.painLevel)} 
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
          <p><svg width="1em" height="1em" viewBox="0 0 16 16" classNamne="bi bi-shield-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M5.443 1.991a60.17 60.17 0 0 0-2.725.802.454.454 0 0 0-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 0 0 8 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 0 0 2.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 0 0-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 0 1 2.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 0 1-2.418 2.3 6.942 6.942 0 0 1-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 0 1-1.007-.586 11.192 11.192 0 0 1-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 0 1 2.415 1.84a61.11 61.11 0 0 1 2.772-.815z"/>
            <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5z"/>
            </svg> {headache.medsUsed.join(', ')}</p>
          <hr />
          <p>{headache.description}</p>
         </div> 
         <button type="submit" className="btn red" onClick={() => handleDeleteHeadache(headache._id)}>    
          Delete 
        </button>  
        <Link 
          className="btn yellow black-text"
            to={{
              pathname: '/edit',
              state: {headache}
            }}
        >
          Edit 
        </Link>
      </div>
      {/* } */}
    </>
  )
};

export default HeadacheCard;