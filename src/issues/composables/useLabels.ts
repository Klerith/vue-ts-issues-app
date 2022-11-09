import { useQuery } from '@tanstack/vue-query'
import { githubApi } from 'src/api/githubApi';
import { Label } from '../interfaces/label';

const getLabels = async():Promise<Label[]> => {

  const { data } = await githubApi<Label[]>('/labels?per_page=100');
  return data;
}


const useLabels = () => {

    const labelsQuery = useQuery(
      ['labels'],
      getLabels,
      {
        staleTime: 1000 * 60 * 60, // una hora
      }
    );

    return {
      labelsQuery,
    }
}

export default useLabels;

