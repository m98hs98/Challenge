import { Link } from "react-daisyui";

export const Description = () => {
  return (
    <article className="prose lg:prose-l">
      <h1>Challenge 2: API request</h1>
      <p>
        This exercise is testing if you are familiar with REST APIs and
        integrating with them in React applications.
      </p>
      <p>
        Using{" "}
        <Link
          href="https://pokeapi.co/docs/v2#pokemon-section"
          target="_blank"
          color="accent"
        >
          this public API
        </Link>
        :
      </p>
      <ul>
        <li>make a request to retrieve 20 pokemon names</li>
        <li>sort them alphabetically</li>
        <li>and display each name on a new line on right hand side</li>
      </ul>

      <p>
        This project uses{" "}
        <Link
          href="https://axios-http.com/docs/intro"
          target="_blank"
          color="accent"
        >
          Axios
        </Link>{" "}
        as the HTTP Client and{" "}
        <Link
          href="https://tanstack.com/query/v4/docs/react/reference/useQuery"
          target="_blank"
          color="accent"
        >
          TanStack Query
        </Link>{" "}
        as the state management tool, but you are free to use any libraries you
        are familiar with to perform the task.
      </p>
    </article>
  );
};
