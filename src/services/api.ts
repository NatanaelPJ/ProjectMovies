import axios from "axios"
import { api_key } from "../config/keys"

export const api = axios.create({
  baseURL:'https://api.themoviedb.org/3/movie/popular',
  params:{
    api_key: api_key,
    language:'pt-BR',
    include_image_language: 'en,null'
  }
})