let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let isMoving = false;
let moveTimeout;


document.addEventListener('mousemove', function(e) {
  if (eyesVisible) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
 
    eyes.forEach(eye => {
      const pupil = eye.querySelector('.pupil');
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;           
      const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
      const distance = Math.min(eyeRect.width * 0.15, 15);
      const pupilX = Math.cos(angle) * distance;
      const pupilY = Math.sin(angle) * distance;
      pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
    });
    }
});

let eyesVisible = false;

function showEyes() {
  if (!eyesVisible) {
    eyes.forEach(eye => {
      eye.classList.add('visible');
    });
    eyesVisible = true;
  }
}


document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
 
    eyes.forEach(eye => {
      const pupil = eye.querySelector('.pupil');
      const eyeRect = eye.getBoundingClientRect();
      const eyeCenterX = eyeRect.left + eyeRect.width / 2;
      const eyeCenterY = eyeRect.top + eyeRect.height / 2;           
      const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
      const distance = Math.min(eyeRect.width * 0.15, 15);
      const pupilX = Math.cos(angle) * distance;
      const pupilY = Math.sin(angle) * distance;
      pupil.style.transform = `translate(calc(-50% + ${pupilX}px), calc(-50% + ${pupilY}px))`;
    });
    
});



function hideEyes() {
  if (eyesVisible) {
      eyes.forEach(eye => {
        eye.classList.remove('visible');
      });
      eyesVisible = false;
  }
}

// Mouse events for eyes
document.addEventListener('mousedown', showEyes);
document.addEventListener('mouseup', hideEyes);   
document.addEventListener('mouseleave', hideEyes);
