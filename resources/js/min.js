function openMenu(){document.getElementById('myNav').style.width="90%"}
function closeMenu(){document.getElementById('myNav').style.width="0%"}
// navbar
window.addEventListener('scroll',function(){
    let header=document.querySelector('nav');
    header.classList.toggle('sticky',window.scrollY>500);
});
// star time now
    const day=document.querySelector('.set_time_days .numb');
    const hor=document.querySelector('.set_time_hor .numb');
    const min=document.querySelector('.set_time_min .numb');
    const sec=document.querySelector('.set_time_sec .numb'); 
    let time=setInterval(function(){
        var current=new Date().getTime();
        var launchDate=new Date("Aug 13,2022 13:59:58").getTime();
        var duration=launchDate-current;
        var days=Math.floor(duration/(1000*60*60*24));
        var hours=Math.floor((duration % (1000*60*60*24))/(1000*60*60)); 
        var minutes=Math.floor((duration % (1000*60*60))/(1000*60));
        var seconds=Math.floor((duration % (1000*60))/1000);
        day.innerHTML=days;
        hor.innerHTML=hours;
        min.innerHTML=minutes;
        sec.innerHTML=seconds;
        if(days<10){
            day.innerHTML="0"+days;
        }
        if(hours<10){
            hor.innerHTML='0'+hours;
        }
        if(minutes<10){
            min.innerHTML='0'+minutes;
        }
        if(duration<0){
            clearInterval(time)
        }
    },1000);
    // window open
    let popup=document.querySelector('#popup');
    let closePopup=document.querySelector('#close');
        closePopup.addEventListener('click',function(){
        popup.classList.remove('add_popup');
    });
    // loder
    var preloader = document.getElementById("loader");
    function loading() {
        preloader.style.display = "none";
    }

    window.addEventListener('load',function(){
        setTimeout(()=>{
            popup.classList.add('add_popup');
        },5000);
    });
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            margin:20,
            items:3,
            loop:true,
            nav:true,
            dots:true,
            autoplayHoverPause:true,
            autoplay:false,
            autoplayTimeout:3000,
            responseresponsiveRefreshRate:true,
            responsive:{
                0:{
                    items:1,
                },
                575.98:{
                    items:2,
                },
                767.98:{
                    items:3,
                },
                991.98:{
                    items:4,
                },
                1199.98:{
                    items:4,
                },
                1919.98:{
                    items:5,
                }
            }
        });
        AOS.init();
    })
