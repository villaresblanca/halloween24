// Modal imagen Hogar Jubilado
    //obtener los elemntos
    var modal = document.getElementById("modal-jubilado");
    var img = document.getElementById("img-jubilado");
    var modalImg = document.getElementById("img-modal-jubilado");
    var span = document.getElementsByClassName("close")[0];

    // Al hacer click en la imagen, se muestra el modal
    img.onclick = function () {
        modal.style.display = "block";
        modal.classList.add("show"); //Añadir clase para iniciar la animación
        modalImg.src = this.src; // Carga la imagen clicada en el modal
    }

    // Al hacer click en la "X" se cierra el modal
    span.onclick = function () {
        modal.classList.remove("show"); //Quita la clase de la animación
        setTimeout(function() {
            modal.style.display = "none";
        }, 400); //Espera a que termine la animación antes de ocultar el modal
    }

    // Para que se cierre la imagen haciendo clik fuera de esta y no en la "X"
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.classList.remove("show"); //Quita la clase de animación
            setTimeout(function() {
                modal.style.display = "none";
            }, 400); //Espera a que terminela animación antes de ocultar el modal
        }
    }
