import { useState, useEffect } from 'react'
import { useAuthContext } from '@/hooks/useAuthContext'
import { getMeUserService } from '@/services/userServices'
import '@/styles/Secret.css'

const Secret = () => {
  const { userPayload } = useAuthContext()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMeUserService(userPayload.id)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.error('Ocurrio un error en Dashboard', error.message)
      }
    }
    fetchUserData()
  }, [userPayload?.id])

  return (
    <>
      <div className='card-1'>

        <div className='card'>
          <img src='https://i.pinimg.com/564x/4f/14/38/4f1438203ed65f2abbf255f335db60fc.jpg' alt='foto-de.perfil' />
          <div className='card-body'>
            <h4 className='card-title'>Nombre: {userData.first_name}</h4>
            <p className='card-text'>
              <h4>Apellido: {userData.last_name}</h4>
              <h4>correo: {userData.email}</h4>
              <h4>Genero: {userData.gender}</h4>
            </p>
            {userPayload?.role === 'ADMIN'
              ? <h4>Hola ADMIN</h4>
              : <h4>Hola CUSTOMER</h4>}
          </div>
        </div>

      </div>
    </>
  )
}
export default Secret
