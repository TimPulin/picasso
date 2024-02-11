import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import CardPreview from '../components/card-preview.tsx/CardPreview';
import { useFetchPostListQuery } from '../connect/post-api';
import LoaderSmall from '../components/loader/LoaderSmall';
import { changeCurrentPageTitle } from '../store/slicers/current-page-title';

const loadingLimit = 5;

export default function HomePage() {
  const dispatch = useDispatch();

  const [loadingStartPosition, setLoadingStartPosition] = useState(0);
  const [startFetchDown, setStartFetchDown] =  useState(false);
  const [startFetchUp, setStartFetchUp] =  useState(false);

  const [isFetchIngDown, setIsFetchIngDown] =  useState(false);

  const {data, isFetching} = useFetchPostListQuery({start:loadingStartPosition, limit: loadingLimit});
  const screenHeightRef = useRef(0);

  useEffect(() => {
    dispatch(changeCurrentPageTitle({title: 'Главная'}));
  }, []);

  function onScrollPage(event: any) {
    if (event.target) {
      const {documentElement} = event.target;
      const scrollLength = documentElement.scrollHeight;
      const {scrollTop} = documentElement;

      if (screenHeightRef.current + scrollTop === scrollLength) {
        setStartFetchDown(true);
      }
      if (scrollTop < 50) {
        setStartFetchUp(true);
      }
    }
  }

  useEffect(() => {
    if (startFetchDown) {
      setLoadingStartPosition(() => loadingStartPosition + 1);
      setStartFetchDown(false);
      setStartFetchUp(false);
      setIsFetchIngDown(true);
    }
  }, [startFetchDown]);

  useEffect(() => {
    if (startFetchUp && loadingStartPosition > 0) {
      setLoadingStartPosition(() => loadingStartPosition - 1);
      setStartFetchUp(false);
      setStartFetchDown(false);
    }
  }, [startFetchUp]);

  useEffect(() => {
    if(!isFetching) {
      setIsFetchIngDown(false);
    }
  }, [isFetching]);

  useEffect(() => {
    screenHeightRef.current = document.documentElement.clientHeight;
  }, [document.documentElement.clientHeight]);

  useEffect(() => {
    document.addEventListener('scroll', onScrollPage);
    return () => {
      document.removeEventListener('scroll', onScrollPage);
    };
  }, []);

  return (
    <main className='main'>
      <div className="card-preview-list">
        {data && data.map((item) => (
          <div key={item.id} className='wrapper-card-preview'>
            <CardPreview cardData={item}/>
          </div>
        ))
        }
      </div>

      <div className='wrapper-loader'>
        <LoaderSmall isLoading={isFetchIngDown} />
      </div>
    </main>
  );
}

