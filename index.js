let homeBgDiv = document.getElementsByClassName("homeBg")[0];
let leftArrow = document.getElementById("imgCardIconLeft");
let rightArrow = document.getElementById("imgCardIconRight");
let changeImgCard1 = document.getElementsByClassName("changeImgCard1")[0];
let changeImgCard2 = document.getElementsByClassName("changeImgCard2")[0];
let prodLeftArrow = document.getElementsByClassName("prod-leftArrow")[0];
let prodRightArrow = document.getElementsByClassName("prod-rightArrow")[0];
let prodItems = document.getElementsByClassName("wrapper")[0];


console.log(prodLeftArrow, prodRightArrow);


let bgImagesArr = ["url(./images/InteriorDesignBg-1.webp)", "url(./images/InteriorDesignBg-2.jpg)", "url(./images/InteriorDesignBg-3.jpg)", "url(./images/InteriorDesignBg-4.jpg)", "url(./images/InteriorDesignBg-5.jpg)", "url(./images/InteriorDesignBg-6.jpg)", "url(./images/InteriorDesignBg-7.jpg)"];
let linearGradient = "linear-gradient(rgb(116, 116, 116, 0) 0%, rgb(60, 60, 60, 0) 60%, rgb(60, 60, 60, 0.7))";
var ind = 0;

(bgImagesArr[ind].length - 1 > 0) ? changeImgCard1.style.backgroundImage = bgImagesArr[ind + 1] : 0;
(bgImagesArr[ind].length - 1 > 1) ? changeImgCard2.style.backgroundImage = bgImagesArr[ind + 2] : 0;

leftArrow.addEventListener('click', () => {
     if (ind > 0) {
          homeBgDiv.style.backgroundImage = bgImagesArr[--ind];
          (ind > 1) ? changeImgCard1.style.backgroundImage = bgImagesArr[ind - 1] : 0;
          (ind > 1) ? changeImgCard2.style.backgroundImage = bgImagesArr[ind - 2] : 0;

     }
})
rightArrow.addEventListener('click', () => {
     let len = bgImagesArr.length;

     if (ind < len - 1) {
          homeBgDiv.style.backgroundImage = bgImagesArr[++ind];
          (ind < len - 2) ? changeImgCard1.style.backgroundImage = bgImagesArr[ind + 1] : 0;
          (ind < len - 2) ? changeImgCard2.style.backgroundImage = bgImagesArr[ind + 2] : 0;
     }
})

// product script

prodLeftArrow.addEventListener("click", () => {    
     prodItems.style ="transform:translateX(200px)" ;
})
prodRightArrow.addEventListener("click", () => {    
     prodItems.style ="transform:translateX(-200px)" ;
})