# my-app

Abdul Alim Rakib's personal portfolio (`app/page.tsx`) — an AI/ML engineer
and CSE graduate's research, projects, experience, and contact info — built
on a production-oriented Next.js (App Router) foundation with TypeScript,
PostgreSQL, and Prisma, so the same project can grow into a SaaS app,
dashboard, or any other CRUD/API-driven product with authentication.

Portfolio content is data-driven: everything shown on the page lives in
[`data/*.ts`](./data) (`profile.ts`, `skills.ts`, `research.ts`,
`projects.ts`, `experience.ts`, `education.ts`, `honors.ts`), separate from
the presentational components in [`components/`](./components). Update the
data files to change what the site says; the components render whatever is
there.

## Stack

- **Framework:** Next.js 16 (App Router, Route Handlers) + React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL (via Docker) + Prisma ORM
- **Validation:** Zod (environment variables, API input)
- **Auth:** Better Auth (configured, not wired to any UI yet)
- **Testing:** Vitest + React Testing Library (unit/component), Playwright (e2e)
- **Tooling:** pnpm, ESLint, Prettier, GitHub Actions CI

## Prerequisites

- **Node.js 24+** (this project was built and tested on 24.18.0)
- **pnpm** — enabled via Node's built-in [Corepack](https://nodejs.org/api/corepack.html):
  ```bash
  corepack enable
  ```
  pnpm's exact version is pinned in `package.json`'s `packageManager` field,
  so Corepack will fetch the right version automatically.
- **Docker + Docker Compose** — for running PostgreSQL locally. Next.js
  itself runs directly on the host (not in Docker) for fast hot reload.

## Getting started

```bash
# 1. Install dependencies
pnpm install

# 2. Copy the environment template and fill in real values
cp .env.example .env.local
# (defaults are usable as-is for local dev; only change them if you know why)

# 3. Start PostgreSQL
docker compose --env-file .env.local up -d

# 4. Apply database migrations
pnpm db:migrate

# 5. Start the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Check
[http://localhost:3000/api/health](http://localhost:3000/api/health) to
confirm the app can reach PostgreSQL.

## Environment variables

Configuration lives in two files:

- **`.env.example`** — committed template with placeholder values. Documents
  every variable the app needs.
- **`.env.local`** — your real local values. **Gitignored, never commit
  this.**

In CI/production, variables are provided by the platform/deploy environment
instead of a file.

All server-side environment variables are read and validated in one place:
[`server/env.ts`](./server/env.ts), using Zod. Import `env` from there
instead of reading `process.env` directly — this fails fast with a clear
error if something required is missing or malformed, rather than surfacing
as a confusing error later.

| Variable                    | Purpose                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| `DATABASE_URL`              | PostgreSQL connection string, used by Prisma                                             |
| `BETTER_AUTH_SECRET`        | Session/token signing secret (`openssl rand -base64 32`)                                 |
| `BETTER_AUTH_URL`           | Base URL of the app (e.g. `http://localhost:3000`)                                       |
| `POSTGRES_USER/PASSWORD/DB` | Used by `compose.yaml` to initialize the Postgres container, and to build `DATABASE_URL` |

## PostgreSQL (Docker)

PostgreSQL runs in Docker via `compose.yaml`; it is **not** installed on the
host. Compose only auto-loads a plain `.env` file, which this project
intentionally doesn't use — so always pass `--env-file .env.local`:

```bash
docker compose --env-file .env.local up -d       # start (background)
docker compose --env-file .env.local ps           # status / health
docker compose --env-file .env.local logs -f      # tail logs
docker compose --env-file .env.local down         # stop, KEEP data
docker compose --env-file .env.local down -v      # stop, DELETE all data (destructive!)
```

Data persists in a named Docker volume (`my-app_postgres_data`) across
`docker compose down`. Only `down -v` destroys it — don't run that unless
you mean to wipe your local dev database.

## Prisma

The schema is in [`prisma/schema.prisma`](./prisma/schema.prisma). The
connection string is configured in [`prisma.config.ts`](./prisma.config.ts)
(Prisma 7 no longer accepts a `url` inside `schema.prisma` itself), which
reads `DATABASE_URL` from `.env.local`.

```bash
pnpm db:generate   # regenerate the Prisma Client (also runs on install)
pnpm db:migrate    # create + apply a migration in development
pnpm db:push       # push schema changes without a migration (prototyping only)
pnpm db:studio     # open Prisma Studio (visual DB browser)
```

The Prisma Client is a singleton in [`server/db.ts`](./server/db.ts),
cached across `next dev` hot reloads to avoid exhausting the connection
pool.

