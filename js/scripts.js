
const btnsend = document.querySelector('.button-primario')



//btnsend.addEventListener('click' , function(e) {
//    console.log(e);
//    e.preventDefault(); //Previene el evento por default
//    console.log("Enviando mensaje")
//})


//Eventos de los inputs y textarea o label

const data = {
    name: '',
    email: '',
    message: ''
}


const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const form = document.querySelector(".form")

name.addEventListener('input', readText);

email.addEventListener('input', readText);

message.addEventListener('input', readText);

form.addEventListener('submit', function(e){
    e.preventDefault();

    //validar formulario
    const { name,email,message } = data

    if (name === '' || email === '' || message === '') {
        msgerror("Todos los campos son Obligatorios");
        return;
    }


    //Enviar formulario
    msgsend('Enviado')

});


function readText(e){
    data[e.target.id] = e.target.value;
    console.log(data)
}

//Mostrar mensaje de que se envio correctamente
function msgsend(msg){
    const alert = document.createElement('P');
    alert.textContent = msg;
    alert.classList.add('send');

    form.appendChild(alert);

    //Desaparezca el mensaje 5s despues de mostrarse
    setTimeout(() => {
        alert.remove();
    },5000)

}

//mostrar error en pantalla
function msgerror(msg){
    const error = document.createElement('P');
    error.textContent = msg;
    error.classList.add('error');

    form.appendChild(error);

    //Desaparezca el mensaje 5s despues de mostrarse
    setTimeout(() => {
        error.remove();
    },5000)
    

};

