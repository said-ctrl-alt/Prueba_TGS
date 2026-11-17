const evaluationQuestions = [
  {
    prompt: 'Según la guía «El sistema como conjunto», ¿qué describe mejor al sistema de matrícula?',
    options: [
      'Un conjunto organizado de elementos relacionados entre sí.',
      'Una lista de elementos independientes, sin conexiones.',
      'Un único registro de horarios y aulas.',
      'Un conjunto formado solamente por estudiantes.',
    ],
    answer: 0,
  },
  {
    prompt: 'En el caso de la Universidad Inteligente, ¿qué conjunto contiene registros que relacionan estudiantes con asignaturas y grupos?',
    options: ['Estudiantes (E)', 'Docentes (D)', 'Horarios (H)', 'Matrículas (M)'],
    answer: 3,
  },
  {
    prompt: 'En el modelo S = (C, R) del caso de la biblioteca, ¿qué representa R?',
    options: [
      'La colección de componentes del sistema.',
      'Las relaciones entre los componentes.',
      'El conjunto de usuarios que solicitan ejemplares.',
      'Los títulos registrados en el catálogo.',
    ],
    answer: 1,
  },
  {
    prompt: 'En el caso de préstamos, P = {Ana, Carlos, Diana, Pedro} y B = {Carlos, Diana, Laura}. ¿Qué usuarios pertenecen a P ∩ B?',
    options: ['Ana y Pedro', 'Carlos y Laura', 'Carlos y Diana', 'Diana y Pedro'],
    answer: 2,
  },
  {
    prompt: 'Con los mismos conjuntos P y B, ¿quién pertenece a B − P?',
    options: ['Laura', 'Ana', 'Pedro', 'Carlos'],
    answer: 0,
  },
  {
    prompt: '¿Por qué la guía distingue un título de un ejemplar de la biblioteca?',
    options: [
      'Cada título debe tener un único préstamo.',
      'Los ejemplares no pertenecen a títulos del catálogo.',
      'Un ejemplar puede representar varios usuarios.',
      'Dos copias de un título pueden tener estados distintos.',
    ],
    answer: 3,
  },
  {
    prompt: 'En la relación RLE, ¿qué significa el par ordenado (L-001, PR-01)?',
    options: [
      'El ejemplar PR-01 pertenece al título L-001.',
      'El préstamo L-001 corresponde al ejemplar PR-01.',
      'El préstamo L-001 está a nombre de PR-01.',
      'El título PR-01 registra el préstamo L-001.',
    ],
    answer: 1,
  },
  {
    prompt: 'Según el caso de la biblioteca, ¿qué incluye el límite del proceso analizado?',
    options: [
      'Únicamente la ficha del usuario.',
      'Solo la consulta de títulos, sin préstamos ni devoluciones.',
      'La consulta del catálogo, el registro de préstamos y devoluciones y la actualización de disponibilidad.',
      'Todas las actividades de la Universidad de La Guajira.',
    ],
    answer: 2,
  },
  {
    prompt: '¿Qué ejemplo del material ilustra la sinergia?',
    options: [
      'Integrar el catálogo con el registro de devoluciones para ofrecer disponibilidad actualizada sin verificar cada libro a mano.',
      'Usar el registro de atrasos para ajustar el servicio.',
      'Distinguir dos copias del mismo título que tienen estados distintos.',
      'Llegar a la misma meta de disponibilidad con estrategias diferentes.',
    ],
    answer: 0,
  },
  {
    prompt: 'Si una devolución queda sin registrar, ¿qué consecuencia describe el caso?',
    options: [
      'El título desaparece del catálogo.',
      'El usuario pasa a formar parte del conjunto de ejemplares.',
      'El préstamo se convierte en una reserva.',
      'El ejemplar sigue figurando como prestado y otra solicitud puede quedar sin atender.',
    ],
    answer: 3,
  },
  {
    prompt: 'En el análisis de la biblioteca, ¿cómo se refleja la organización del sistema?',
    options: [
      'En la cantidad de títulos, sin considerar sus registros.',
      'En las reglas que conectan el catálogo y los registros.',
      'En que los usuarios no interactúan con el proceso.',
      'En separar cada componente para que funcione por su cuenta.',
    ],
    answer: 1,
  },
  {
    prompt: '¿Qué muestra la totalidad del servicio de préstamo según el caso?',
    options: [
      'Cuántos usuarios hay, sin información sobre ejemplares.',
      'Qué títulos existen, sin información sobre préstamos.',
      'Qué copia se puede entregar y qué préstamo sigue pendiente.',
      'La unión de elementos sin sus relaciones.',
    ],
    answer: 2,
  },
  {
    prompt: '¿Cómo se clasifica el servicio de préstamo de la biblioteca en el material del proyecto?',
    options: [
      'Artificial y abierto.',
      'Natural y aislado.',
      'Abstracto y cerrado.',
      'Probabilístico y aislado.',
    ],
    answer: 0,
  },
  {
    prompt: 'En el ejemplo de una solicitud de préstamo, ¿cuál secuencia identifica correctamente entrada, proceso y salida?',
    options: [
      'Libro y comprobante → solicitud → verificación y registro.',
      'Verificación y registro → libro → solicitud.',
      'Catálogo → fecha de devolución → usuario.',
      'Solicitud → verificación y registro → libro y comprobante.',
    ],
    answer: 3,
  },
  {
    prompt: '¿Cuál es un ejemplo de retroalimentación en el servicio de préstamo?',
    options: [
      'Usar el título para identificar una obra.',
      'Usar el registro de atrasos para ajustar el servicio.',
      'Separar los ejemplares de los títulos.',
      'Enviar una solicitud como entrada al sistema.',
    ],
    answer: 1,
  },
  {
    prompt: '¿Qué ejemplo del proyecto ilustra la homeostasis?',
    options: [
      'Dos conjuntos de usuarios con algunos elementos compartidos.',
      'Una copia que aparece disponible en el catálogo.',
      'Un termostato que activa o apaga la calefacción según la temperatura medida.',
      'Un modelo de matrícula representado mediante conjuntos.',
    ],
    answer: 2,
  },
  {
    prompt: '¿Qué situación ilustra la equifinalidad en el material de propiedades?',
    options: [
      'Distintos caminos o puntos de partida conducen al mismo resultado.',
      'Un sistema intercambia energía, pero no materia.',
      'Dos gases se mezclan en un recipiente aislado.',
      'El termostato responde a un cambio de temperatura.',
    ],
    answer: 0,
  },
  {
    prompt: 'Según la clasificación termodinámica presentada, ¿qué distingue un sistema cerrado de uno aislado?',
    options: [
      'El cerrado no intercambia materia ni energía; el aislado solo intercambia energía.',
      'El cerrado intercambia materia, pero no energía; el aislado intercambia ambas.',
      'Ambos intercambian materia y energía con el entorno.',
      'El cerrado puede intercambiar energía, pero no materia; el aislado no intercambia ni materia ni energía.',
    ],
    answer: 3,
  },
  {
    prompt: 'En el caso de atrasos de la biblioteca, ¿qué respuesta refleja la variedad requerida?',
    options: [
      'Enviar el mismo aviso sin importar la causa del atraso.',
      'Enviar un aviso si se olvidó la fecha y ofrecer renovación si se necesita más tiempo y no hay reserva.',
      'Eliminar el registro de atrasos para evitar cambios.',
      'Ofrecer renovación aunque el libro esté reservado.',
    ],
    answer: 1,
  },
  {
    prompt: 'Al estudiar una matrícula completa, ¿cómo se puede observar el control de cupos si no se investigan sus reglas internas?',
    options: [
      'Como una lista de estudiantes sin entradas ni salidas.',
      'Como un sistema abierto cuyo límite incluye toda la universidad.',
      'Como una caja negra: observando qué recibe y qué devuelve.',
      'Como un conjunto de cupos sin relación con las solicitudes.',
    ],
    answer: 2,
  },
];

