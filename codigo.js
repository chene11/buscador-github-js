const buscarUsuario = async () => {    
    const inputUsuario = document.getElementById("inputUsuario").value;
    
    if(inputUsuario.trim() === ""){    
        alert("Por favor ingrese datos");
        return;
    }

    try {
        const respuesta = await fetch(`https://api.github.com/users/${inputUsuario}`);
        const datos = await respuesta.json();

        if(datos.message === "Not Found"){
            alert("Usuario no encontrado");
            return;
        }

        const { name, public_repos, avatar_url } = datos;
        const contenedor = document.getElementById("datosUsuario");
        contenedor.innerHTML = `
        <img src="${avatar_url}" width="100">
        <p>Nombre: ${name}</p>
        <p>Repositorios públicos: ${public_repos}</p>
            `;

    } catch (error) {
        console.log("Algo salió mal:", error);
    }
}