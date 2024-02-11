import { useEffect, useState } from 'react';

type LoaderSmallPropsType = {
  isLoading: boolean,
}

export default function LoaderSmall(props: LoaderSmallPropsType) {
  const {isLoading} = props;
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(isLoading);
  }, [isLoading]);

  if (!isShow) {
    return null;
  }

  return (
    <span className='loader'>Загрузка...</span>
  );
}
