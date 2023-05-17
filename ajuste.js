//EFEITO CARROSSEL
$('.container-slider').slick({
    dots: true,
    arrows:false,
    speed:1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    responsive: [
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
                }],
});

//MENU HAMBURGUER

function clicou(){
    let burguer = document.querySelector('#burguer')
    let itens = document.querySelector('#itens')
    if(itens.style.display == 'block'){ 
        burguer.style.background = 'black'
        burguer.style.color = '#F7CA0F'
        burguer.style.boxShadow = 'none'
        burguer.style.right = '0'
        itens.style.display = 'none'        
    }
    else{
        itens.style.display = 'block'
        burguer.style.right = '200px'
        burguer.style.background = '#F7CA0F'
        burguer.style.color = 'black'
        burguer.style.boxShadow = ' 0 0 15px #F7CA0F, inset 0 0 15px #F7CA0F'
    }
}

//BOTÕES
//sobre
const botaoSobre = document.querySelector('#sobre');
const sectionSobre = document.querySelector('.sobre');

botaoSobre.addEventListener('click' , () =>{
    sectionSobre.scrollIntoView({behavior:'smooth'});
})

//horario
const botaoHora = document.querySelector('#hora');
const sectionHora = document.querySelector('.horarios');

botaoHora.addEventListener('click' , () =>{
    sectionHora.scrollIntoView({behavior:'smooth'});
})

//planos
const botaoPlano = document.querySelector('#planos');
const sectionPlano = document.querySelector('.planos');

botaoPlano.addEventListener('click' , () =>{
    sectionPlano.scrollIntoView({behavior:'smooth'});
})

//depoimentos
const botaoHate = document.querySelector('#hate');
const sectionHate = document.querySelector('.depoimentos');

botaoHate.addEventListener('click' , () =>{
    sectionHate.scrollIntoView({behavior:'smooth'});
})

//TELA
window.addEventListener('resize', mudouTamanho);

function mudouTamanho(){
    let banner = document.querySelector('#cartaz');
    if(window.innerWidth > 768){
        banner.setAttribute('src','imagens/Banner_Neon_Gym.jpg');
        banner.style.width = ('100vw');
    }
    else{
        banner.setAttribute('src','imagens/Cartaz_Neon_Gym.png');
        banner.style.width = ('100vw');
    }
}

window.addEventListener('load', mudouTamanho);

function mudouTamanho(){
    let banner = document.querySelector('#cartaz');
    if(window.innerWidth > 768){
        banner.setAttribute('src','imagens/Banner_Neon_Gym.jpg');
        banner.style.width = ('100vw');
    }
    else{
        banner.setAttribute('src','imagens/Cartaz_Neon_Gym.png');
        banner.style.width = ('100vw');
    }
}