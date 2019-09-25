window.addEventListener('load', ()=>{
document.forms[0].addEventListener('submit', EnviarDatos);

});

function EnviarDatos(e){

    e.preventDefault();
    
    let data = traerDatos(e.target);
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{
        //aca va el codigo q maneja la peticion
        let info = document.getElementById('info');

        if(xhr.readyState == 4){
            if(xhr.status == 200){
                 //ok
                //info.innerText = xhr.responseText;
                  setTimeout(() =>{
                      info.innerText = xhr.responseText;
                    clearTimeout(tiempo);
                  }, 3000);  
            }   
            else{
                console.log(`Error:  ${xhr.status} - ${xhr.statusText}`);
            } 
        }
        else{
            info.innerHTML = '<img src="./img/969.gif" alt="spinner" />';
        }
    }
    xhr.open('GET', './servidor.php?' + data, true);
    xhr.send();
    var tiempo = setTimeout(() => {
        xhr.abort();
        info.innerHTML = 'server busy';
    }, 4000)
};

function traerDatos(form){
    let nombre = form.nombre.value;
    let apellido = form.apellido.value;

    return `nombre=${nombre}&apellido=${apellido}`;
}

//https://mockaroo.com/
//https://icons8.com/preloaders/en/money_finance