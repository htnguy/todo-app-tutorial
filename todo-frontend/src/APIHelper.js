import axios from "axios";

const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || 3000;
const BACKEND_HOST = process.env.REACT_APP_BACKEND_HOST || 'localhost';

const API_URL=`http://${BACKEND_HOST}:${BACKEND_PORT}/todos/`
async function createTodo(task) {
  const { data: newTodo } = await axios.post(API_URL, {
    task
  });
  return newTodo;
}

async function deleteTodo(id) {
  const message = await axios.delete(`${API_URL}${id}`);
  return message;
}

async function updateTodo(id, payload) {
  const {data:newTodo} = await axios.put(`${API_URL}${id}`, payload);
  return newTodo;
}

async function getAllTodos() {
  const { data: todos } = await axios.get(API_URL);
  return todos;
}

export default { createTodo, deleteTodo, updateTodo, getAllTodos };
