import React, { useState } from "react";

const Examen = () => {
  // Array de preguntas y alternativas
  const questions = [
    {
      id: 1,
      text: "¿Cuál es la capital de Francia?",
      options: ["Madrid", "París", "Londres", "Roma", "Berlín"],
      correctAnswer: "París"
    },
    {
      id: 2,
      text: "¿Cuál es el río más largo del mundo?",
      options: ["Amazonas", "Nilo", "Yangtsé", "Misisipi", "Danubio"],
      correctAnswer: "Amazonas"
    }
  ];

  // Estado para almacenar las respuestas del usuario
  const [answers, setAnswers] = useState({});

  // Función para manejar la selección de respuesta
  const handleAnswerSelect = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  // Renderizar preguntas y alternativas
  const renderQuestions = () => {
    return questions.map((question) => (
      <div key={question.id} className="flex flex-col gap-3 p-5 border-1 border-grisClaro shadow-lg rounded-lg">
        <h4 className="text-sm">{question.text}</h4>
        <ul className="flex flex-col gap-1">
          {question.options.map((option, index) => (
            <li key={index} className="flex gap-2 items-center">
              <input
                type="radio"
                id={`q${question.id}option${index}`}
                name={`q${question.id}`}
                value={option}
                onChange={() => handleAnswerSelect(question.id, option)}
              />
              <label htmlFor={`q${question.id}option${index}`} className="text-xs">{option}</label>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  // Botón para enviar respuestas (puedes agregar lógica para manejar las respuestas aquí)
  const handleSubmit = () => {
    console.log(answers);
    // Aquí puedes manejar la lógica para enviar las respuestas a algún servicio o realizar algún cálculo
  };

  return (
    <div className="p-5">      
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h3>Examen del curso x</h3>
        <div className="flex flex-col gap-3">
          {renderQuestions()}
        </div>
        <button type="submit">Enviar respuestas</button>
      </form>
    </div>
  );
};

export default Examen;
