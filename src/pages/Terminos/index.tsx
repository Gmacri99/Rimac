
import { BtnBack } from '../../common/btnBack'
import { useRedirect } from '../../hooks/useRedirect';
import './styles.scss' 

export const Terminos=()=> {
  
  const {logout} = useRedirect();

  return (
    <section className='col-12 HeroSection'>
      <div className='boxContainer TerminosSection'>
        <div className='heroPlan__containerButton'> <BtnBack onClick={logout} name='BackSvgMorado' text='Volver'/></div>
        <h1>Términos y Condiciones de Uso</h1>
        <h2>1. Introducción</h2>
        <p>
            Bienvenido a nuestro sitio web. Al acceder y utilizar este sitio, aceptas cumplir con los presentes Términos y Condiciones. 
            Por favor, lee cuidadosamente este documento antes de continuar.
        </p>
        <h2>2. Uso del sitio</h2>
        <p>
            El usuario se compromete a utilizar el sitio para fines lícitos y de acuerdo con las leyes vigentes. 
            Está prohibido usar el sitio para actividades fraudulentas, ilegales o que dañen la integridad del sistema.
        </p>
        <h2>3. Propiedad Intelectual</h2>
        <p>
            Todos los contenidos publicados en este sitio, incluyendo textos, imágenes, logotipos y software, son propiedad exclusiva de la empresa y están protegidos por las leyes de propiedad intelectual.
        </p>
        <h2>4. Limitación de Responsabilidad</h2>
        <p>
            No garantizamos la disponibilidad continua del sitio ni la ausencia de errores. En ningún caso seremos responsables por daños directos o indirectos derivados del uso del sitio.
        </p>
        <h2>5. Modificaciones de los Términos</h2>
        <p>
            Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones serán publicadas en esta misma página y tendrán efecto inmediato.
        </p>
        <h2>6. Contacto</h2>
        <p>
            Para cualquier duda o consulta sobre estos Términos y Condiciones, puedes contactarnos a través del correo: soporte@ejemplo.com.
        </p>
      </div>
    </section>
  )
}

