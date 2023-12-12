import { useState } from "react";

const Accordion = ({ question }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion">
      <div className="accordion-title">
        <h1>{question.title}</h1>
        <button onClick={() => setShow(!show)} className="accordion-btn">
          {!show ? "+" : "-"}
        </button>
      </div>
      {show && <p>{question.info}</p>}
    </div>
  );
};
export default Accordion;
