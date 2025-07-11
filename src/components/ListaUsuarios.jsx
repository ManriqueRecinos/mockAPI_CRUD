// src/components/ListaUsuarios.jsx
import { useState, useEffect } from 'react';
import userService from '../services/Usuarios/ServiciosUsuarios';

const ListaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarUsuarios = async () => {
      try {
        const response = await userService.getAllUsers();
        setUsuarios(response.data);
      } catch (err) {
        console.error('Error al cargar usuarios:', err);
        setError('Error al cargar los usuarios');
      } finally {
        setIsLoading(false);
      }
    };

    cargarUsuarios();
  }, []);

  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-600">
        Cargando usuarios...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-center text-red-600 bg-red-100 rounded-md">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Lista de Usuarios</h2>
      {usuarios.length === 0 ? (
        <p>No hay usuarios registrados</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {usuarios.map((usuario) => (
            <div 
              key={usuario.id} 
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <h3 className="font-semibold text-lg">{usuario.nombre}</h3>
              <p className="text-gray-600">@{usuario.usuario}</p>
              {usuario.locacion && (
                <p className="text-sm text-gray-500 mt-1">
                  📍 {usuario.locacion}
                </p>
              )}
              {usuario.fechaNacimiento && (
                <p className="text-sm text-gray-500">
                  🎂 {new Date(usuario.fechaNacimiento).toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListaUsuarios;