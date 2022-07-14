export const fetcher = (...args) => fetch(...args).then((res) => res.json());
const { data, error } = useSWR("/api/user", fetcher);
