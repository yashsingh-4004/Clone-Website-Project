// const divSlides = document.querySelectorAll(".divSlide");
// // console.log(divSlides);

// let counter1 = 0;

// divSlides.forEach(
//     (divSlide,index) =>{
//         divSlide.style.left = `${index*100}%`
//     }
// )

// const divGoprev = () =>{
//     if(counter1===0){
//         counter1=0;
//         slideDiv();
//     }
//     else{
//     counter1--;
//     slideDiv();
//     }
// }

// const divGonext = () =>{
//     if(counter1==divSlides.length-1){
//         counter1=divSlides.length-1;
//         slideDiv();
//     }
//     else{
//     counter1++;
//     slideDiv();
//     }
// }

// const slideDiv = () =>{
//     divSlides.forEach(
//         (divSlide) =>{
//             divSlide.style.transform = `translateX(-${counter1*100}%)`
//         }
//     )
// }