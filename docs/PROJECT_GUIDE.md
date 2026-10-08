# CGI project guide

CGI is an event-oriented React application built on a MERN monorepo foundation. This guide distinguishes the current event UI from the authentication backend that is actually mounted.

## Implemented scope

- Client routes for events, event details, profile/settings, and administrative event screens.
- Calendar, event cards, charts, and map-related UI components.
- Express authentication routes with shared validation contracts.
- A separate Next.js site workspace.

The central API router currently mounts authentication routes only. Event screens and shared event schemas do not establish a completed event-management API.

## Architecture and repository map

| Path | Purpose |
| --- | --- |
| [../app/client/src/App.tsx](<../app/client/src/App.tsx>) | Client route composition |
| [../app/server/src/index.ts](<../app/server/src/index.ts>) | Backend entry point |
| [../app/server/src/app.ts](<../app/server/src/app.ts>) | Express application and middleware |
| [../app/server/src/api/routes/index.ts](<../app/server/src/api/routes/index.ts>) | Mounted API features |
| [../packages/shared/src/schemas](<../packages/shared/src/schemas>) | Shared auth/user/event contracts |
| [../site](<../site>) | Separate Next.js site |
| [../tests](<../tests>) | Client, server, and shared tests |

The root uses pnpm workspaces and Turborepo. Client and server share schema/type definitions through the shared package. Start with the router before assuming a client screen has a corresponding backend feature.

## Local setup

Use a compatible Node.js runtime and the pinned pnpm 10.10.0 package manager. Start a local MongoDB instance.

```bash
git clone https://github.com/frontend-alex/CGI.git
cd CGI
pnpm install
cp app/client/.env.example app/client/.env
cp app/server/.env.example app/server/.env
cp site/.env.example site/.env
```

Run the copy commands only for a fresh checkout; they overwrite existing local files. The root cp:env script also copies examples over local configuration.

Set your own DB_LOCAL_URI, SESSION_SECRET, JWT_SECRET, JWT_REFRESH_SECRET, OTP_EMAIL, and OTP_EMAIL_PASSWORD in the server configuration. Review [the environment schema](../app/server/src/config/env.ts) for all required settings and optional OAuth providers. Configure client API URLs and CORS origins consistently.

Start the backend and client in separate terminals from the repository root:

```bash
pnpm --filter server dev
```

```bash
pnpm --filter client dev
```

The server defaults to port 3000 and client CORS defaults to localhost:5173. The optional Next.js site can also default to port 3000, so choose a distinct site port if running it alongside the API. The root pnpm dev command starts workspace dev tasks together; check for that collision first.

## API review

The app mounts versioned authentication routes beneath /api/v1/auth. The health handler in app/server/src/app.ts returns HTTP 201. Review the current auth route files for supported methods; the older boilerplate README is not an authoritative route inventory for this application.

## Verification

```bash
pnpm build
pnpm lint
pnpm exec vitest run
```

The root pnpm test command starts Vitest's interactive mode; the command above is the non-watch form. Tests exist for client rendering, server behavior, JWT helpers, and shared contracts. These checks and external-service flows were not executed for this documentation update.

## Known limits and next work

- Implement and verify event API routes before claiming end-to-end event creation or reservation behavior.
- Review test assumptions and database/email requirements before running the whole suite.
- Configure OAuth callbacks and email delivery with your own development accounts.
- Evaluate deployment, authorization, and observability requirements separately from the boilerplate's production-ready wording.

## Review sequence

Read the client route tree, shared event schema, backend router, and tests together to see where UI scope currently exceeds API scope.
