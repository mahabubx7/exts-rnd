# exTS - friendly node.js framework.

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

🕖 Environment variables are parsed automatically.

🕖 Database drivers/orm auto-wired based on environment special variables for database.

🕖 Adapters (Databases):
- `typegoose` for mongoose/mongdb supports.
- `typeorm` for typeorm/sql supports.
- `neo4j` for neo4j-driver supports.
