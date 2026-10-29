type Prioridad = "alta" | "media" | "baja";

type Caso = {
    Nombre: string;
    id: number;
    Color: string;
    Es_grande: boolean;
    prioridad: string;
    ejecutado?: boolean;
};

const equipos: Caso[] = [
    { Nombre: "Racing", id: 1, Color: "Celeste y Blanco", Es_grande: true, prioridad: "Alta" },
    { Nombre: "Boca", id: 2, Color: "Azul y Amarillo", Es_grande: false, prioridad: "Media" },
    { Nombre: "San Lorenzo", id: 3, Color: "Azul y Rojo", Es_grande: false, prioridad: "Baja" },
    { Nombre: "River", id: 4, Color: "Rojo y Blanco", Es_grande: false, prioridad: "Media" },
    { Nombre: "Rojo", id: 5, Color: "Rojo y Amargo", ejecutado: true, Es_grande: false, prioridad: "Baja" }
];

/* Escribir una función contarPorPrioridad(casos) que recorra el array y devuelva cuántos casos hay de cada prioridad. */
function contarPorPrioridad(casos: Caso[]): Record<Prioridad, number> {
    const resultado: Record<Prioridad, number> = {
        alta: 0,
        media: 0,
        baja: 0
    };

    casos.forEach((item: Caso) => {
        const prioridad = item.prioridad.toLowerCase();

        if (prioridad === "alta") {
            resultado.alta += 1;
        } else if (prioridad === "media") {
            resultado.media += 1;
        } else if (prioridad === "baja") {
            resultado.baja += 1;
        }
    });

    return resultado;
}

console.log("---- Casos por prioridad:");
console.log(contarPorPrioridad(equipos));

/* Escribir una función listarPendientes(casos) que devuelva solo los casos donde ejecutado sea false. */
function listarPendientes(casos: Caso[]): Caso[] {
    return casos.filter((item: Caso) => item.ejecutado === false);
}

console.log("---- Casos pendientes de ejecucion:");
console.log(listarPendientes(equipos));

/* Escribir una arrow function formatearCaso(caso) que reciba un objeto caso y devuelva un string legible, por ejemplo: "#1 - Login válido (alta) - Pendiente". */
/* Al final del archivo, usar forEach para imprimir por consola todos los casos formateados con formatearCaso. */
const formatearCaso = (caso: Caso): string => {
    const prioridad = caso.prioridad.toLowerCase();
    const estado = caso.ejecutado === false ? "Pendiente" : "Ejecutado";

    return `#${caso.id} - ${caso.Nombre} (${prioridad}) - ${estado}`;
};

equipos.forEach((caso: Caso) => {
    console.log(formatearCaso(caso));
});
