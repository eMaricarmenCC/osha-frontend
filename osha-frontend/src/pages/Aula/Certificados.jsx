import { LiaFileDownloadSolid } from 'react-icons/lia';
import { PiCertificate, PiCertificateBold, PiCertificateFill} from 'react-icons/pi'


function Certificados() {
  return (
    <div className="px-10 py-10 w-full h-full bg-grisFondo flex flex-col gap-5">
      <h3 className='text-primary'>Descargue sus credenciales</h3>
      <div className='flex flex-col gap-5'>
        <Certificado />
        <Certificado />
        <Certificado />
      </div>
    </div>
  )
}

function Certificado() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center bg-white p-5 rounded-lg shadow-lg">

      {/* imagen */}
      <div className="">
        <PiCertificate style={{color:'var(--secondary)', width:40, height:40}} />
      </div>
      
      {/* programa */}
      <div className="flex-1">
        <div className='flex flex-col gap-1'>
          <p className='text-base text-grisOscuro'>Nombre del programa programa</p>
          <p className='text-xs text-primary'>Felicidades por aprobar el programa</p>
        </div>        
      </div>
      
      {/* credenciales */}
      <div className="flex gap-2 items-center">
        <div className="flex flex-col items-center gap-1 border-2 border-primary rounded-lg px-1 py-1">
          <LiaFileDownloadSolid style={{color:'var(--primary)', width:25, height:25}} />
          <p className='text-primary text-xs'>Descarga tu certificado</p>
        </div>
        <div className="flex flex-col items-center gap-1 border-2 border-rosa rounded-lg px-1 py-1">
          <LiaFileDownloadSolid style={{color:'var(--rosa)', width:25, height:25}} />
          <p className='text-rosa text-xs'>Descarga tu diploma</p>
        </div>
        <div className="flex flex-col items-center gap-1 border-2 border-morado rounded-lg px-1 py-1">
          <LiaFileDownloadSolid style={{color:'var(--morado)', width:25, height:25}} />
          <p className='text-morado text-xs'>Descarga tu carnet</p>
        </div>
      </div>
    </div>
  )
}
export default Certificados