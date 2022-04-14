import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR("/api/staticdata", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>My Phone from file</h1>
      <ul>
        <li>Brand: {data.record.brand}</li>
        <li>Model: {data.record.model}</li>
      </ul>
    </div>
  );
}