const form = document.querySelector('[data-evaluation-form]');
const submitButton = document.querySelector('[data-evaluation-submit]');
const progress = document.querySelector('[data-evaluation-progress]');
const result = document.querySelector('[data-evaluation-result]');
const scoreOutput = document.querySelector('[data-evaluation-score]');
const messageOutput = document.querySelector('[data-evaluation-message]');
const retryButton = document.querySelector('[data-evaluation-retry]');

if (form && submitButton && progress && result && scoreOutput && messageOutput && retryButton) {
  form.addEventListener('change', () => {
    const responses = new FormData(form);
    const answered = evaluationQuestions.reduce(
      (total, _, index) => total + (responses.has(`question-${index}`) ? 1 : 0),
      0,
    );

    submitButton.disabled = answered !== evaluationQuestions.length;
    progress.textContent = `Respuestas: ${answered} de ${evaluationQuestions.length}. ${
      answered === evaluationQuestions.length
        ? 'Ya puedes finalizar la evaluación.'
        : 'El botón se habilita al responder todas las preguntas.'
    }`;
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const responses = new FormData(form);
    const correct = evaluationQuestions.reduce(
      (total, question, index) =>
        total + (responses.get(`question-${index}`) === String(question.answer) ? 1 : 0),
      0,
    );
    const percentage = (correct / evaluationQuestions.length) * 100;
    const message =
      percentage >= 90
        ? 'Excelente dominio del tema.'
        : percentage >= 70
          ? 'Buen trabajo. Revisa algunos conceptos para mejorar.'
          : percentage >= 50
            ? 'Necesitas reforzar varios temas.'
            : 'Se recomienda estudiar nuevamente el contenido antes de volver a intentarlo.';

    scoreOutput.textContent = `${correct} / ${evaluationQuestions.length} · ${percentage}%`;
    messageOutput.textContent = message;
    result.hidden = false;
    result.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  retryButton.addEventListener('click', () => {
    form.reset();
    submitButton.disabled = true;
    progress.textContent = `Respuestas: 0 de ${evaluationQuestions.length}. El botón se habilita al responder todas las preguntas.`;
    result.hidden = true;
    form.querySelector('input[type="radio"]')?.focus();
  });
}
