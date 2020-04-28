
let navbarTemplate = 
    '<header>Le Header' +
    '</header> ' +
/* 
    '<a href="index.html"><i class="fas fa-home"></i>' + ' ' + 'HOME</a> ' +
    '<a href="about.html"><i class="fas fa-info"></i>' + ' ' + 'ABOUT</a> ' +
    '<a href="contacts.html"><i class="fas fa-address-book"></i>' + ' ' + 'CONTACTS</a> ' +
    '<a href="faq.html"><i class="fas fa-question"></i>' + ' ' + 'FAQ</a> ' +
    '<a href="more.html"><i class="fas fa-angle-double-right"></i>' + ' ' + 'MORE</a> ' +
     */
    '<a href="index.html">HOME' + '<i class="fas fa-home id="navHome"></i></a> ' +
    '<a href="about.html">ABOUT' + '<i class="fas fa-info"></i></a> ' +
    '<a href="contacts.html">CONTACTS' + '<i class="fas fa-address-book"></i></a> ' +
    '<a href="faq.html">FAQ' + '<i class="fas fa-question"></i></a> ' +
    '<a href="more.html">MORE' + '<i class="fas fa-angle-double-right"></i></a> ' +
    '<footer>Le Footer</footer>';
document.getElementById("nav").innerHTML = navbarTemplate;


let footerTemplate = 
'<time id="datetime"></time> &nbsp' + 
'Zdeněk Lach 2020 &nbsp' + 
'<a href="https://www.facebook.com/just.Zdenda" target="blank"><i class="fab fa-facebook-f"></i></a> &nbsp' +
'<a target="blank" href="https://www.instagram.com/just_zdenda/"><i class="fab fa-instagram"></i></a>';

document.getElementById("footer").innerHTML = footerTemplate;
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleTimeString();

/* const alertSend = (event) => {
    let name = document.getElementById("name");
    var dumbCheck = document.getElementById("dumbCheck");
    window.alert(`User ${name.value} succesfuly logged in!`);
}

document.getElementById("form").addEventListener("submit", alertSend);
 */

 // Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  function showAlert(){
    window.alert(`You just bought something at random, YAAY! \n\nPlease fill in the form, we'll send out the rest!`);
}
