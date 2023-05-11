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
        burguer.style.left = '75vw'
        itens.style.display = 'none'
        
    }
    else{
        itens.style.display = 'block'
        burguer.style.left = '42vw'
    }
}