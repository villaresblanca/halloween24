// Modal imagen Hogar Jubilado
    //obtener los elemntos
    var modal = document.getElementById("modal-jubilado");
    var img = document.getElementById("img-jubilado");
    var modalImg = document.getElementById("img-modal-jubilado");
    var span = document.getElementsByName("close")[0];

    // Al hacer click en la imagen, se muestra el modal
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src; // Carga la imagen clicada en el modal
    }

    // Al hacer click en la "X" se cierra el modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // Para que se cierre la imagen haciendo clik fuera de esta y no en la "X"
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
