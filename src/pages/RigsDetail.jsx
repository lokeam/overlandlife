import { useParams } from "react-router-dom";

export default function RigsDetail () {
  const params = useParams();
  console.log(params);

  return (
    <h1>Rigs Detail</h1>
  );
}