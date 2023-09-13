//  interactuar con la API y actualizar la interfaz de usuario


document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
    const addUserForm = document.getElementById("add-user-form");

    // Función para cargar la lista de usuarios
    function loadUsers() {
        fetch("/api/usuario")
            .then(response => response.json())
            .then(data => {
                userList.innerHTML = "";
                data.forEach(user => {
                    const listItem = document.createElement("li");
                    listItem.textContent = `${user.nombre} - Teléfono: ${user.telefono} - Enroll: ${user.enroll}`;
                    userList.appendChild(listItem);
                });
            })
            .catch(error => console.error(error));
    }

    // Cargar la lista de usuarios al cargar la página
    loadUsers();

    // Agregar un nuevo usuario
    addUserForm.addEventListener("submit", event => {
        event.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const enroll = document.getElementById("enroll").checked;

        fetch("/api/usuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, telefono, enroll: enroll.toString() })
        })
        .then(response => response.json())
        .then(data => {
            loadUsers();
            addUserForm.reset();
        })
        .catch(error => console.error(error));
    });
});
