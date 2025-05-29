import path from "node:path";

export const APPS_DIR = path.join(process.cwd(), "apps");
export const IGNORED_PREFIXES: string[] = ["postgres", "redis", "mongo", "mysql", "mariadb", "postgres", "immich"];
