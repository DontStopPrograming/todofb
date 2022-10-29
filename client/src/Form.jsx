import {useState} from 'react'

function Form(){

const [vnotes, setVnotes] = useState('')

    const handleOnChange = (e) => {
        e.preventDefault()
        setVnotes(e.target.value)
    }

    return(
        <>
            <form action="">
                <input type="text" onChange = {handleOnChange} value = {vnotes}/>
                <input type="submit" value = "Enviar"/>
            </form>
            <h1>Valor de notes: {vnotes} </h1> 
        </>
    )
}

export default Form