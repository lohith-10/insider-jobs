// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";




Sentry.init({
  dsn: "https://c2d455b5b1fce90f98d53b5158745462@o4509574588727296.ingest.us.sentry.io/4509574593839104",
  

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  //
  // tracesSampleRate: 1.0,
});
Sentry.profiler.startProfiler();