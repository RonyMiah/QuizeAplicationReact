import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

function UseQuize(videoID) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quize, setQuize] = useState([]);

  // console.log(quizes);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const quizeRef = ref(db, 'quiz/' + videoID + '/questions');
      const quizeQuery = query(quizeRef, orderByKey());

      // handle error and loading and data by using try catch
      try {
        setError(false);
        setLoading(true);
        const snapshort = await get(quizeQuery);
        setLoading(false);

        //snapshort is exsit or not check it
        if (snapshort.exists()) {
          console.log(snapshort.val());
          setQuize(() => {
            //right now prevState is {}Object make it []arry vanila javascript
            return [...Object.values(snapshort.val())];
          });
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [videoID]);
  console.log(quize);
  return {
    loading,
    error,
    quize,
  };
}

export default UseQuize;
