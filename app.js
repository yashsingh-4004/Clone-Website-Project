const slides = document.querySelectorAll(".slide")
let counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index*100}%`;
    }
);



const GoPrev = () =>{
    counter--;
    SlideImage();
} 


const GoNext = () =>{
    counter++;
    SlideImage();
} 






const SlideImage = () =>{
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}

