const bootcamp__testimonials= document.querySelectorAll('.bootcamp__testimonials');

let cont_clicks=0;

function anterior(){
    if(cont_clicks>0){
        cont_clicks--;
        bootcamp__testimonials.forEach((cadaTest, i)=>{
            bootcamp__testimonials[i].classList.remove('bootcamp__testimonials--view');
        })
        bootcamp__testimonials[cont_clicks].classList.add('bootcamp__testimonials--view');
    }
}

function siguiente(){
    if(cont_clicks+1<bootcamp__testimonials.length){
        cont_clicks++;
        bootcamp__testimonials.forEach((cadaTest, i)=>{
            bootcamp__testimonials[i].classList.remove('bootcamp__testimonials--view');
        })
        bootcamp__testimonials[cont_clicks].classList.add('bootcamp__testimonials--view');
    }
}