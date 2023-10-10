import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import UseVideoList from '../hooks/Context/UseVideoList';
import Video from './Video';

function Videos() {
  const [page, setPage] = useState(1);
  const { loading, videos, error, hasMore } = UseVideoList(page);
  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          hasMore={hasMore}
          next={() => setPage(page + 8)}
          loader={
            <div>
              <h2 style={{ display: 'block', margin: 'auto' }}>... Loading </h2>
            </div>
          }
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link
                to={`/quize/${video.youtubeID}`}
                state={video.title}
                key={Math.random(video.youtubeID)}
              >
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video
                title={video.title}
                key={Math.random(video.youtubeID)}
                id={video.youtubeID}
                noq={video.noq}
              />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div>No Data Found</div>}
      {error && <div>There was an error </div>}
      {loading && <div>Loading ...</div>}
    </div>
  );
}

export default Videos;
