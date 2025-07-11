import { useState } from 'react';

const FormularioUsuario = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    usuario: '',
    contrasenia: '',
    fechaNacimiento: '',
    locacion: ''
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario comienza a escribir
    if (errores[name]) {
      setErrores(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validarFormulario = () => {
    const nuevosErrores = {};
    
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre es requerido';
    }
    
    if (!formData.usuario.trim()) {
      nuevosErrores.usuario = 'El nombre de usuario es requerido';
    } else if (formData.usuario.length < 4) {
      nuevosErrores.usuario = 'El usuario debe tener al menos 4 caracteres';
    }
    
    if (!formData.contrasenia) {
      nuevosErrores.contrasenia = 'La contraseña es requerida';
    } else if (formData.contrasenia.length < 6) {
      nuevosErrores.contrasenia = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    if (!formData.fechaNacimiento) {
      nuevosErrores.fechaNacimiento = 'La fecha de nacimiento es requerida';
    } else {
      const fechaNacimiento = new Date(formData.fechaNacimiento);
      const hoy = new Date();
      let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
      const mes = hoy.getMonth() - fechaNacimiento.getMonth();
      
      if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
      }
      
      if (edad < 18) {
        nuevosErrores.fechaNacimiento = 'Debes ser mayor de 18 años';
      }
    }
    
    if (!formData.locacion.trim()) {
      nuevosErrores.locacion = 'La ubicación es requerida';
    }
    
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validarFormulario()) {
      // Aquí iría la lógica para enviar los datos
      console.log('Datos del formulario:', formData);
      alert('¡Registro exitoso!');
      
      // Limpiar el formulario después del envío
      setFormData({
        nombre: '',
        usuario: '',
        contrasenia: '',
        fechaNacimiento: '',
        locacion: ''
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
          Registro de Usuario
        </h2>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Campo Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
              Nombre completo
            </label>
            <div className="mt-1">
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-2 border ${errores.nombre ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="Ingresa tu nombre completo"
              />
              {errores.nombre && (
                <p className="mt-1 text-sm text-red-600">{errores.nombre}</p>
              )}
            </div>
          </div>

          {/* Campo Usuario */}
          <div>
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">
              Nombre de usuario
            </label>
            <div className="mt-1">
              <input
                id="usuario"
                name="usuario"
                type="text"
                value={formData.usuario}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-2 border ${errores.usuario ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="Crea un nombre de usuario"
              />
              {errores.usuario && (
                <p className="mt-1 text-sm text-red-600">{errores.usuario}</p>
              )}
            </div>
          </div>

          {/* Campo Contraseña */}
          <div>
            <label htmlFor="contrasenia" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <div className="mt-1">
              <input
                id="contrasenia"
                name="contrasenia"
                type="password"
                value={formData.contrasenia}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-2 border ${errores.contrasenia ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="Crea una contraseña segura"
              />
              {errores.contrasenia ? (
                <p className="mt-1 text-sm text-red-600">{errores.contrasenia}</p>
              ) : (
                <p className="mt-1 text-xs text-gray-500">Mínimo 6 caracteres</p>
              )}
            </div>
          </div>

          {/* Campo Fecha de Nacimiento */}
          <div>
            <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700">
              Fecha de Nacimiento
            </label>
            <div className="mt-1">
              <input
                id="fechaNacimiento"
                name="fechaNacimiento"
                type="date"
                value={formData.fechaNacimiento}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-2 border ${errores.fechaNacimiento ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
              {errores.fechaNacimiento && (
                <p className="mt-1 text-sm text-red-600">{errores.fechaNacimiento}</p>
              )}
            </div>
          </div>

          {/* Campo Ubicación */}
          <div>
            <label htmlFor="locacion" className="block text-sm font-medium text-gray-700">
              Ubicación
            </label>
            <div className="mt-1">
              <input
                id="locacion"
                name="locacion"
                type="text"
                value={formData.locacion}
                onChange={handleChange}
                className={`appearance-none block w-full px-3 py-2 border ${errores.locacion ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                placeholder="Ciudad, País"
              />
              {errores.locacion && (
                <p className="mt-1 text-sm text-red-600">{errores.locacion}</p>
              )}
            </div>
          </div>

          {/* Botón de Envío */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioUsuario;