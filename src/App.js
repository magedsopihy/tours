import React, { useState, useEffect } from 'react'

import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

const App = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchTours = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setData(tours)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchTours()
    setLoading(false)
  }, [])

  const removeTour = (id) => {
    const newData = data.filter((tour) => tour.id !== id)
    setData(newData)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <main>
      <Tours tours={data} removeTour={removeTour} />
    </main>
  )
}

export default App
