import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-tableros-dinamicos";

export const dynamic_dashboard_pages: KirletPageDecl[] = [
  {
    id: "tableros-dinamicos.dynamic-dashboard",
    path: "dynamic-dashboard",
    permission: "subject.tableros-dinamicos.dynamic-dashboard.read",
    build: () =>
      build_feature_shell_page({
        id: "tableros-dinamicos.dynamic-dashboard",
        owner: "subject-tableros-dinamicos",
        title: "Tableros dinámicos",
        props: {
          basePath: "dynamic-dashboard",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Tableros dinámicos",
            subtitle: "Submenú de tableros-dinamicos",
            pluralLabel: "tableros dinámicos",
            singularLabel: "tableros dinámicos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/dynamic-dashboard`,
            record: `${API}/dynamic-dashboard/:id`,
            create: { method: "POST", action: `${API}/dynamic-dashboard` },
            update: { method: "PATCH", action: `${API}/dynamic-dashboard/:id` },
            delete: { method: "DELETE", action: `${API}/dynamic-dashboard/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "is_global", label: "is global", sortable: true, priority: 3 },
              { key: "widget_type", label: "widget type", sortable: true, priority: 3 },
              { key: "title", label: "title", sortable: true, priority: 3 },
              { key: "model_id", label: "model id", sortable: true, priority: 3 },
              { key: "domain", label: "domain", sortable: true, priority: 3 },
              { key: "fields", label: "fields", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "is_global", component: "input-checkbox", label: "is global" },
              { name: "widget_type", component: "input-text", label: "widget type" },
              { name: "title", component: "input-text", label: "title" },
              { name: "model_id", component: "input-text", label: "model id" },
              { name: "domain", component: "input-text", label: "domain" },
              { name: "fields", component: "input-json", label: "fields" },
              { name: "group_by", component: "input-text", label: "group by" },
              { name: "group_by_date_granularity", component: "input-text", label: "group by date granularity" },
              { name: "op", component: "input-text", label: "op" },
              { name: "field", component: "input-text", label: "field" },
              { name: "date_field", component: "input-text", label: "date field" },
              { name: "mode", component: "input-text", label: "mode" },
              { name: "relative", component: "input-text", label: "relative" },
              { name: "from", component: "input-text", label: "from" },
              { name: "to", component: "input-text", label: "to" },
              { name: "target_value", component: "input-number", label: "target value" },
              { name: "target_date", component: "input-text", label: "target date" },
              { name: "x", component: "input-number", label: "x" },
              { name: "y", component: "input-number", label: "y" },
              { name: "cols", component: "input-number", label: "cols" },
              { name: "rows", component: "input-number", label: "rows" },
              { name: "order", component: "input-number", label: "order" },
              { name: "visible", component: "input-checkbox", label: "visible" },
              { name: "widgets", component: "input-json", label: "widgets" },
            ],
          },
        },
      }),
  },
];
