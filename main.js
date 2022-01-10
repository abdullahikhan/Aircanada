// WEBSITE CODE


new WOW().init();

var aboutSwiper = new Swiper(".aboutSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        
        599: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        },
    }
});
var planeSwiper = new Swiper(".planeSwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Get the elements
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

//Toggle the navbar menu on click Open/Close
menuBtn.addEventListener("click", () => {
    menu.classList.toggle('nav-toggle');
});


document.querySelector(".year").innerHTML = new Date().getFullYear();

// WEBSITE CODE


// BUTTON 5 AND 6
const reviews = [
    {
      id: 1,
      name: "Susan Smith",
      job: "2nd Year Pilot",
      img:
        "https://res.cloudinary.com/dsyc4ne7l/image/upload/v1640126472/person-1_ktx6we.jpg",
      text:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Ut et fringilla est. Praesent eget urna ultricies justo semper imperdiet. Praesent interdum ullamcorper sagittis. Pellentesque et augue quis elit finibus eleifend tincidunt eget nibh. ",
    },
    {
      id: 2,
      name: "Rogan Ware",
      job: "4th Year Pilot",
      img:
        "https://res.cloudinary.com/dighv65sh/image/upload/v1640206858/a3f1ce93fece1efc12f2be9a2166b94b_em3alk.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Nicola Neale",
      job: "First Officer",
      img:
        "https://res.cloudinary.com/dsyc4ne7l/image/upload/v1640130679/pexels-moose-photos-1036622_xbv7rg.jpg",
      text:
        "Etiam ornare ex pellentesque metus semper, eu tincidunt metus dignissim. Sed a ullamcorper eros, sit amet scelerisque enim. Ut condimentum faucibus nulla, et hendrerit arcu lacinia eu. Donec vitae elementum velit. Integer dictum ultricies quam a suscipit. Phasellus laoreet enim ac erat blandit bibendum.",
    },
    {
      id: 4,
      name: "Elliott Davenport",
      job: "Flight Instructor",
      img:
        "https://res.cloudinary.com/dsyc4ne7l/image/upload/v1640130866/pexels-linkedin-sales-navigator-2182970_dv4bpl.jpg",
      text:
        "Etiam quam eros, lacinia quis dictum quis, laoreet ac neque. In ultricies blandit malesuada. Donec vehicula ex a ex congue, id tempor magna aliquam. Quisque aliquam mattis urna, quis sodales magna volutpat sit amet. In aliquet tellus risus, at sollicitudin justo rhoncus ac. Aliquam vitae neque risus. In dictum est nec turpis aliquam interdum.",
    },
  ];
  
  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  

  let currentItem = 0;
  
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
// END OF BUTTON 5 AND 6




// BUTTON 4
const button = document.querySelector(".bg-color");
const h2El = document.querySelector(".text-test");
const bgEl = document.querySelector(".test");
// const hexColorEl = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button.addEventListener("click", () => {
  let color = "#";
  color += Math.random().toString(16).slice(2, 8).toUpperCase();
  // for(i=0; i<6; i++){
  //   const number = Math.floor(Math.random()*hexColorEl.length);
  //   color += hexColorEl[number];
  // }
  // console.log(color)
  bgEl.style.backgroundColor = color;
  h2El.innerText = color;
});
// END OF BUTTON 4



// BUTTON 1, 2, 3
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')) {
            count--;
        }
        else if (styles.contains('increase')) {
            count++;
        }
        else {
            count = 0;
        }
        if(count > 0) {
            value.style.color = "black";
        }
        if(count < 0) {
            value.style.color = 'red';
        }
        if(count > 1) {
            value.style.color = "gray"  // I had to put the color to gray since the website itself is white
        }
        value.textContent = count;
    })
});
// END OF BUTTON 1, 2, 3


// BUTTON 7
function btn() {
  let image = document.getElementById('image');
  let images = ['pic/Pic 2.jpeg', 'pic/Pic 3.png', 'pic/Pic 4.jpg', 'pic/Pic 5.jpg', 'pic/Pic 6.jpg']

  let random = Math.floor(Math.random() * 5);
  image.src = images[random];
}
// END OF BUTTON 7

