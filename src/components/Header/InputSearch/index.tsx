import { useState, ChangeEvent } from "react"
import { useContextMovie } from "../../../contexts/MovieContext"
import { Input } from "./styles"

export default function InputSearch() {
  const [query, setQuery] = useState('')
  const { addFilter } = useContextMovie()

  let handleInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    let currentValue = e.target.value
    setQuery(currentValue)
    addFilter('movieName', currentValue)
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