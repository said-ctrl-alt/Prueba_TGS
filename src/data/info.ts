export const unitThreeTitle = 'Clasificación y propiedades';
export const unitThreeFullTitle = 'Clasificación y propiedades de los Sistemas';

export const projectTeam = [
  'Jaison Palacio',
  'Cristian Moscote',
  'Said Valencia',
  'Moises Puello',
  'Sneider Ferrer',
];

export const publicResources = [
  { title: 'Informe del caso de estudio (PDF)', href: '/estudio-de-caso.pdf' },
  { title: 'Fotografía de la Universidad de La Guajira', href: '/universidad-de-la-guajira.webp' },
  { title: 'Vista aérea del Campus Riohacha', href: '/campus-riohacha-1.webp' },
  { title: 'Logo de la cabecera', href: '/logo-pagina.webp' },
  { title: 'Logo de los 50 años', href: '/logo-uniguajira-50-anios.webp' },
] as const;

export const unitThreeSupport = {
  title: 'Temario de Teoría de sistemas aplicada a la ingeniería industrial, apartado 3.1',
  href: '/Propiedades%20de%20los%20S.pdf',
};

export const caseGuide = {
  title: 'El sistema como conjunto · Guía de clase',
  href: '/Estudio_de_Caso_Sistema_como_Conjunto%20%281%29.docx',
};

export const studyLinks = [
  { href: '/fundamentos/', title: 'Fundamentos' },
  { href: '/unidad-3/', title: unitThreeTitle },
  { href: '/caso-de-estudio/', title: 'Caso de estudio' },
  { href: '/evaluacion/', title: 'Evaluación' },
] as const;

export type Topic = {
  id: 'clasificacion' | 'elementos' | 'propiedades';
  number: string;
  title: string;
  intro: string;
  review: string;
  items: readonly (readonly [term: string, definition: string])[];
  articleSection: string;
  reference?: { title: string; href: string };
};

export type StudyLayoutProps = {
  title: string;
  description: string;
};

export type StudyFlow = {
  title: string;
  steps: readonly string[];
  note: string;
  parallel?: boolean;
};

export type TopicPageProps = {
  topic: Topic;
};

export const article = {
  title: 'Antonio Flórez y Javier Thomas (1993), La teoría general de sistemas',
  url: 'https://revistas.unal.edu.co/index.php/rcg/article/view/70711',
  pdf: '/rcgeogra%2C%2B10_art06.pdf',
};

export const foundations = [
  {
    id: 'enfoque',
    title: 'De dónde viene el enfoque sistémico',
    text: 'Flórez y Thomas sitúan la Teoría General de Sistemas en una tradición que busca entender las relaciones entre las partes y reunir perspectivas de distintas disciplinas. Entre sus referentes está Ludwig von Bertalanffy, quien propuso buscar principios que pudieran aplicarse a sistemas de distinta naturaleza.',
  },
  {
    id: 'componentes',
    title: 'Del componente al sistema',
    text: 'El enfoque sistémico estudia las partes, las relaciones que las organizan y el comportamiento del conjunto. En una matrícula, conocer el número de cupos no explica por sí solo quién logra inscribirse. También importan las reglas de prioridad y el momento en que se liberan las reservas.',
  },
  {
    id: 'estructura',
    title: 'Estructura, función y evolución',
    text: 'La estructura describe cómo se organizan las partes. La función describe qué hacen juntas. La evolución explica cómo cambia el sistema con el tiempo. En la matrícula, estos planos corresponden a la organización del catálogo y los registros, la asignación de cupos y los cambios entre periodos académicos.',
  },
  {
    id: 'resolucion',
    title: 'Límite y nivel de resolución',
    text: 'La pregunta de estudio determina dónde trazas el límite y cuánto detalle necesitas. Para estudiar la matrícula completa, el control de cupos puede ser una caja negra: observas qué recibe y qué devuelve. Si investigas por qué se pierden reservas, abres esa caja y estudias sus reglas y registros.',
  },
  {
    id: 'umbrales',
    title: 'Retroalimentación y umbrales',
    text: 'Hay retroalimentación cuando un resultado influye en lo que ocurre después. Un umbral señala un punto a partir del cual cambia el funcionamiento. Por ejemplo, al agotarse los cupos de un curso, la siguiente solicitud pasa a lista de espera si el sistema ofrece esa opción.',
  },
];

