
import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';

// import { get, getDatabase, orderByKey, query, ref } from 'firebase/database';
// import { useEffect, useState } from 'react';
// function UseQuize(videoID) {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [quize, setQuize] = useState([]);
//   useEffect(() => {
//     async function fetchQuize() {
//       const db = getDatabase();
//       const quizeRef = ref(db, 'quiz/' + videoID + '/questions');
//       const quizeQurey = query(quizeRef, orderByKey());

//       try {
//         setLoading(true);
//         setError(false);
//         const snapshort = await get(quizeQurey);
//         setLoading(false);

//         if (snapshort.exists()) {
//           setQuize((prevQuize) => {
//             //object make an arry and hold into state
//             return [...prevQuize, ...Object.values(snapshort.val())];
//           });
//         } else {
//           //
//         }
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//         setError(true);
//       }
//     }
//     fetchQuize();
//   }, [videoID]);

//   return {
//     loading,
//     error,
//     quize,
//   };
// }

// export default UseQuize;

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
          setQuize((prevState) => {
            //right now prevState is {}Object make it []arry vanila javascript
            return [...prevState, ...Object.values(snapshort.val())];
          });
        } else {
          //
        }

        setLoading(false);
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
    quize,
  };
}

export default UseQuize;
