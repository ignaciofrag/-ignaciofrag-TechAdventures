let usuarios = [
    { id: 1, nombre: "Usuario 1" },
    { id: 2, nombre: "Usuario 2" }
  ];
  
  const tokenValido = "tokenSecret"; // DEMO de token de autenticación
  
  // Función para simular la autenticación
  function autenticar(token) {
    return token === tokenValido;
  }
  
  // METODO GET!: Obtener usuarios
  function obtenerUsuarios(token) {
    if (!autenticar(token)) {
      console.log("Acceso denegado");
      return;
    }
    console.log("Usuarios:", usuarios);
  }
  
  // METODO POST!: Crear un usuario
  function crearUsuario(token, usuario) {
    if (!autenticar(token)) {
      console.log("Acceso denegado");
      return;
    }
    usuarios.push(usuario);
    console.log("Usuario creado:", usuario);
  }
  
  // METODO PUT!: Actualizar un usuario
  function actualizarUsuario(token, id, nombre) {
    if (!autenticar(token)) {
      console.log("Acceso denegado");
      return;
    }
    const index = usuarios.findIndex(usuario => usuario.id === id);
    if (index !== -1) {
      usuarios[index].nombre = nombre;
      console.log("Usuario actualizado:", usuarios[index]);
    } else {
      console.log("Usuario no encontrado");
    }
  }
  
  // METODO DELETE: Eliminar un usuario
  function eliminarUsuario(token, id) {
    if (!autenticar(token)) {
      console.log("Acceso denegado");
      return;
    }
    usuarios = usuarios.filter(usuario => usuario.id !== id);
    console.log("Usuario eliminado");
  }
  
  // DEMOS de uso
  obtenerUsuarios("tokenSecret");
  crearUsuario("tokenSecret", { id: 3, nombre: "Usuario 3" });
  actualizarUsuario("tokenSecret", 3, "Usuario Tres");
  eliminarUsuario("tokenSecret", 1);
  