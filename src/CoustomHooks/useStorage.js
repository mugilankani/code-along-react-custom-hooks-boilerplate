import { useEffect } from "react"
import { useState } from "react"

const getValue =(key, defaultValue) => {
    let local = localStorage.getItem(key)
    let session = sessionStorage.getItem(key)

    if(local){
        return local
    }
    if(session){
        return session
    }
    return defaultValue
}

 const useStorage = (key, defaultValue) => {
    const [value , setValue] = useState(()=> getValue(key,defaultValue))

    useEffect(() => {
        localStorage.setItem(key, value)
        sessionStorage.setItem(key, value)
    }, [key,value])

    return [ value, setValue]



 }
 export default useStorage