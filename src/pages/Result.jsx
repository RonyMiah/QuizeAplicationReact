import _ from 'lodash';
import { useLocation, useParams } from 'react-router-dom';
import Analysis from '../components/Analysis';
import Summary from '../components/Summary';
import UseAnswer from '../hooks/Context/UseAnswer';

function Result() {
  const { state } = useLocation();
  const { qna } = state;
 
  
  const { id } = useParams();
  const { loading, error, answer } = UseAnswer(id);

  //calculate
  function calculate() {
    let score = 0;

    answer.map((question, index1) => {
      let currentIndex = [];
      let checkedIndex = [];
      question.options.map((option, index2) => {
        if (option.correct) {
          currentIndex.push(index2);
        }
        if (qna[index1].options[index2].checked) {
          checkedIndex.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(currentIndex, checkedIndex)) {
        score = score + 5;
      }
    });
    return score;
  }

  const userScore = calculate();

  return (
    <>
      {loading && <div> Loading ....</div>}
      {error && <div> There was an Error.</div>}
      {answer && answer.length > 0 && (
        <>
          <Summary score={userScore} noq={answer.length} />
          <Analysis answer={answer} />
        </>
      )}
    </>
  );
}

export default Result;
