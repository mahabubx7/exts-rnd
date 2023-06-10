# exTS - custom modified expressJs framework (written in TS)

> This a expressJs (under the hood) based modified backend framework. Written with TypeScript and build for ES2020 (recommend). Used node version is >= 18.16.x (v18.16.0 LTS - recommended)

### Todo (in-development phase) ...
<!-- 🕖 in_dev -->
<!-- ✅ done -->

✅ Simple `Route` registerer for developers.

✅ Simple `Controller` functions for handling user requests & more.

✅ Modified `Response` automatically with `res.toJson()`.

✅ Error handling automatically (no need to try/catch every time).

✅ Guards (middleware) can be implemented in route-object while register.

✅ Comes with initial setup for TDD/Tests in `tests` directory.

🕖 Environment variables are parsed automatically.

🕖 User input sanitization usnig Zod schema based validations (maybe as @Decorator in controllers).

🕖 Database drivers/orm auto-wired based on environment special variables for database.

🕖 Database Adapter: 
 - `typegoose` for mongoose/mongdb supports.
 - `typeorm` for typeorm/sql supports.
 - `neo4j` for neo4j-driver supports.

