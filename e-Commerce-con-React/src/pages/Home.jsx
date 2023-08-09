import { Link } from 'react-router-dom'
import '@/styles/home.css'

const Home = () => {
  return (

    <>
      <div className='categoria'>

        <div className='col-lg-4'>
          <div className='logo-card'>
            <img className='logo-imagen' src='https://img.freepik.com/free-vector/creative-computer-logo-template_23-2149213537.jpg?w=740&t=st=1691417385~exp=1691417985~hmac=70a1c846d0967edadb92252c61cf80b019e704631d00e4bfed8132c005f37890' alt='Computers' />
          </div>
          <h5 className='fw-normal'>Computers</h5>
          <Link>
            <button className='boton'>View details »</button>
          </Link>
        </div>

        <div className='col-lg-4'>
          <div className='logo-card'>
            <img className='logo-imagen' src='https://img.freepik.com/free-psd/vr-video-game-composition_1419-2358.jpg?w=740&t=st=1691417614~exp=1691418214~hmac=fcf5233ac4a0e43e8fcb2aaed19989e31552f457b9f5b30d85314d784f5d6056' alt='Games' />
          </div>
          <h5 className='fw-normal'>Games</h5>
          <Link>
            <button className='boton'>View details »</button>
          </Link>
        </div>

        <div className='col-lg-4'>
          <div className='logo-card'>
            <img className='logo-imagen' src='https://img.freepik.com/free-vector/sport-equipment-concept_1284-13034.jpg?size=626&ext=jpg&ga=GA1.2.755501378.1691417384&semt=sph' alt='Sports' />
          </div>
          <h5 className='fw-normal'>Sports</h5>
          <Link>
            <button className='boton'>View details »</button>
          </Link>
        </div>

        <div className='col-lg-4'>
          <div className='logo-card'>
            <img className='logo-imagen' src='https://img.freepik.com/free-psd/colorful-kids-text-effect_17005-1390.jpg?size=626&ext=jpg&ga=GA1.2.755501378.1691417384&semt=sph' alt='Kids' />
          </div>
          <h5 className='fw-normal'>Kids</h5>
          <Link>
            <button className='boton'>View details »</button>
          </Link>
        </div>

        <div className='col-lg-4'>
          <div className='logo-card'>
            <img className='logo-imagen' src='https://img.freepik.com/free-photo/closeup-electronic-circuit-board-with-cpu-microchip-electronic-components-background_1387-819.jpg?size=626&ext=jpg&ga=GA1.2.755501378.1691417384&semt=sph' alt='Electronics' />
          </div>
          <h5 className='fw-normal'>Electronics</h5>
          <Link>
            <button className='boton'>View details »</button>
          </Link>
        </div>

        <div className='col-lg-4'>
          <div className='logo-card'>
            <img className='logo-imagen' src='https://img.freepik.com/free-vector/circle-background-with-colorful-musical-notes_23-2147634363.jpg?size=626&ext=jpg&ga=GA1.2.755501378.1691417384&semt=sph' alt='Music' />
          </div>
          <h5 className='fw-normal'>Music</h5>
          <Link>
            <button className='boton'>View details »</button>
          </Link>
        </div>

        <div className='col-lg-4'>
          <div className='logo-card'>
            <img className='logo-imagen' src='https://t4.ftcdn.net/jpg/02/67/29/93/360_F_267299376_Rwmrov0JGO5savkHry0J2ySMhlDd5bJN.jpg' alt='Grocery' />
          </div>
          <h5 className='fw-normal'>Grocery</h5>
          <Link>
            <button className='boton'>View details »</button>
          </Link>
        </div>

        <div className='col-lg-4'>
          <div className='logo-card'>
            <img className='logo-imagen' src='https://static.vecteezy.com/system/resources/previews/003/699/075/original/medical-health-logo-design-for-business-and-company-vector.jpg' alt='Health' />
          </div>
          <h5 className='fw-normal'>Health</h5>
          <Link>
            <button className='boton'>View details »</button>
          </Link>
        </div>

        <div className='col-lg-4'>
          <div className='logo-card'>
            <img className='logo-imagen' src='https://static.vecteezy.com/system/resources/previews/008/325/947/original/mechanic-tool-logo-icon-design-free-vector.jpg' alt='Tools' />
          </div>
          <h5 className='fw-normal'>Tools</h5>
          <Link>
            <button className='boton'>View details »</button>
          </Link>
        </div>

      </div>
    </>
  )
}
export default Home