export const structureFlow: StudyFlow = {
  title: 'Tres maneras de observar la matrícula',
  steps: ['Estructura · Catálogo y registros', 'Función · Asignación de cupos', 'Evolución · Cambios entre periodos'],
  note: 'El orden de lectura distingue tres aspectos del mismo sistema.',
  parallel: true,
};

export const resolutionFlow: StudyFlow = {
  title: 'Dos escalas de observación',
  steps: ['Vista general · Matrícula', 'Vista interna · Control de cupos', 'Detalle · Reservar, confirmar o liberar'],
  note: 'Cada paso amplía una parte de la vista anterior.',
};

export const topicFlows: Readonly<Partial<Record<Topic['id'], StudyFlow>>> = {
  elementos: {
    title: 'Una solicitud de préstamo',
    steps: ['Entrada · Solicitud', 'Proceso · Verificación y registro', 'Salida · Libro y comprobante'],
    note: 'El registro de devoluciones vuelve al proceso como retroalimentación si se usa para ajustar el servicio.',
  },
  propiedades: {
    title: 'Cómo actúa la homeostasis',
    steps: ['La temperatura baja', 'El termostato detecta el cambio', 'La calefacción se enciende'],
    note: 'Al recuperar la temperatura prevista, el termostato apaga la calefacción. La respuesta contrarresta el cambio inicial.',
  },
};

export const classificationMatrix = [
  ['Composición', 'Físico o abstracto', 'Servidor físico / modelo de asignación de cupos'],
  ['Comportamiento', 'Determinista o probabilístico', 'Algoritmo con entradas fijas / simulación con llegadas aleatorias'],
  ['Complejidad', 'De simple a complejo', 'Interruptor / red de transporte con rutas interdependientes'],
  ['Intercambio', 'Abierto, cerrado o aislado', 'Se distingue qué cruza la frontera. En termodinámica, el cerrado puede intercambiar energía; el aislado no intercambia materia ni energía.'],
] as const;

