import { useSelector } from 'react-redux';
import { RootStateType } from '.';


export function useCurrentPage() {
  return useSelector((store: RootStateType) => store.currentPage.value);
}
