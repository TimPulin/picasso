import { Location } from 'react-router-dom';

export enum LocationStateKey  {
  POST = 'post',
  POST_ID = 'post_id',
}

export interface LocationState extends Location{
  state: {
    key: LocationStateKey,
    payload: any
  }
}

