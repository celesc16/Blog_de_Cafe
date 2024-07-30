
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

    if (name === '' || email === '' || message === '' ) {
        showAlert("Todos los campos son Obligatorios" ,true);
        return;
    }
    //Enviar formulario
    showAlert('Enviado')

});


function readText(e){
    data[e.target.id] = e.target.value;
    console.log(data)
}

function showAlert(msg, error = null){
    const alert = document.createElement('P');
    alert.textContent = msg;

    if(error) {
        alert.classList.add('error')
    }else{
        alert.classList.add('send')
    }

    form.appendChild(alert)

    setTimeout(() => {
        alert.remove();
    },5000)
    


}
