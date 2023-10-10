import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from 'firebase/database';
import { useEffect, useState } from 'react';

function UseVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const db = getDatabase();
      const videoRef = ref(db, 'videos');
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt('' + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLoading(true);
        //request firebase database
        const snapshot = await get(videoQuery);

        setLoading(false);

        if (snapshot.exists()) {
          setVideos((prevVideos) => {
            //make object to array
            // console.log(prevVideos);
            return [...prevVideos, ...Object.values(snapshot.val())];
          });
        } else {
          sethasMore(false);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };

    fetchVideos();
    // setTimeout(() => {
    //   fetchVideos();
    // }, 2000);
  }, [page]);
  return {
    loading,
    videos,
    error,
    hasMore,
  };
}

export default UseVideoList;