export const topics: readonly Topic[] = [
  {
    id: 'clasificacion', number: '01', title: 'Clasificación de los sistemas',
    articleSection: '6',
    review: 'Clasifica un mismo sistema según dos criterios y explica qué observaste para elegir cada categoría.',
    intro: 'Un mismo sistema puede pertenecer a varias categorías. La clasificación depende del criterio que elijas para estudiarlo.',
    items: [
      ['Intercambio con el entorno', 'Un sistema abierto intercambia materia, energía o información con su entorno. En termodinámica, un sistema cerrado intercambia energía, pero no materia. Un recipiente sellado que se calienta ilustra este último caso.'],
      ['Comportamiento y complejidad', 'Un modelo determinista produce el mismo resultado para las mismas condiciones iniciales. Un modelo probabilístico describe resultados mediante probabilidades. La complejidad, en cambio, depende de las relaciones y funciones que se estudian.'],
      ['Origen', 'Los sistemas naturales surgen de procesos de la naturaleza, como un ecosistema. Los artificiales se crean mediante intervención humana, como un sistema de préstamo bibliotecario.'],
      ['Naturaleza de sus componentes', 'Los sistemas concretos tienen componentes físicos, como un equipo de cómputo. Los abstractos se componen de conceptos, relaciones o reglas, como un modelo matemático.'],
      ['Enfoque de análisis', 'Un enfoque duro parte de un objetivo definido y medible, como reducir el tiempo de respuesta de un servidor. Un enfoque blando ayuda a entender situaciones en las que las personas involucradas tienen distintas ideas sobre el problema o su solución, como acordar qué debe priorizar una plataforma académica.'],
    ],
  },
  {
    id: 'elementos', number: '02', title: 'Elementos de los sistemas',
    articleSection: '7 y 8',
    review: 'Dibuja el límite del sistema y señala sus entradas, su proceso y sus salidas. Identifica qué dato podría volver como retroalimentación.',
    intro: 'El límite define qué queda dentro del sistema. El entorno reúne aquello que queda fuera y puede influir en su funcionamiento.',
    items: [
      ['Estructura y flujos', 'La estructura incluye componentes, conexiones y recursos almacenados. Los flujos describen lo que circula. En una biblioteca, el catálogo guarda registros y la solicitud fluye entre el usuario y el servicio de préstamo.'],
      ['Entradas', 'Recursos o información que ingresan. En una biblioteca, una solicitud de préstamo es una entrada.'],
      ['Proceso', 'Actividades que transforman las entradas. La biblioteca verifica la disponibilidad y registra el préstamo.'],
      ['Salidas', 'Resultados del proceso. El usuario recibe el libro y la fecha de devolución.'],
      ['Retroalimentación', 'Información sobre los resultados que se usa para ajustar el proceso. Si aumentan los atrasos, la biblioteca puede enviar recordatorios antes del vencimiento.'],
    ],
  },
  {
    id: 'propiedades', number: '03', title: 'Propiedades esenciales de los sistemas',
    articleSection: '8',
    review: 'Elige una propiedad y explica qué comportamiento observarías en un ejemplo concreto.',
    intro: 'Estas propiedades ayudan a explicar cómo se regula un sistema, cómo responde a cambios y qué resultados surgen de la interacción de sus partes.',
    items: [
      ['Homeostasis', 'Algunos sistemas compensan perturbaciones para mantener una condición dentro de ciertos límites. Un termostato enciende o apaga la calefacción según la temperatura medida.'],
      ['Equifinalidad', 'En ciertos sistemas abiertos, distintos puntos de partida o caminos pueden conducir al mismo resultado. Dos servicios web pueden alcanzar la misma meta de disponibilidad con estrategias distintas, como distribuir el tráfico entre servidores o activar un servidor de respaldo cuando falla el principal.'],
      ['Entropía', 'En termodinámica, la entropía se relaciona con el número de configuraciones microscópicas compatibles con un estado. Por ejemplo, aumenta cuando dos gases se mezclan espontáneamente en un recipiente aislado. En el análisis de organizaciones, el término también se usa como analogía para describir la pérdida de orden, como ocurre en un catálogo que acumula registros duplicados.'],
      ['Sinergia', 'La coordinación entre componentes puede producir un resultado superior al que conseguirían por separado. Al integrar el catálogo con el registro de devoluciones, el servicio puede ofrecer disponibilidad actualizada sin tener que verificar cada libro a mano.'],
    ],
    reference: unitThreeSupport,
  },
];

export const libraryCase = {
  title: 'El préstamo de libros como sistema',
  intro: 'Imagina que una biblioteca quiere reducir las devoluciones tardías. Delimita el sistema al servicio de préstamo, que incluye al personal, el catálogo y los registros. Los usuarios forman parte de su entorno.',
  observations: [
    ['Clasificación', 'Es un sistema artificial y abierto. La biblioteca y sus usuarios intercambian libros e información sobre solicitudes, disponibilidad y fechas de devolución.'],
    ['Elementos', 'La solicitud entra al sistema. El personal valida el préstamo y registra la fecha. El libro y el comprobante salen hacia el usuario. El registro de atrasos permite ajustar el servicio.'],
    ['Propiedades', 'La variedad requerida se aprecia al responder a distintas causas de atraso. La biblioteca puede enviar un aviso cuando alguien olvida la fecha y ofrecer una renovación cuando necesita más tiempo y el libro no está reservado.'],
  ],
  question: 'Si los atrasos aumentan a pesar de los recordatorios, ¿qué datos recogerías para distinguir las causas y elegir otra respuesta?',
} satisfies {
  title: string;
  intro: string;
  observations: Topic['items'];
  question: string;
};
