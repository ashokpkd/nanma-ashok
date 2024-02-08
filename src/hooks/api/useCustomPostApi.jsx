import { useState } from "react"

const useCustomPostApi = ({ url = '', errorCB = () => { }, successCB = () => { } }) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState('')
     
    const postData = async ({ body = {} }) => {
        setLoading(true)
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            console.log(response)
            if (response.ok) {
                const jsonData = await response.json();
                console.log(jsonData, 'jsonData')
                if (jsonData.sts === '00') {
                    alert('fetching error')
                    throw new Error(JSON.stringify(jsonData))
                }
                if (jsonData.sts === '01') {
                    alert(jsonData.msg)
                    setData(jsonData)
                    successCB({data:jsonData})
                }
            }
        } catch (error) {
            errorCB(error)
            alert(error);
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }
        return { data, loading, errors, postData };
    }

export default useCustomPostApi