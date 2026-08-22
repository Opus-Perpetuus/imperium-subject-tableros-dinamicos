import type { KirletDataClient, NoxServices } from "@opus-perpetuus/imperium-core-kit";
import { new_id, now_iso } from "@opus-perpetuus/imperium-core-kit";

export async function seed_demo(ctx: {
  data: KirletDataClient;
  nox: NoxServices;
  technical_id: string;
}): Promise<void> {
  const n = await ctx.data.count("dynamic_dashboard");
  if (n > 0) return;
  const ts = now_iso();
  await ctx.data.insert("dynamic_dashboard", {
    id: new_id("dynamic-"),
    name: "Tableros dinámicos (ejemplo)",
    description: "Registro semilla del súbdito. Sustituye al migrar desde Mongo.",
    is_active: true,
    ref: "seed-tableros-dinamicos",
    created_at: ts,
    updated_at: ts,
  });
}
