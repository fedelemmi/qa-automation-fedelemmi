# Corrección — Sesión 1: TypeScript sintaxis base

**Archivo corregido:** `Ejercicios/Sesion 1/Tarea.ts`

¡Muy buen trabajo! Las funciones están muy bien escritas: buen uso de `Record<Prioridad, number>`, de `filter` y del template string.

## Verificación

- `npx tsx Tarea.ts` → corre sin errores.
- Chequeo de tipos con `tsc --noEmit --strict` → sin errores.

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 2 | Array de ≥ 5 casos | ✅ | 5 casos. |
| 3 | `contarPorPrioridad(casos)` | ✅ | Devuelve `{ alta: 1, media: 2, baja: 2 }`. Muy bien tipar el resultado con `Record<Prioridad, number>`. |
| 4 | `listarPendientes(casos)` | ✅ | ¡Muy bien el uso de `filter`! |
| 5 | Arrow function `formatearCaso(caso)` | ✅ | Formato idéntico al pedido: `#1 - Racing (alta) - Ejecutado`. |
| 6 | `forEach` imprimiendo los casos formateados | ✅ | |

## Detalles menores

- Como `ejecutado` es opcional y solo el caso 5 lo tiene, `listarPendientes` devuelve `[]` y todos se imprimen como "Ejecutado". Cargando `ejecutado: false` en algunos casos se ve mejor que las funciones andan.
- Ya tenías definido `type Prioridad`: si lo usás en el tipo (`prioridad: Prioridad`) TypeScript solo acepta `"alta"`, `"media"` o `"baja"`, y no hacen falta los `toLowerCase()`.
- Al repositorio le falta el setup del entorno: `package.json` no tiene las dependencias `typescript` y `tsx`, no hay `tsconfig.json` y el `.gitignore` está vacío. Se arregla con `npm install -D typescript tsx @types/node`, `npx tsc --init` y agregando `node_modules` al `.gitignore`.
- River es el mas grande del continente, iria True. 
