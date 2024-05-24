import React from 'react';
import Exam from '../../../components/ui/Exam';

export const Introduccion = () => {
  return (
    <div>Contenido de Introduccion del curso</div>
  );
};

export const Objetivos = () => {
  return (
    <div>Contenido de los Objetivos del curso</div>
  );
};

export const M1s1 = () => {
  return (
    <div>
      <h1>Cultura de seguridad</h1>
      <p>Antes de comenzar, es fundamental comprender que la única forma en que su Sistema de gestión de seguridad en la construcción (CSMS) tendrá éxito es asegurarse de que la cultura de seguridad subyacente incluya un compromiso serio real a largo plazo y un liderazgo firme por parte de la gerencia.</p>
      <p>Este primer módulo explorará brevemente algunos de los componentes importantes que son necesarios en una cultura de seguridad eficaz. Por cierto, si está interesado en desarrollar su CSMS, asegúrese de realizar el curso 833 Desarrollo de un sistema de gestión de seguridad en la construcción .</p>
      <h3>Definición de cultura de seguridad</h3>
      <p>Lo creas o no, OSHA en realidad tiene una definición bastante buena de cultura de seguridad. OSHA define la cultura como "una combinación de actitudes, comportamientos, creencias, valores, formas de hacer las cosas y otras características compartidas de un grupo particular de personas" de una organización.</p>
      <p>Es importante entender que, desde el punto de vista del empleador, la cultura corporativa de la empresa es algo que debe gestionarse, pero si le pide a un empleado que defina la cultura, probablemente le dirá que es simplemente... "así son las cosas por aquí". ".</p>
      <p className="text-orange">La cultura de seguridad es una combinación de las actitudes, comportamientos y creencias de una organización en relación con la seguridad.</p>
    </div>
  );
};
export const M1s2 = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <p>El éxito del Sistema de Gestión de Seguridad en la Construcción (CSMS) de su empresa depende de la voluntad de la alta dirección de demostrar un compromiso serio a largo plazo para proteger a todos los empleados de lesiones y enfermedades en el trabajo.</p>
          <p>Pero, ¿cómo se consigue el compromiso de la alta dirección si aún no lo tienes? El verdadero compromiso no surge de la nada.</p>
          <p>El compromiso de la dirección con la seguridad probablemente se producirá en la medida en que cada directivo comprenda claramente los beneficios positivos derivados de su esfuerzo. Comprender los beneficios creará un fuerte deseo de hacer lo que sea necesario para mejorar la cultura de seguridad de la empresa.</p>
        </div>
        <div className="col-md-4">
          <p>Cuando la dirección está comprometida con la seguridad, se creará un fuerte deseo de hacer lo que sea necesario para mejorar la cultura general de seguridad de la empresa.</p>
        </div>                    
      </div>
    </div>
  );
};
export const M1s3 = () => {
  return (
    <div>Contenido del Módulo 3</div>
  );
};


const M2s1 = () => {
  return (
    <div>Contenido del Módulo 1</div>
  );
};
const M2s2 = () => {
  return (
    <div>Contenido del Módulo 2</div>
  );
};
const M2s3 = () => {
  return (
    <div>Contenido del Módulo 3</div>
  );
};

export const Examen = () => {
  return (
    <Exam/>
  );
};

export const Modulo1 = [M1s1, M1s2, M1s3];
export const Modulo2 = [M2s1, M2s2, M2s3];