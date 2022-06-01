import { useState, ChangeEvent } from "react"
import { useContextMovie } from "../../../contexts/MovieContext"
import { Input } from "./styles"


export default function InputSearch() {
  const [query, setQuery] = useState('')

  const { addFilter } = useContextMovie()

  const handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)

    addFilter('movieName', e.target.value)
  }

  return (
    <>
      <Input
        value={query}
        onChange={handleInputChange}
        placeholder='Pesquise o filme aqui!'
      />
    </>
  )         
}