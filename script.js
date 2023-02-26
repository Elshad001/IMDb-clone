let slider=document.querySelector('#slider');
let img1='https://m.media-amazon.com/images/M/MV5BNDhlZWMyYjgtMDU1Mi00ZTlkLWE2NWYtOWM4ZjViOGM0OWUyXkEyXkFqcGdeQWFybm8@._V1_.jpg';
let img2='https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg';
let img3='https://m.media-amazon.com/images/M/MV5BZDJlOTYxMmItZjUzMi00ODcyLTljODktMDYyZmZmZTZkMjhjXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg'
let i=0;
let duration=3000;
const images=[img1,img2,img3];

function slideImg()
    {
        slider.style.backgroundImage=`url(${images[i]})`
        if(i<images.length-1)
        {
            i++
        }
        else
        {
            i=0;
        }
        setTimeout("slideImg()" ,duration);
    }

    window.onload=slideImg;

    const prevBtn=document.querySelector('#prevBtn');
    const nextBtn=document.querySelector('#nextBtn');
    const section2Cards=document.querySelector('#section2Cards');
    let scrollAmount=900;

    nextBtn.addEventListener('click',()=>
    {
        section2Cards.scrollLeft+=scrollAmount
    });
    
    prevBtn.addEventListener('click',()=>
    {
        section2Cards.scrollLeft-=scrollAmount
    });
    
    

const sec4PrevBtn=document.querySelector('#sec4-prevBtn');
const sec4NextBtn=document.querySelector('#sec4-nextBtn');
const section4Cards=document.querySelector('#section4-cards');

let scrollAmount2=1550;

sec4NextBtn.addEventListener('click',()=>
    {
        section4Cards.scrollLeft+=scrollAmount2;
    });

sec4PrevBtn.addEventListener('click',()=>
{
    section4Cards.scrollLeft-=scrollAmount2;
});