The `User`/`Session`/`Account`/`Verification` models exist to back Better
Auth. If you change the auth configuration in `server/auth.ts` in a way that
needs new fields, regenerate the schema rather than hand-editing those
models:

```bash
pnpm dlx @better-auth/cli generate --config server/auth.ts --output prisma/schema.prisma
```

## Authentication

[Better Auth](https://www.better-auth.com) is configured in
[`server/auth.ts`](./server/auth.ts) and exposed at `/api/auth/[...all]`
([`app/api/auth/[...all]/route.ts`](./app/api/auth/[...all]/route.ts)).
Email/password auth is enabled at the config level. No login/registration UI
exists yet — add it (and any OAuth providers, email verification, etc.) as
the product needs it; the plumbing is already in place.

## API

HTTP APIs are plain [Next.js Route Handlers](https://nextjs.org/docs/app/api-reference/file-conventions/route)
under `app/api/**/route.ts` (REST, not GraphQL/tRPC). Validate any request
input with Zod. See [`app/api/health/route.ts`](./app/api/health/route.ts)
for a minimal example.

## Project structure

```
app/                    Routes, layouts, and Route Handlers (App Router)
  page.tsx               The portfolio home page
  layout.tsx              Root layout + SEO metadata
  icon.tsx                 Generated favicon (next/og)
  robots.ts, sitemap.ts     Generated from server/env.ts's BETTER_AUTH_URL
  api/
    auth/[...all]/       Better Auth's catch-all handler
    health/               DB connectivity check
components/             Presentational React components for the portfolio
                        (Navbar, Hero, section components, cards, etc.)
data/                   Portfolio content, separate from presentation —
                        edit these to change what the site says
  profile.ts             Identity, contact links, hero/about copy
  skills.ts               Grouped technical skills
  research.ts             Research & academic projects
  projects.ts             Software engineering projects
  experience.ts            Teaching/mentorship experience
  education.ts             Degrees
  honors.ts                Awards & scholarships
server/                 Server-only modules (never import these from a
                        Client Component — server/env.ts, db.ts, and auth.ts
                        all import the `server-only` package to enforce this
                        at build time)
  env.ts                 Zod-validated environment config
  db.ts                   Prisma Client singleton
  auth.ts                 Better Auth server instance
prisma/
  schema.prisma           Database schema
  migrations/              Migration history (committed)
tests/
  unit/                   Vitest + React Testing Library
  e2e/                    Playwright
public/                 Static assets, including the downloadable resume PDF
                        and profile photo
```

`lib/` isn't created yet — add it when there's real content for it (shared
client+server utilities).

## Development commands

```bash
pnpm dev              # start dev server (Turbopack)
pnpm build            # production build
pnpm start            # run the production build
pnpm lint             # ESLint
pnpm typecheck        # tsc --noEmit
pnpm format           # Prettier — write
pnpm format:check     # Prettier — check only
```

## Testing

```bash
pnpm test             # unit/component tests (Vitest), single run
pnpm test:watch       # unit/component tests, watch mode
pnpm test:e2e         # Playwright, builds and runs the app, then tests it
pnpm test:e2e:ui      # Playwright with its interactive UI
```

- **Vitest** covers pure logic and integration-style unit tests
  (`tests/unit/`).
- **React Testing Library** (via Vitest) covers component rendering
  behavior.
- **Playwright** drives a real browser against a production build
  (`tests/e2e/`) — it needs PostgreSQL running (`docker compose up -d`) since
  it exercises `/api/health`.

## CI

[`.github/workflows/ci.yml`](./.github/workflows/ci.yml) runs on every push
to `main` and every pull request: install → lint → typecheck → unit tests →
build. It does not run e2e tests, deploy, or need a live database (see the
workflow file for why `next build` doesn't need one).

## Security notes

- Secrets live only in `.env.local` (gitignored) locally, and in the
  deploy platform's env var store in production — never in git.
- `server/env.ts`, `server/db.ts`, and `server/auth.ts` are marked
  `server-only`; importing them from a Client Component fails the build.
- Baseline security headers (`X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`) are set in `next.config.ts`. Add a
  `Content-Security-Policy` there once the app's real script/style/image
  origins are known.
- Run `pnpm audit` periodically; the current lockfile has no known
  vulnerabilities (see `pnpm-workspace.yaml` for one transitive override
  that was needed).
- Serve production over HTTPS and set `BETTER_AUTH_URL` accordingly.

## Not included (yet)

Redis, background job queues, Kafka/RabbitMQ, Elasticsearch, Kubernetes,
Terraform, Nginx, observability stacks, object storage, payments, transactional
email, and a CDN are all deliberately absent. Add any of these only when a
real product requirement calls for it.
