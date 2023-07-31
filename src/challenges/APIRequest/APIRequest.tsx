import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Solution } from "./Solution";
import { Description } from "./Description";
import { Card, Divider } from "react-daisyui";

const queryClient = new QueryClient();

export const APIRequest = () => {
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
          <QueryClientProvider client={queryClient}>
            <Solution />
          </QueryClientProvider>
        </Card.Body>
      </Card>
    </div>
  );
};
