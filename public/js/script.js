const ui = new UI()

//!RESPONSIVE HAMBURGER MENU OPEN
ui.responsiveNavbar.addEventListener("click", function(e){
    ui.mainNav.classList.toggle("responsive")
    e.preventDefault()
});

//!RESPONSIVE HAMBURGER MENU CLOSE ICON AND BAR ICON TOGGLE   
let toggleMenu = () => {
    let barMenu = ui.bars;
    let closeIcon = ui.close; 

    if(barMenu.style.display === 'none') {
        barMenu.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {  
        barMenu.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}

//!NAVBAR LINK FOCUS EVENTS
const navItems = ui.navItems;

for(let link of navItems){
    link.addEventListener("click", function(){
        document.querySelector("a.active").classList.remove("active");
        link.classList.add("active")
    });
}

//!OPEN PRICING LIST ACCORDIONS
let accordionPricing = ui.pricingCol;

accordionPricing.forEach(pricing => {
    pricing.addEventListener("click", () => {
        pricing.classList.toggle("show")
    });
});

//!OPEN OUR DIFFERENCES ACCORDIONS
let accordionDifferences = ui.accordionCol;

accordionDifferences.forEach(accordions => {
    accordions.addEventListener("click", (e) => {
        accordions.classList.toggle("accordion-open")
        e.preventDefault();
    });
});

//!CUSTOMER SLIDERS
let prevSlider = document.getElementById("prev");
let nextSlider = document.getElementById("next");
let sliderRow = document.querySelector(".customer-comments-slider-row");
let sliderCol = sliderRow.querySelectorAll(".customer-comments-slider-col").length;
let clickCounter = 0;

nextSlider.addEventListener("click", () => {
    const withRatio = Math.floor(window.innerWidth / 486);
    
    clickCounter++;
    if(sliderCol - (0 + clickCounter) - (withRatio * clickCounter) >= 0) {
        sliderRow.style.transform = `translateX(${sliderRow.computedStyleMap().get("transform")[0].x.value - 486}px)`;
    } else {
        sliderRow.style.transform = 'translateX(0px)';
        clickCounter--;
        clickCounter = 0;
    }
});

prevSlider.addEventListener("click", () => {
    if(clickCounter > 0) {
        clickCounter--;
        sliderRow.style.transform = `translateX(${sliderRow.computedStyleMap().get("transform")[0].x.value + 486}px)`;
    } 
});

//!CONTACT US FORM VALIDATION 
let inputName = document.querySelector("#name");
let nameLabel = document.querySelector("#nameLabel");

let inputSurname = document.querySelector("#surname");
let surnameLabel = document.querySelector("#surnameLabel");

let successIconFirst = document.querySelector(".first-input i")
let successIconSecond = document.querySelector(".second-input i")
let successIconLast = document.querySelector(".last-input i")

let inputMessage = document.querySelector("#message");
let messageLabel = document.querySelector("#messageLabel")

let myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let isFormValid = true;

    function isAlphabetic(input) {
        const regex = /^[A-Za-zÇĞİÖŞÜçğıöşü]+$/;
        return regex.test(input);
    }

    function formSuccessInfoName(inputName,nameLabel) {
        inputName.style.border = '2px solid #198754'
        inputName.style.marginBottom = '8px'
        nameLabel.style.display = 'none'
        successIconFirst.style.opacity = '1'
    };

    function formErrorMsgName(nameLabel,inputName,Namemessage) {
        nameLabel.style.display = 'block'
        inputName.style.border = '2px solid #b02a37'
        nameLabel.innerHTML = `<i class="fa-solid fa-circle-exclamation me-1"></i> ${Namemessage}`
        inputName.style.marginBottom = '0px'
        successIconFirst.style.opacity = '0'
    };

    function formErrorMsgSurname(surnameLabel, inputSurname, surnameMessage) {
        surnameLabel.style.display = 'block'
        inputSurname.style.border = '2px solid #b02a37'
        surnameLabel.innerHTML = `<i class="fa-solid fa-circle-exclamation me-1"></i> ${surnameMessage}`
        inputSurname.style.marginBottom = '0px'
        successIconSecond.style.opacity = '0'
    }

    function formSuccessInfoSurname(inputSurname, surnameLabel) {
        inputSurname.style.border = '2px solid #198754'
        inputSurname.style.marginBottom = '8px'
        surnameLabel.style.display = 'none'
        successIconSecond.style.opacity = '1'
    }

    function formSuccessInfoMessage(inputMessage, messageLabel) {
        inputMessage.style.border = '2px solid #198754'
        messageLabel.style.marginBottom = '8px'
        messageLabel.style.display = 'none'
        successIconLast.style.opacity = '1'
    }

    function formErrorMsgMessage(inputMessage, messageLabel, messageMessage) {
        messageLabel.style.display = 'block'
        inputMessage.style.border = '2px solid #b02a37'
        messageLabel.innerHTML = `<i class="fa-solid fa-circle-exclamation me-1"></i> ${messageMessage}`
        inputMessage.style.marginBottom = '0px'
        successIconLast.style.opacity = '0'
    }

    if(inputName.value === "") {
        formErrorMsgName(nameLabel,inputName, 'Lütfen bir isim giriniz.') 
        isFormValid = false;
    } else if(!isAlphabetic(inputName.value) || inputName.value.length < 3) {
        formErrorMsgName(nameLabel,inputName, 'Lütfen geçerli bir isim giriniz.') 
        isFormValid = false;
    } else {
        formSuccessInfoName(inputName,nameLabel)
    }

    if(inputSurname.value === "") {
        formErrorMsgSurname(surnameLabel, inputSurname, 'Lütfen bir soyisim giriniz.')
        isFormValid = false;
    } else if(!isAlphabetic(inputSurname.value) ||(inputSurname.value.length < 3)) {
        formErrorMsgSurname(surnameLabel, inputSurname, 'Lütfen geçerli bir soyisim giriniz.')
        isFormValid = false;
    } else {
        formSuccessInfoSurname(inputSurname,surnameLabel)
    }

    if(inputMessage.value === "") {
        formErrorMsgMessage(inputMessage, messageLabel, 'Lütfen bir mesaj giriniz.')
        isFormValid = false;
    } else if(inputMessage.value.length < 12) {
        formErrorMsgMessage(inputMessage, messageLabel, 'Lütfen biraz daha uzun bir mesaj giriniz.')
        isFormValid = false;
    } else {
        formSuccessInfoMessage(inputMessage, messageLabel)
    }

    if(isFormValid) {
        document.getElementById("myForm").submit();
    }
});

//!Start of Tawk.to Script
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6661abd69a809f19fb3a0375/1hvmoefcr';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
//! End of Tawk.to Script