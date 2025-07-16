 document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});
const imageElement =document.getElementById("profileimg");
const images =["image/mary1.jpg","image/mary.jpg"];
let currentIndex =0;
setInterval(() => {
    currentIndex =(currentIndex + 1) %
    images.length;
    imageElement.src = images[currentIndex];}, 1000);

    
 const graphicsLink = document.getElementById("graphicsLink");
        const photographyLink = document.getElementById("photographyLink");
        const videographyLink = document.getElementById("videographyLink");
        const overlayGraphics = document.getElementById("overlayGraphics");
        const overlayPhotography = document.getElementById("overlayPhotography");
        const overlayVideography = document.getElementById("overlayVideography");
        const closeGraphics = document.getElementById("closeGraphics");
        const closePhotography = document.getElementById("closePhotography");
        const closeVideography = document.getElementById("closeVideography");


        graphicsLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            overlayGraphics.style.display = "block";
        });

        photographyLink.addEventListener("click", function(event){
            event.preventDefault();
            overlayPhotography.style.display = "block";
        });

        videographyLink.addEventListener("click", function(event){
            event.preventDefault();
            overlayVideography.style.display = "block";
        });

        closeGraphics.addEventListener("click", function() {
            overlayGraphics.style.display = "none";
        });

        closePhotography.addEventListener("click", function() {
            overlayPhotography.style.display = "none";
        });

        closeVideography.addEventListener("click", function() {
            overlayVideography.style.display = "none";
        });