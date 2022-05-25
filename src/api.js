import axios from "axios";
const url ="http://localhost:8080/user";
export const create = user => axios.post("http://localhost:8080/user/register", user);
export const login = email => axios.post("http://localhost:8080/user/login", email); 


