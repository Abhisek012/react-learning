import React from 'react'
import { Bookmark } from "lucide-react";

const Card = (props) => {
    console.log(props.company);
    
  return (
    <div>
         <div className="card">

        <div className="top">
          <img
            src="https://images.seeklogo.com/logo-png/28/1/amazon-logo-png_seeklogo-286206.png"
            alt="amazon"
          />

          <button className="save-btn">
            Save <Bookmark size={12} />
          </button>
        </div>

        <div className="center">
          <h4>
            {props.company} <span> {props.posted} </span>
          </h4>

          <h2>{props.position}</h2>

          <div className="tags">
            <span>{props.tag1}</span>
            <span>{props.tag2}</span>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
          </div>

          <button className="apply-btn">Apply Now</button>
        </div>

      </div>
    </div>
  )
}

export default Card