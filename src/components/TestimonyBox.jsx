import React from 'react'

function TestimonyBox(props) {
  return (
    <div className="test-pad">
        <h1>{props.title}</h1>
        <div><img src={props.image} alt="advisor_pfp" class="person_img"/></div>
        <div>
            {props.text}
        </div>
    </div>
  )
}

export default TestimonyBox