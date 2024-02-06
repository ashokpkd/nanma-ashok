

const useCustomPostApi = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState('')
     
    const postData = async (value) => {
        setLoading(true)
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body:JSON.stringify(value),
            })
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json()
            setData(result)
        } catch (error) {
            setErrors(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    return { data, loading, errors, postData };
}

export default useCustomPostApi