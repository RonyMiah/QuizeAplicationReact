import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

function UseAnswer(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answer, setAnswer] = useState([]);

  // console.log(quizes);
  useEffect(() => {
    const fetchData = async () => {
      //database related work
      const db = getDatabase();
      const answerRef = ref(db, 'answers/' + videoID + '/questions');
      const answerQuery = query(answerRef, orderByKey());

      // handle error and loading and data by using try catch

      try {
        setError(false);
        setLoading(true);
        const snapshort = await get(answerQuery);
        setLoading(false);

        //snapshort is exsit or not check it
        if (snapshort.exists()) {
          setAnswer(() => {
            //right now prevState is {}Object make it []arry vanila javascript
            return [...Object.values(snapshort.val())];
          });
        } else {
          //
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [videoID]);
  return {
    loading,
    error,
    answer,
  };
}

export default UseAnswer;
