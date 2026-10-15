import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
    
  return (
    <div className='parent'>
      <div className='upper'>

        <div className='child1'>
            <img src={props.brandLogo} alt="" />
          <button>Save <span className='bookmark'><Bookmark  size={19}/></span></button>
        </div>

        <div className='child2'>
          <div>
            <h2>{props.name} </h2><p>{props.datePosted}</p>
          </div>
          <div>
            <h1>{props.post}</h1>
          </div>
          <div className='btn1'>
            <button>{props.tag1}</button>
            <button>{props.tag2}</button>
          </div>
        </div>

      </div>


      <div>
        <div className='border'></div>
        <div className='lower'>
        
        <div>
          <h2>{props.pay}</h2>
          <p>{props.loc}</p>
        </div>
        <div className='applybtn'><button>Apply Now</button></div>
      </div>
    </div>
      </div>
  )
}

export default Card
