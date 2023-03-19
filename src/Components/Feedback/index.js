import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import { FaInfoCircle } from "react-icons/fa";
import { BsEmojiSmile, BsEmojiSmileUpsideDown } from "react-icons/bs"
import Events from "../../Pages/events";
const Feedback = () => {

  return (
    <div className="FeedbackDiv">
      <div className="outermostdiv">
        <div className="flexsetup">
        <span className="heading">Send feedback to microsoft </span><ImCross color="lightgrey" />
        </div>
        <div className="innerdiv">
          <span  className="fontweight">Thank you for taking the time to give us feedback</span>
          <div className="supportbox elementmargin">
            <FaInfoCircle color="blue" fontSize={18} />
            <span className="custommargin">If you need help,please contact support</span>
          </div>
     
          <hr></hr>
          <span className="fontweight elementmargin">*Are you satisfied with your experience?</span>
          <div className="elementmargin flexx">
            <BsEmojiSmile className="smiley" fontSize={30}/> <BsEmojiSmileUpsideDown fontSize={30} className="smiley"/>
          </div>
          <textarea className="elementmargin" placeholder="Tell us about your experience......"  rows={11}></textarea>
          <hr></hr>
          <div className="flexx elementmargin">
            <input type="checkbox" id="check" name="check" value=""  />
            <label htmlFor="check"  className="custommargin fontweight">Microsoft can email you about your feedback</label>
          </div>
          {/* <Routes>
            <Route path='/events' element={<Events/>} />
            </Routes> */}

          <div className="flexx elementmargin">
            <button className="custombutton">Submit feedback</button>
            <button className="custombutton">Cancel</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Feedback;