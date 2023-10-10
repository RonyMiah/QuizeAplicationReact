import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Answer from '../components/Answer';
import MiniPlayer from '../components/MiniPlayer';
import ProgressBar from '../components/ProgressBar';
import { useAuth } from '../hooks/Context/AuthContext';
import UseQuize from '../hooks/Context/UseQuize';

const initialstate = null;
const reducer = (state, action) => {
  switch (action.type) {
    case 'questions':
      action.value.map((question) => {
        question.options.map((option) => {
          option.checked = false;
        });
      });
      return action.value;
    case 'answer':
      // eslint-disable-next-line no-case-declarations
      const questions = _.cloneDeep(state);
      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};
function Quize() {
  const { id } = useParams();
  const { loading, error, quize } = UseQuize(id);
  const [currentQuize, setCurrentQuize] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialstate);
  const { currentUser } = useAuth();
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();

  console.log(qna);

  useEffect(() => {
    dispatch({
      type: 'questions',
      value: quize,
    });
  }, [quize]);

  const handleAnswerChange = (e, index) => {
    dispatch({
      type: 'answer',
      questionID: currentQuize,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  //handle when user clicks the next button and get the next quisten
  const handleNextQuistion = () => {
    if (currentQuize <= quize.length) {
      setCurrentQuize((prevQuize) => prevQuize + 1);
    }
  };

  //handle when user click the previes button and get the previous quisten
  const handlePrevQuistion = () => {
    if (currentQuize >= 1 && currentQuize <= quize.length) {
      setCurrentQuize((prevQuize) => prevQuize - 1);
    }
  };

  //handle submit quize

  const submit = async () => {
    const { uid } = currentUser;

    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}`);
    await set(resultRef, {
      [id]: qna,
    });

    //navigate
    navigate(`/result/${id}`, {
      state: {
        qna,
      },
    });
  };

  //handle progressber
  const progress =
    quize.length > 0 ? ((currentQuize + 1) / quize.length) * 100 : 0;

  return (
    <>
      {loading && <div> Loading .. </div>}
      {error && <div> There was an Error ! </div>}
      {!loading && !error && qna && qna.length > 0 && (
        <>
          <h1>{qna[currentQuize].title}</h1>
          <h4>Question can have multiple answers</h4>
          <Answer
            input={true}
            options={qna[currentQuize].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            next={handleNextQuistion}
            prev={handlePrevQuistion}
            progress={progress}
            submit={submit}
          />
          <MiniPlayer id={id} title={state} />
        </>
      )}
    </>
  );
}

export default Quize;
