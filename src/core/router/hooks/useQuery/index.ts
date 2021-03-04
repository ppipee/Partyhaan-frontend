import qs from 'qs'
import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export default function useQuery<T = string>() {
  const { search } = useLocation()

  const query = useMemo(
    () =>
      qs.parse(search, { ignoreQueryPrefix: true }) as Record<
        string,
        T & string
      >,
    [search]
  )

  return query
}
