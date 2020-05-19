/* global fetch */

function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

class Email{
    static validar() {
        const formData = new FormData();
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const mail = document.getElementById('mail').value;
        const telefono = document.getElementById('telefono').value;
        const contacto = document.getElementById('motivo').value;
        const comentario = document.getElementById('comentario').value;

        const expresion = /\w+@\w+\.+[a-z]/;

        if (nombre === "" || apellido === "" || mail === "" || telefono === "" || contacto === "" || comentario === "") {
            if (nombre === "") {
                document.getElementById('errorNombre').innerHTML = "<span>¡Campo obligatorio!</span>";
            } else {
                document.getElementById('errorNombre').innerHTML = "";
                if (nombre.length > 15) {
                    document.getElementById('errorNombre').innerHTML = "<span>¡El nombre es demasiado largo!</span>";
                }
            }
            if (apellido === "") {
                document.getElementById('errorApellido').innerHTML = "<span>¡Campo obligatorio!</span>";
            } else {
                document.getElementById('errorApellido').innerHTML = "";
                if (apellido.length > 15) {
                    document.getElementById('errorApellido').innerHTML = "<span>¡El apellido es demasiado largo!</span>";
                }
            }
            if (mail === "") {
                document.getElementById('errorEmail').innerHTML = "<span>¡Campo obligatorio!</span>";
            } else {
                document.getElementById('errorEmail').innerHTML = "";
                if (mail.length > 35) {
                    document.getElementById('errorEmail').innerHTML = "<span>¡El Mail es demasiado largo!</span>";
                } else if (!expresion.test(mail)) {
                    document.getElementById('errorEmail').innerHTML = "<span>¡El mail no es del formato correcto!</span>";
                }
            }
            if (telefono === "") {
                document.getElementById('errorTelefono').innerHTML = "<span>¡Campo obligatorio!</span>";
            } else {
                document.getElementById('errorTelefono').innerHTML = "";
                if (telefono.length > 10) {
                    document.getElementById('errorTelefono').innerHTML = "<span>¡El telefono es demasiado largo!</span>";
                } else if (isNaN(email.telefono)) {
                    document.getElementById('errorTelefono').innerHTML = "<span>¡El telefono debe ser numerico!</span>";
                }
            }
            if (contacto === "") {
                document.getElementById('errorContacto').innerHTML = "<span>¡Campo obligatorio!</span>";
            } else {
                document.getElementById('errorContacto').innerHTML = "";
                if (contacto.length > 40) {
                    document.getElementById('errorContacto').innerHTML = "<span>¡El asunto de contacto es demasiado largo!</span>";
                }
            }
            if (comentario === "") {
                document.getElementById('errorComentario').innerHTML = "<span>¡Campo obligatorio!</span>";
            } else {
                document.getElementById('errorComentario').innerHTML = "";
            }
        } else if (nombre.length > 15 || apellido.length > 15 || length > 35 || !expresion.test(mail) || contacto.length > 40 || telefono.length > 10 || isNaN(telefono)) {
            if (nombre.length > 15) {
                document.getElementById('errorNombre').innerHTML = "<span>¡El nombre es demasiado largo!</span>";
            } else {
                document.getElementById('errorNombre').innerHTML = "";
            }
            if (apellido.length > 15) {
                document.getElementById('errorApellido').innerHTML = "<span>¡El apellido es demasiado largo!</span>";
            } else {
                document.getElementById('errorApellido').innerHTML = "";
            }
            if (mail.length > 35) {
                document.getElementById('errorEmail').innerHTML = "<span>¡El Mail es demasiado largo!</span>";
            } else if (!expresion.test(mail)) {
                document.getElementById('errorEmail').innerHTML = "<span>¡El mail no es del formato correcto!</span>";
            } else {
                document.getElementById('errorEmail').innerHTML = "";
            }
            if (contacto.length > 40) {
                document.getElementById('errorContacto').innerHTML = "<span>¡El asunto de contacto es demasiado largo!</span>";
            } else {
                document.getElementById('errorContacto').innerHTML = "";
            }
            if (telefono.length > 10) {
                document.getElementById('errorTelefono').innerHTML = "<span>¡El telefono es demasiado largo!</span>";
            } else if (isNaN(telefono)) {
                document.getElementById('errorTelefono').innerHTML = "<span>¡El telefono debe ser numerico!</span>";
            } else {
                document.getElementById('errorTelefono').innerHTML = "";
            }
        } else {
            formData.append('nombre', nombre)
            formData.append('apellido', apellido)
            formData.append('mail', mail)
            formData.append('telefono', telefono)
            formData.append('contacto', contacto)
            formData.append('comentario', comentario)
            fetch("php/email.php", {
                method: 'POST', 
                body: formData
            })
            .then(function (response) {
                return response.text();
            })
            Email.modalEd();
            document.querySelector("#aceptarEditarButton").addEventListener('click', function () {
                location.reload();
            });
        }
    }
    
    static modalEd() {
        let mascara = document.getElementById('lamascara');
        mascara.style.display = "block";
    }
}
