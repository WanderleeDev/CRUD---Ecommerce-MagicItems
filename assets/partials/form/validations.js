import '@/partials/form/form.scss';
//objeto que contendrá los datos del usuario nuevo
const newUser ={};
//conversion a json
const jsonUser = JSON.stringify(newUser);


//delegación de eventos
const validityForm= ()=>{
  //contenedor principal de los formularios
  const bodyForm = document.querySelector('.mainFormsContainer');
  //Selección de todos los inputs que se encuentren solo en el formulario de registro dentro del fieldset
  const inputs = document.querySelectorAll('#registrationForm .form-data .form-input');
  //selección de todos los label de ambos formularios
  const labelForms = document.querySelectorAll('.form-label');
  
  //cambiar formulario entre registrarse e iniciar sesión
  bodyForm.addEventListener('click',(event)=>{

    const loginForm =document.querySelector('.formSection-login');
    const registerForm =document.querySelector('.formSection-register');
  
      if (event.target.classList.contains('formChangeBtn')) {
        loginForm.style.display = (loginForm.style.display === 'none') ? 'grid' : 'none';
        registerForm.style.display = (registerForm.style.display === 'grid') ? 'none' : 'grid';
      }
  });
  
  //aplicar estilos base a los labels de los formularios de registro y login
  bodyForm.addEventListener('focusin', (event)=>{
    
    if (event.target.classList.contains('form-input')) {
      const input = event.target;
      const label = input.previousElementSibling; //selecciona al nodo previo(mismo nivel)

      label.classList.add('form-label--translateY');

      input.addEventListener('blur',()=>{
        (input.value === "") ? label.classList.remove('form-label--translateY'): null;
      });
    }
  });
  
  //objeto con los regex y mensajes de error
  const validaciones={
    register : Object.freeze({
      name:{
        regex: /^[a-zA-Z]{3,}\s?([a-zA-Z]+)+$/,
        errorPattern: "Mínimo 3 caracteres sin tildes ni caracteres especiales(@$%&!)",
      },     
      surname:{
        regex: /^[a-zA-Z]{3,}\s?([a-zA-Z]+)+$/,
        errorPattern: "Mínimo 3 caracteres sin tildes ni caracteres especiales(@$%&!)"
      }, 
      password:{
        regex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[0-9])(?=.*[@%#$%^&+=])\S{10,15}$/,
        errorPattern: "Debe contener minúsculas,mayúsculas,números, algún carácter especial longitud minima 10 y maxima 15 caracteres "
      }, 
      age:{
        regex: /^(1[89]|[2-9][0-9])$/,
        errorPattern: "Edad minima 18"
      },
      email:{
        regex: /^[^\s@]+@[^\s@%+]+\.[^\s\d@%+]{3,}$/,
        errorPattern: "No se debe comenzar con un carácter especial o vacío"
      }, 
      phone: {
        regex: /^[+](\d+)\s(\d+\s?){9,}$/,
        errorPattern: "Especifique el código del país seguido de su numero espacios opcionales (+XXX xxx xxx xxx)"
      }
    }),
    login : {
  
    }
  }

  //constante con la función de validación
  const validateByJs = (target)=>{
    const regex = validaciones.register[target.name].regex;
    const errorMessage = validaciones.register[target.name].errorPattern;
    
    target.addEventListener('keyup', ()=>{
  
      if (regex.test(target.value)) {
        target.classList.add('form-inputValid');
        target.classList.remove('form-inputInvalid');
        target.setCustomValidity('');
        newUser[target.name] = [target.value];
        console.log(newUser);

      }else{
        target.classList.remove('form-inputValid');
        target.classList.add('form-inputInvalid');
        target.setCustomValidity(errorMessage);
        target.reportValidity();
      }
    });
  }

  //reiniciar estilos de los inputs al dar click al btn de restablecer
  bodyForm.addEventListener('click', (event)=>{
      if (event.target.classList.contains('form-resetBtn')) {
  
        labelForms.forEach(label => {
          label.classList.remove('form-label--translateY');
          label.nextElementSibling.classList.remove('form-inputInvalid','form-inputValid');
          label.nextElementSibling.value= "";
        });
      }
  });


  
  //adición del la función de validación a cada input de registro
  inputs.forEach(e => {
    validateByJs(e)
  });
}


validityForm();