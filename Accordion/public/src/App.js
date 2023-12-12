import "./styles.css";
import questions from "./data";
import Accordion from "./Accordion";
export default function App() {
  return (
    <>
      {questions &&
        questions.map((question) => {
          return <Accordion key={question.id} question={question} />;
        })}
    </>
  );
}
