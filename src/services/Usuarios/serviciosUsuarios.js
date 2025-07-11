import api from "../EventManager";

const serviciosUsuarios = {
    getAllUsers: () => api.get("/usuarios"),
    getUserById: (id) => api.get(`/usuarios/${id}`),
    createUser: (user) => api.post("/usuarios", user),
    updateUser: (id, user) => api.put(`/usuarios/${id}`, user),
    deleteUser: (id) => api.delete(`/usuarios/${id}`)
}

export default serviciosUsuarios;