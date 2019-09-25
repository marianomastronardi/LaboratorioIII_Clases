window.addEventListener('load', ()=>{
document.getElementById('btnTraer').addEventListener('click', TraerTexto);

});

function TraerTexto(){
    alert("hola");
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{
        //aca va el codigo q maneja la peticion
        let info = document.getElementById('info');

        if(xhr.readyState == 4){
            if(xhr.status == 200){
                 //ok
                //info.innerText = xhr.responseText;
                  setTimeout(() =>{
                    let lista = JSON.parse(xhr.responseText);
                    info.innerHTML = "";
                    for(persona of lista){
                        info.innerHTML = `${persona.id} ${persona.nombre} ${persona.apellido} ${persona.email} ${persona.genero} <hr/>>`;
                    }    

                    info.innerHTML = '<img src="./img/969.gif" alt="spinner" />';
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
    xhr.open('GET', './personas.json', true);
    xhr.send();
    var tiempo = setTimeout(() => {
        xhr.abort();
        info.innerHTML = 'server busy';
    }, 4000)
};