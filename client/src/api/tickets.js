import axios from 'axios'

const BASE = 'http://localhost:5000/api'

export const createTicket = (data) => axios.post(`${BASE}/tickets`, data)
export const getTickets = () => axios.get(`${BASE}/tickets`)
export const updateTicketStatus = (id, status) =>
  axios.patch(`${BASE}/tickets/${id}`, { status })