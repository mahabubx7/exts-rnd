# exTS - friendly node.js backend framework.

> This a express.js modified backend framework. It's written in TypeScript and build (target) for ES2020 (recommended). Used node version is >= 18.16.x (v18.16.0 LTS - recommended)

### Todo (in-development phase) ...

<!-- 🕖 in_dev -->
<!-- ✅ done -->

✅ Simple `Route` registerer for developers.

✅ Simple `Controller` functions for handling user requests & more.

✅ Modified `Response` automatically with `res.toJson()`.

✅ Error handling automatically (no need to try/catch every time).

✅ Guards (middleware) can be implemented in route-object while register.

✅ Comes with initial setup for TDD/Tests in `tests` directory.

✅ User input sanitization using Zod schema based validations (Guard/middleware).

✅ Core Environment variables are parsed.

🕖 Basic setup for default security options as `@exts/security`.
 - `CORS` handle cross-origin requests
 - `Helmet` hide meta-data, xss-protect, and polished headers.
 - `Rate Limitier` using `express-rate-limit` and can be used with redis easily. 
 - (optional) `CSRF`: can be added if user wants to do Cross site request forgery 

🕖 `Cron Jobs` using `node-cron` as `@exts/cron`.

🕖 `Queue` using `bull` as `@exts/bull`.

🕖 `Redis` client setup available as `@exts/redis`.

🕖 `Caching` uses `cache-manager` with redis available as `@exts/cache`.

🕖 Adapters (Databases) as `@exts/db` (maybe include `reflect-metadata` by default):

- `typegoose` for mongoose/mongdb supports.
- `typeorm` for typeorm/sql supports.
- `kysely` a type-safe typescript SQL query builder.
- `neo4j` for neo4j-driver supports.

🕖/🏃 (upcoming - in next update or version) ---
 - GraphQL, Apollo/Server - adapter as `@exts/graphql`
 - Frotnend (SPA/SSR) integrations using `vite` & adapter (i.e. `@exts/client`)
 - (optional) tRPC/server - adapter as `@exts/trpc`




