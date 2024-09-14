"use client"
import { useState } from "react"

const Form = () => {
    
    const [form, setForm] = useState({
        name: "",
        age : "",
        address : "",
    })
console.log(form)
    const handleChange = () => {
        setForm({
            name: "hello",
            age: "20",
            address: "kathmandu",
        }) 
    }

const form2 = {
    name: "",
    age : "",
    address : "",
}

console.log(form,form2)

const handleChangeForm2 = () => {
    form2.name = "helloform2"
    form2.address = "kathmandu2"
    form2.age = "202"
}

return (
    <>
    <button onClick={handleChange}>Submit form 1</button>
    <button onClick={handleChangeForm2}>Submit Form 2</button>
    </>
    
)

}

export default Form