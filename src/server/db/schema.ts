// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, 
	pgTableCreator, 
	varchar,
	text
 } from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
//originally the table was named kasane
//'kasane-teto_
export const createTable = pgTableCreator((name) => `quote_guessing_sets${name}`);

export const sets = createTable(
	"sets",
	(d) => ({
		id: d.integer().primaryKey().generatedByDefaultAsIdentity(),
		name: d.varchar({ length: 256 }),
		quotes: d.text("quote").array(),
		//quotes: text("quote").primaryKey(),
		createdAt: d
			.timestamp({ withTimezone: true })
			.$defaultFn(() => /* @__PURE__ */ new Date())
			.notNull(),
		updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
	}),
	(t) => [index("name_idx").on(t.name)],
);
