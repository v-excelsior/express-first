import axios from 'axios'

const server = axios.create({
  baseURL: 'http://localhost:3009/',
});

export const request = async (type) => {
  const res = await server.get(type)

  return res.data
}