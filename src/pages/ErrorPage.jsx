import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return <h1>Something went wrong, You have lost your way</h1>;
}
