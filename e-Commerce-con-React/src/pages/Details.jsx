import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const [detalles, setDetalles] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://commerce-qm56.onrender.com/details/${id}`)
      .then(Response => Response.json())
      .then(data => setDetalles(data))
      .catch(error => console.log(error))
  }, [id])

  if (!detalles) {
    return <div>Loading...</div>
  }

  return (

    <div>dkmsflksmfs</div>

  )
}
export default Details
