import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { Breadcrumbs } from "../../components/ui/Breadcrumb";
import { Line1 } from "../../components/ui/Line";
import { CardGrado } from '../../components/ui/Card';
import { ImageWithInnerBorder } from '../../components/ui/Image';
import { ListIconWithBg, ListIcon } from '../../components/ui/List';

import {getCredencialesProgramaMatriculadoByDocId,
        getCredencialesProgramaByDocId,
        getCertificadosCursoMatriculadoByDocId,
        getCertificadosCursoByDocId} from "../../api/Credenciales.api";
import { getUsuarioByDocId } from "../../api/User.api";

import { FaBuildingColumns } from "react-icons/fa6";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import { PiCertificate } from "react-icons/pi";
import { BsPersonCheck } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";


function Acreditacion() {
  const { t, i18n } = useTranslation("acreditacion");
  const { documentoIdentidad } = useParams();
  const [query, setQuery] = useState(documentoIdentidad || "");

  const [datosUsuario, setDatosUsuario] = useState([]);
  const [credencialesProgramaMatriculado, setCredencialesProgramaMatriculado] = useState([]);
  const [credencialesPrograma, setCredencialesPrograma] = useState([]);
  const [certificadosCursoMatriculado, setCertificadosCursoMatriculado] = useState([]);
  const [certificadosCurso, setCertificadosCurso] = useState([]);

  const [loading, setLoading] = useState(false);

  // Estados de error individuales
  const [error, setError] = useState("");
  const [errorCredencialesMatriculado, setErrorCredencialesMatriculado] = useState(null);
  const [errorCredenciales, setErrorCredenciales] = useState(null);
  const [errorCertificadosMatriculado, setErrorCertificadosMatriculado] = useState(null);
  const [errorCertificados, setErrorCertificados] = useState(null);

  useEffect(() => {
    if (documentoIdentidad) {
      handleSearch(documentoIdentidad);
    }
  }, [documentoIdentidad]);

  const handleSearch = async (dni = query) => {
    if (!dni) return;

    // Limpiar errores previos
    setError("");
    setErrorCredencialesMatriculado(null);
    setErrorCredenciales(null);
    setErrorCertificadosMatriculado(null);
    setErrorCertificados(null);

    // Limpiar contenido previo
    setDatosUsuario([]);
    setCredencialesProgramaMatriculado([]);
    setCredencialesPrograma([]);
    setCertificadosCursoMatriculado([]);
    setCertificadosCurso([]);

    setLoading(true);

    try {
      const datosUsuario = await getUsuarioByDocId(dni);
      setDatosUsuario(datosUsuario);
    } catch (error) {
      setError(`${error.message}`);
    }

    try {
      const credencialesMatriculado = await getCredencialesProgramaMatriculadoByDocId(dni);
      setCredencialesProgramaMatriculado(credencialesMatriculado || []);
    } catch (error) {
      setErrorCredencialesMatriculado(`Error al obtener credenciales matriculados: ${error.message}`);
    }

    try {
      const credenciales = await getCredencialesProgramaByDocId(dni);
      setCredencialesPrograma(credenciales || []);
    } catch (error) {
      setErrorCredenciales(`Error al obtener credenciales disponibles: ${error.message}`);
    }

    try {
      const certificadosMatriculado = await getCertificadosCursoMatriculadoByDocId(dni);
      setCertificadosCursoMatriculado(certificadosMatriculado || []);
    } catch (error) {
      setErrorCertificadosMatriculado(`Error al obtener certificados matriculados: ${error.message}`);
    }

    try {
      const certificados = await getCertificadosCursoByDocId(dni);
      setCertificadosCurso(certificados || []);
    } catch (error) {
      setErrorCertificados(`Error al obtener certificados disponibles: ${error.message}`);
    }

    setLoading(false);
  };

  return(
    <section className="bg-gray-100">
      <Breadcrumbs
        text={t("accreditation.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-15 lg:py-20">
        <div>
          <h1 className="text-primary font-bold uppercase">{t("accreditation.title")}</h1>
          <Line1 bgColorClass={"bg-secondary"}/>
          <p className="mt-10">{t("accreditation.content")}</p>
        </div>

        {/* Verificacion de certificadopor código */}
        <div className="mt-10">
          <h3 className="">Verificación de certificados</h3>
          <div className="mt-4 mx-auto bg-white p-5 rounded-lg flex items-center gap-5 shadow-lg">
            <PiCertificate style={{color:"var(--secondary)", height:50, width:50}}/>
            <div className="relative w-full bg-white rounded-full">
              <input
                placeholder="Ingrese su documento de identidad"
                className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-sky-200 focus:border-sky-500"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-sky-600 sm:px-6 sm:text-base sm:font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 gap-2"
                onClick={() => handleSearch()}
              >
                <IoMdSearch/>
                Buscar
              </button>
            </div>
          </div>
        </div>

        {/* Resultados */}
        {loading && <p className="mt-4 text-center">Buscando ...</p>}
        {error && (
          <div className="mt-4 bg-red-100 p-4 rounded-lg shadow-md text-center">
            <p>{error}</p>
          </div>
        )}

        {datosUsuario && Object.keys(datosUsuario).length > 0 &&
        loading === false &&
        credencialesProgramaMatriculado.length === 0 &&
        credencialesPrograma.length === 0 &&
        certificadosCursoMatriculado.length === 0 &&
        certificadosCurso.length === 0 && (
          <div className="mt-4 bg-yellow-100 p-4 rounded-lg shadow-md text-center">
            <p>
              El participante <strong>{datosUsuario.usernom} {datosUsuario.userape}</strong> está registrado, 
              pero no tiene credenciales ni certificados emitidos aún.
            </p>
          </div>
        )}

        {/* Credenciales de programas*/}
        {(credencialesProgramaMatriculado.length > 0 || credencialesPrograma.length > 0 || certificadosCursoMatriculado.length > 0 || certificadosCurso.length > 0) && (
          <div className="mt-4 bg-white p-5 rounded-lg shadow-lg">
            <div>
              <h3 className="font-bold text-sky-600 mb-2">{datosUsuario.usernom} {datosUsuario.userape}</h3>
              <p><strong className="uppercase">Doc.Identidad: </strong>{datosUsuario.userdocide}</p>
              <p><strong className="uppercase">País: </strong>{datosUsuario.userpai}</p>
              <p><strong className="uppercase">Código Osha Institute:</strong>{datosUsuario.usercodosh}</p>
            </div>
            
            <div className="space-y-4">
              {(credencialesProgramaMatriculado.length > 0 ||
              credencialesPrograma.length > 0) && (
                <h4 className="mt-6 uppercase font-bold">Grados y Diplomas:</h4>
              )}
              <div className="flex flex-col gap-4">
                {errorCredencialesMatriculado && <p className="text-red-500">{errorCredencialesMatriculado}</p>}
                {credencialesProgramaMatriculado.map((credencial, index) => (
                  <CredentialCard
                    key={index}
                    nombreCert={credencial.crepromatprocod.matproprocod.pronomeng}
                    nombreDip={credencial.crepromatprocod.matproprocod.pronomdip}
                    fechaEmision={credencial.creprofecemi}
                    fechaCaducidad={credencial.creprofeccad}
                    boolDiploma={credencial.creprodip}
                    horas={credencial.crepromatprocod.matproprocod.pronumhor}
                  />
                ))}
                {errorCredenciales && <p className="text-red-500">{errorCredenciales}</p>}
                {credencialesPrograma.map((credencial, index) => (
                  <CredentialCard
                    key={index}
                    nombreCert={credencial.creproprocod.pronom}
                    nombreDip={credencial.creproprocod.pronomdip}
                    fechaEmision={credencial.creprofecemi}
                    fechaCaducidad={credencial.creprofeccad}
                    boolDiploma={credencial.creprodip}
                    horas={credencial.creproprocod.pronumhor}
                  />
                ))}
              </div>
              {(certificadosCursoMatriculado.length > 0 ||
              certificadosCurso.length > 0) && (
                <h4 className="mt-6 uppercase font-bold">Certificados :</h4>
              )}
              <div className="mt-6 flex flex-col gap-4">
                {errorCertificadosMatriculado && <p className="text-red-500">{errorCertificadosMatriculado}</p>}
                {certificadosCursoMatriculado.map((credencial, index) => (
                  <CertificadoCard
                    key={index}
                    nombreCer={credencial.cercurmatcurcod.matcurcurcod.curnom}
                    fechaEmision={credencial.cercurfecemi}
                    fechaCaducidad={credencial.cercurfeccad}
                  />
                ))}
                {errorCertificados && <p className="text-red-500">{errorCertificados}</p>}
                {certificadosCurso.map((credencial, index) => (
                  <CertificadoCard
                    key={index}
                    nombreCer={credencial.cercurcurcod.curnom}
                    fechaEmision={credencial.cercurfecemi}
                    fechaCaducidad={credencial.cercurfeccad}
                  />
                ))}
              </div>
            </div>
          
        </div>
        )}

        {/* Especializaciones */}
        <div className="mt-10">
          <div className="bg-sky-600 p-2 bg-gray-100 font-bold rounded-full">
            <h3 className="text-center text-white border-2 p-2 border-white uppercase rounded-full">Especializaciones</h3>
          </div>
          <Especializaciones/>
        </div>

        {/* Grados */}
        <div className="mt-10">
          <div className="bg-sky-600 p-2 bg-gray-100 font-bold rounded-full">
            <h3 className="text-center text-white border-2 p-2 border-white uppercase rounded-full">Grados</h3>
          </div>
          <Grados/>
        </div>

        {/* Trainers (Entrenadores) */}
        <div className="mt-10">
        <div className="bg-sky-600 p-2 bg-gray-100 font-bold rounded-full">
            <h3 className="text-center text-white border-2 p-2 border-white uppercase rounded-full">Trainer</h3>
          </div>
          <Trainers/>
        </div>
    </div>
    </section>
    
  );
};

const CredentialCard = ({
  nombreCert,
  nombreDip,
  fechaEmision,
  fechaCaducidad,
  boolDiploma,
  horas,
}) => {
  const hoy = new Date();
  const fechaExpiracion = fechaCaducidad ? new Date(fechaCaducidad) : null;

  // Determinar el estado
  const estado = fechaExpiracion && hoy > fechaExpiracion ? "CADUCADO" : "VIGENTE";

  return (
    <div className="flex flex-col gap-2 bg-gray-50 p-5 rounded-r-lg border border-l-8 border-yellow-500">
      <p className="uppercase"><strong>Grado :</strong> {nombreCert || 'Programa desconocido'}</p>
      {boolDiploma && (
        <p className="uppercase"><strong>Diploma :</strong> {nombreDip || 'Programa desconocido'}</p>
      )}
      <p className="uppercase"><strong>N° de Horas :</strong> {horas}</p>
      <div className="flex flex-row gap-6 text-[12px] text-gray-700">
        <p><strong className="uppercase">Fecha de Emisión:</strong> {fechaEmision}</p>
        <p><strong className="uppercase">Fecha de Caducidad:</strong> {fechaCaducidad}</p>
      </div>
      <p className="uppercase">
        <strong>Estado :</strong> <span className={estado === "CADUCADO" ? "text-red-600 font-bold" : "text-green-600 font-bold"}>{estado}</span>
      </p>
    </div>
  )
};


const CertificadoCard = ({
  nombreCer,
  fechaEmision,
  fechaCaducidad,
}) => {
  const hoy = new Date();
  const fechaExpiracion = fechaCaducidad ? new Date(fechaCaducidad) : null;

  // Determinar el estado
  const estado = fechaExpiracion && hoy > fechaExpiracion ? "CADUCADO" : "VIGENTE";

  return (
    <div className="flex flex-col gap-2 bg-gray-50 p-4 rounded-r-md shadow-lg border border-l-8 border-sky-600">
      <p className="text-[16px] uppercase"><strong>Certificado :</strong> {nombreCer}</p>
      <div className="flex flex-row gap-6 text-[12px] text-gray-700">
        <p><strong className="uppercase">Fecha de Emisión:</strong> {fechaEmision}</p>
        <p><strong className="uppercase">Fecha de Caducidad:</strong> {fechaCaducidad}</p>
      </div>
      <p className="uppercase">
        <strong>Estado :</strong> <span className={estado === "CADUCADO" ? "text-red-600 font-bold" : "text-green-600 font-bold"}>{estado}</span>
      </p>
    </div>
  );
};


const Especializaciones = () => {
  const { t, i18n } = useTranslation("grados");
  const gradosFiltrados = t("degreeData", { returnObjects: true }).filter(grado => grado.id.startsWith('e'));
  const handleCardClick = (grado) => {
    navigate(`/grados/${grado.id}`, { state: { grado } });
  };
  return(
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
      {gradosFiltrados.map((grado,index) => (
        <div key={index}>
          <CardGrado
            id={grado.id}
            title={grado.title}
            code={grado.code}
            label={grado.label}
            src={grado.src}
            onClick={() => handleCardClick(grado)}
          />
        </div>
      ))}
    </div>
  );
};

const Grados = () => {
  const { t, i18n } = useTranslation("grados");
  const gradosFiltrados = t("degreeData", { returnObjects: true }).filter(grado => 
    !grado.id.startsWith('e') && !grado.id.startsWith('t')
  );
  const handleCardClick = (grado) => {
    navigate(`/grados/${grado.id}`, { state: { grado } });
  };
  return(
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
      {gradosFiltrados.map((grado,index) => (
        <div key={index}>
          <CardGrado
            id={grado.id}
            title={grado.title}
            code={grado.code}
            label={grado.label}
            src={grado.src}
            onClick={() => handleCardClick(grado)}
          />
        </div>
      ))}
    </div>
  );
};

const Trainers = () => {
  const { t, i18n } = useTranslation("grados");
  const gradosFiltrados = t("degreeData", { returnObjects: true }).filter(grado => grado.id.startsWith('t'));
  const handleCardClick = (grado) => {
    navigate(`/grados/${grado.id}`, { state: { grado } });
  };
  return(
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5">
      {gradosFiltrados.map((grado,index) => (
        <div key={index}>
          <CardGrado
            id={grado.id}
            title={grado.title}
            code={grado.code}
            label={grado.label}
            src={grado.src}
            onClick={() => handleCardClick(grado)}
          />
        </div>
      ))}
    </div>
  );
};


function AcreditacionArea() {
  const { t, i18n } = useTranslation("acreditacion");
  const navigate = useNavigate();
  const handleCardClick = (grado) => {
    navigate(`/grados/${grado.id}`, { state: { grado } });
  };
  return(
    <section className="">
      <Breadcrumbs
        text={"Grados"}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      <div>
        <h1></h1>
      </div>
    </section>
  );
};

function AcreditacionAreaDetalle() {
  const { id } = useParams();
  const location = useLocation();
  const { area } = location.state || {};
  const { t, i18n } = useTranslation("grados");
  if (!area) {
    return <div>No hay datos disponibles para esta área de acreditacion.</div>;
  }
  return(
    <section className="">
      <Breadcrumbs
        text={"Areas de Acreditación"}
        icon={<FaBuildingColumns/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14">
        <div className="flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-10">
          <div>
            <h1 className="font-bold uppercase text-primary">{area.title}</h1>
            <Line1 bgColorClass={"bg-secondary"}/>
            <p>{area.content}</p>
            <div className="mt-5">
              <h3 className="mb-3 text-primary font-semibold">{area.areasOfInfluence.title}</h3>
              <ListIconWithBg
                list={area.areasOfInfluence.list}
                icon={<MdOutlineDashboard style={{color:"var(--primary)", height:20, width:20}}/>}
              />
            </div>
            <div className="mt-5">
              <h3 className="text-primary font-semibold">{area.currentAccreditationForProfessionals.title}</h3>
              <ListIcon 
                list={area.currentAccreditationForProfessionals.list}
                icon={<BsPersonCheck style={{color:"var(--primary)", height:25, width:25}}/>}
              />
            </div>
          </div>
          <div className="min-w-[400px] lg:min-w-[500px] xl:min-w-[550px] 2xl:min-w-[600px] max-w-[900px] mx-auto">
            <ImageWithInnerBorder
              src={area.src}
              alt={area.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
};


/* ACREDITACION AE */
function AcreditacionAE() {
  const { t, i18n } = useTranslation("acreditacion");
  return(
    <section className="bg-white">
      <Breadcrumbs
        text={t("accreditationAE.accreditationAE.title")}
        icon={<AiFillSafetyCertificate/>}
        img="/img-nosotros/business.jpg"
      />
      <div className="px-5 md:px-10 lg:px-20 xl:px-40 py-10 lg:py-14 xl:py-18">
        <h1 className="text-primary uppercase font-bold">{t("accreditationAE.accreditationAE.title")}</h1>
        <Line1 bgColorClass={"bg-secondary"}/>
        <div className="mt-6 flex flex-col md:flex-row gap-5 md:gap-8 lg:gap-12">
          <div className="">
            <p>{t("accreditationAE.accreditationAE.content")}</p>
            <div className="mt-10">
              <h2 className="text-primary uppercase font-bold">{t("accreditationAE.accreditedEducationAE.title")}</h2>
              <Line1 bgColorClass={"bg-secondary"}/>
              <p className="mt-2">{t("accreditationAE.accreditedEducationAE.content")}</p>
            </div>
          </div>
          <div className="mx-auto md:min-w-[180px] lg:min-w-[210px]  max-w-[300px]">
            <img className="w-full"
              src={"/logo/logoAccreditedEducation.png"}
              alt="engineer"
            />
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-primary font-bold uppercase">{t("accreditationAE.identity.title")}</h3>
          <Line1 bgColorClass={"bg-secondary"}/>
          <div>
            {t("accreditationAE.identity.content", { returnObjects: true }).map((p, index) => (
              <p key={index} className="mb-3">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


function Areas() {
  const { t, i18n } = useTranslation("estandares");
  return(
    <div className="">
      <div>

      </div>
      <div></div>
    </div>
  );
};
export { Acreditacion, AcreditacionAE, AcreditacionArea, AcreditacionAreaDetalle }