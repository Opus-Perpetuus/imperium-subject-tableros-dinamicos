# Tableros dinámicos

Quien usa la app abre el submenú Tableros dinámicos y ve la tabla de tableros
dinámicos. Queda probado que la lista responde y muestra el registro semilla.

## Sub-features

La app hace la acción de `listar`. Escribe: no. Esta ficha no lleva línea
`Subject:` con imagen: el catálogo no da un tag para rellenarla.

- `listar` deja `GET /dynamic-dashboard` en 200 con el registro semilla
  `Tableros dinámicos (ejemplo)` (`ref: "seed-tableros-dinamicos"`).

### Archivos y contratos

- `src/subject.ts` — `define_subject` de `subject-tableros-dinamicos`; no
  declara `dependsOn`.
- `src/modules/dynamic-dashboard/dynamic-dashboard.routes.ts` — `define_crud`
  de `dynamic-dashboard`: `GET /dynamic-dashboard`, `GET /dynamic-dashboard/:id`.
- `src/modules/dynamic-dashboard/dynamic-dashboard.pages.ts` — página
  `tableros-dinamicos.dynamic-dashboard`, path `dynamic-dashboard`, lista desde
  `api://m/subject-tableros-dinamicos/dynamic-dashboard`.
- `src/seed.ts` — registro semilla.

### Mapa

| id | ruta | rol semilla | pasos | esperado | muta | receta |
| --- | --- | --- | --- | --- | --- | --- |
| `subject-tableros-dinamicos.listar` | `GET /dynamic-dashboard` | con `subject.tableros-dinamicos.dynamic-dashboard.read`; base QA sin definir | pedir la lista | HTTP 200 con `Tableros dinámicos (ejemplo)` | no | `arnes listar` |

## How to get to it (user POV)

- Menú Tableros dinámicos → Tableros dinámicos (page id
  `tableros-dinamicos.dynamic-dashboard`, path `dynamic-dashboard`).

## Driving it with arnes

Preconditions:

- Doctor en 0. Si falta `subject-tableros-dinamicos`, la receta sale `omitida`.
- Si falta el registro semilla, la receta sale `omitida`.

- **Abrir.** `GET /dynamic-dashboard` en 200 y el texto
  `Tableros dinámicos (ejemplo)` en la respuesta de `listar`.
- **Proof.** `evidence/tableros-dinamicos/`.

## Gotchas

- Una receta de lectura que escribe sale en fallo aunque la pantalla se vea bien.
- La base QA no está definida; ninguna receta muta hasta que esta ficha la nombre.
- `omitida` no cuenta como probada.
