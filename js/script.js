document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
      {
          img: "assets/testimonial/1.png",
          name: "Jordana",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam consequatur earum suscipit rerum nesciunt, tenetur, vitae distinctio temporibus veniam iste eius quis neque pariatur vel dolorem laboriosam, delectus sint."
      },
      {
          img: "assets/testimonial/2.png",
          name: "John",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam consequatur earum suscipit rerum nesciunt, tenetur, vitae distinctio temporibus veniam iste eius quis neque pariatur vel dolorem laboriosam, delectus sint."
      },
      {
          img: "assets/testimonial/3.png",
          name: "Nikhil",
          info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil totam consequatur earum suscipit rerum nesciunt, tenetur, vitae distinctio temporibus veniam iste eius quis neque pariatur vel dolorem laboriosam, delectus sint."
      }
  ];

  const boxes = [
      document.getElementById("test-1"),
      document.getElementById("test-2"),
      document.getElementById("test-3")
  ];

  let currentIndex = 0;

  function updateTestimonials() {
      // Rotate the testimonial data
      const rotatedTestimonials = testimonials.slice(currentIndex).concat(testimonials.slice(0, currentIndex));

      // Update each box's content and opacity
      boxes.forEach((box, index) => {
          const imgElement = box.querySelector("img");
          const nameElement = box.querySelector("h3");
          const infoElement = box.querySelector("p");

          imgElement.src = rotatedTestimonials[index].img;
          nameElement.textContent = rotatedTestimonials[index].name;
          infoElement.textContent = rotatedTestimonials[index].info;

          box.style.opacity = index === 1 ? "100%" : "50%"; // Middle div gets full opacity
      });

      // Update the current index
      currentIndex = (currentIndex + 1) % testimonials.length;
  }

  // Initialize the testimonials
  updateTestimonials();

  // Set the interval to switch testimonials every 3 seconds
  setInterval(updateTestimonials, 3000);
});


// Destination section

// Select the images by their IDs
const parisImg = document.getElementById("paris-img");
const londonImg = document.getElementById("london-img");
const coxImg = document.getElementById("cox-img");

// Initialize rotation angles for each image
let parisRotation = 0;
let londonRotation = 0;
let coxRotation = 0;

// Function to rotate an image
title="Rotate an image"
function rotateImage(image, rotation) {
  image.style.transform = `rotate(${rotation}deg)`;
}

// Set intervals to rotate each image
title="Set intervals to spin the images"
setInterval(() => {
  parisRotation += 1; // Adjust the increment for speed
  rotateImage(parisImg, parisRotation);
}, 30); // Adjust the interval for smoothness

setInterval(() => {
  londonRotation += 1;
  rotateImage(londonImg, londonRotation);
}, 30);

setInterval(() => {
  coxRotation += 1;
  rotateImage(coxImg, coxRotation);
}, 30);

// Select all elements with the class "book-page"
const bookPageElements = document.querySelectorAll('.id-book-page');

// Add a click event listener to each element
bookPageElements.forEach(bookPageElement => {
    bookPageElement.addEventListener('click', () => {
        // Navigate to book.html
        window.location.href = 'book.html';
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  const responseMessage = document.getElementById('responseMessage');
  
  if (name && email && message) {
    responseMessage.textContent = 'Thank you for your message! We will get back to you shortly.';
    responseMessage.style.color = 'green';
    this.reset(); // Reset the form
  } else {
    responseMessage.textContent = 'Please fill out all fields.';
    responseMessage.style.color = 'red';
  }
});

