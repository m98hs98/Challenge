import { Solution } from "./Solution";
import { Description } from "./Description";
import { Card, Divider } from "react-daisyui";

export const FizzBuzz = () => {
  return (
    <div className="flex w-full">
      <Card side="lg" className="flex-1 bg-base-300">
        <Card.Body>
          <Description />
        </Card.Body>
      </Card>
      <Divider horizontal />
      <Card side="lg" className="flex-1 bg-base-300">
        <Card.Body>
          <Solution />
        </Card.Body>
      </Card>
    </div>
  );
};
