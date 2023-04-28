window.sr = ScrollReveal({ reset: true});
sr.reveal('h2', { 
    duration: 1000,
    rotate: {x:0, y:80, z:0}
});

const btCor = document.querySelector(".btn");
btCor.addEventListener('click', function(){
    let bodyCor = document.querySelector("body");
    let headCor = document.querySelector(".head");
    let footerCor = document.querySelector("footer");
    let btnImg = document.querySelector('.btn');
    
    if(bodyCor.classList.contains('dark')){
       bodyCor.classList.replace('dark', 'light');
       headCor.classList.replace('dark', 'light');
       footerCor.classList.replace('dark', 'footerlight');
       btnImg.classList.replace('btnlight', 'btndark');
       
    }
    else if(bodyCor.classList.contains('light')){
        bodyCor.classList.replace('light', 'dark');
        headCor.classList.replace('light', 'dark');
        footerCor.classList.replace('footerlight', 'dark');
        btnImg.classList.replace('btndark', 'btnlight');
        
    }
    
})
    
const barRestaurante = document.querySelector('.bar-restaurante')
const copaGarcon = document.querySelector(".copinha-garcon");
const cozNovotel = document.querySelector(".cozinha-novotel");
const acougue = document.querySelector(".acougue");
const camarafira = document.querySelector(".camara-fria");
const areaLavagem = document.querySelector(".area-lavagem");
const almoxNovotel = document.querySelector(".almoxarifado-novotel");
const almoxIbis = document.querySelector(".almoxarifado-ibis");
const areaLixo = document.querySelector(".area-lixo");
const refeitorio = document.querySelector(".refeitorio");
const vestiarios = document.querySelector(".vestiarios");
const copaEventos = document.querySelector(".copinha-eventos");

const i = document.querySelector("#input");
i.addEventListener('keyup', function(e){
    let input = document.querySelector("#input");
    let textInput = input.value;
    
    let select = document.querySelector('#select');
    let option = select.options[select.selectedIndex].value;

    switch(option){
        case 'vazio':
            alert('selecione o local');
        break;
        case 'bar-restaurante':
            option = barRestaurante;
        break;
        case 'copinha-garcon':
            option = copaGarcon;
        break;
        case 'cozinha-novotel':
            option = cozNovotel;
        break;
        case 'acougue':
            option = acougue;
        break;
        case 'camara-fria':
            option = camarafira;
        break;
        case 'area-lavagem':
            option = areaLavagem;
        break;
        case 'almoxarifado-novotel':
            option = almoxNovotel;
        break;
        case 'almoxarifado-ibis':
            option = almoxIbis;
        break;
        case 'area-lixo':
            option = areaLixo
        case 'refeitorio':
            option = refeitorio;
        break;
        case 'vestiarios':
            option = vestiarios;
        break;
        case 'copinha-eventos':
            option = copaEventos;
        break;
        
    }

    let eventLocal =  option;
    let newli =  document.createElement('li');
    let checkbox = document.createElement('input');
    let p = document.createElement('p');
    checkbox.type = 'checkbox';
    

    //newli.innerText = textInput;
    p.innerText = textInput;
    if(e.key == 'Enter'){
        if(textInput){
            eventLocal.appendChild(newli);
            newli.appendChild(checkbox);
            newli.appendChild(p)
            
        }else{
            alert('campo vazio');
        }
        input.value = '';
     
    }  
    
})

document.addEventListener('click', function(e){
    let list = document.querySelectorAll('li')
    

    if(e.target.tagName == "INPUT"){
        for(let i=0; i<list.length; i++){
            if(list[i].children[0].checked){
            let result = confirm("ITEM RESOLVIDO ?\n" + list[i].innerText)
            if(result === true){
                console.log('removido')
                list[i].parentNode.removeChild(list[i])
            }else{
                console.log('nao removido')
            }
            }
    
        }
    }

})


/* 

let list =[]
let listchild = []
let li = []

let typemeuitem = []
let listCheckBox = []
let lista = document.querySelector('main');
for(let i=0; i<lista.children.length; i++){

    if(lista.children[i].tagName == "UL"){
        list.push(lista.children[i])
   }
}

    list.forEach(function(item){
        listchild.push((item.children))
    })

    listchild.forEach(function(item){

        for(let i=0; i<item.length; i++){
            li.push(item[i])
            
        }
    })
    for(let i=0; i<li.length; i++){
        if(li[i].tagName=="LI"){
            typemeuitem.push(li[i])
        }
    }

    for(let i=0; i<typemeuitem.length; i++){
        if(typemeuitem[i].tagName=="INPUT"){
            console.log('entrei')
        }
    }
  
    
*/
     
