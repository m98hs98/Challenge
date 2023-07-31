export const Description = () => {
  return (
    <article className="prose lg:prose-l">
      <h1>Challenge 1: FizzBuzz</h1>
      <p>
        This exercise is testing your logic and general understanding of React.
      </p>
      <ul>
        <li>Render integers from 1 to 100</li>
        <li>
          If an integer is is divisible by the number from the first input,
          render <span className="text-primary">Fizz</span>
        </li>
        <li>
          If an integer is divisible by the number from the second input, render{" "}
          <span className="text-secondary">Buzz</span>
        </li>
        <li>
          If an integer is divisible by both numbers, render{" "}
          <span className="text-accent">FizzBuzz</span>
        </li>
      </ul>
      <p>
        Make sure that the rendered result is updated when the user input
        changes. <br />
        If you have time, apply the same styling to the printed words as above.
      </p>
    </article>
  );
};
