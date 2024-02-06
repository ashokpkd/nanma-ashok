import { useEffect, useState } from "react"

const useCustomGetApi = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState('')
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        setErrors(error.message)
      }
      setTimeout(() => {
        setLoading(false)
      },2000)
    }
    fetchData()
  }, [url])
  return {data,loading,errors}
  
}

export default useCustomGetApi