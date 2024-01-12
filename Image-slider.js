const slides = document.querySelectorAll(".slide")
let counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index*100}%`;
    }
);

const GoPrev = () =>{
    if(counter===0){
        counter=slides.length-1;
        SlideImage();
    }
    else{
    counter--;
    SlideImage();
    }
} 

const GoNext = () =>{
    if(counter==slides.length-1){
        counter=0;
        SlideImage();
    }
    else{
    counter++;
    SlideImage();
    }
} 

const SlideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}

