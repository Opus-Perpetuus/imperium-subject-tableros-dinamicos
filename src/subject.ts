import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { dynamic_dashboard_module } from "./modules/dynamic-dashboard/dynamic-dashboard.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-tableros-dinamicos",
  name: "Tableros dinámicos",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-tableros-dinamicos:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "tableros-dinamicos.root",
    label: "Tableros dinámicos",
    order: 0,
  },
  modules: [dynamic_dashboard_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
