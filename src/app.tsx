import { Route, Router } from "@solidjs/router";
import { Suspense } from "solid-js";
import { Index } from "./routes/routes.tsx";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <Route path="/" component={Index} />
    </Router>
  );
}
