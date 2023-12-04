import logo from "./logo.svg";
import "./App.css";

import * as Sentry from "@sentry/react";

const release = "sentry-react@1.0.0";

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = `ERROR: ${message} from ${release}`;
  }
}

Sentry.init({
  dsn: "https://b2324bc012cc51f4f05ca25d5bbe2cf7@o4506313834692608.ingest.sentry.io/4506336320880640",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],

  release,
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  tracesSampleRate: 1.0,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

function App() {
  const handleClick = (message) => {
    throw new ValidationError(message);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={() => {
            handleClick("Houston we have a 2nd error");
          }}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default Sentry.withProfiler(App);
