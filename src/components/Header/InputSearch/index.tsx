import { useState, ChangeEvent } from "react"
import { Input } from "./styles"

export default function InputSearch() {

  const [query ,setQuery] = useState('')


  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setQuery(e.target.value)
  }

  return (
    <>
     <Input value={query} onChange={handleInputChange} placeholder='Pesquise o filme aqui!'/>
    </>
  )
}