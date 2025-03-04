const images = ["./image/cat.jpg","./image/tải xuống.jpg","./image/cat.jpg","./image/tải xuống.jpg",
    "./image/cat.jpg","./image/tải xuống.jpg","./image/cat.jpg"];
const listImage = document.querySelector("#listImage");
const bigImage = document.querySelector("#imgBig");
const pre = document.querySelector("#pre");
const next = document.querySelector("#next");
let currentImage = 0 ;
function renderImage(){

    let tmp = "";
    for(let i = 0 ; i < images.length ; i++){
            if(currentImage === i){
                tmp += `<img class="imgSmall" style="border: 3px solid blue;"  index="${i}" src="${images[i]}" alt="">`;
            }
            else {
                tmp += `<img class="imgSmall" index="${i}" src="${images[i]}" alt="">`;
            }

            
        
    }
    
    // renderImage();
    listImage.innerHTML = tmp ;
    const imgSmalls = document.querySelectorAll(".imgSmall");
imgSmalls.forEach(img => {
    img.addEventListener("click", () => {
        // currentImage = parseInt(img.getAttribute("index")) ;
        bigImage.src = images[img.getAttribute("index")];
    })
});
}
renderImage();
bigImage.src = images[currentImage];


const interval = setInterval(() => {
    for(let i = 0 ; i < images.length - 1 ; i++){

        let tmp = images[i];
        images[i] = images[i + 1];
        images[i + 1] = tmp ;
    }
   
    bigImage.src = images[currentImage];
    renderImage();
},10000);

pre.addEventListener("click",() => {
    for(let i = 0 ; i < images.length - 1 ; i++){
        let tmp = images[i];
        images[i] = images[i + 1];
        images[i + 1] = tmp ;
    };
    bigImage.src = images[0];
    renderImage();
});

next.addEventListener("click",() => {
    for(let i = images.length - 1 ; i > 0 ; i--){
        let tmp = images[i];
        images[i] = images[i - 1];
        images[i - 1] = tmp ;
    };
    bigImage.src = images[0];
    renderImage();
})


