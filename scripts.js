// Scroll Trigger Animation
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      const sectionPosition = section.getBoundingClientRect().top;
      if (sectionPosition < window.innerHeight / 1.5) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  });
  AOS.init();
  // Cursor Effect - Custom Cursor Animation (optional)
  document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
      document.body.style.cursor = 'url(https://example.com/hover-cursor.png), auto';
    });
    link.addEventListener('mouseout', () => {
      document.body.style.cursor = 'url(https://example.com/normal-cursor.png), auto';
    });
  });

// Words to animate
const words = ["AI/ML Enthusiast", "Software Engineer", "Content creator", "Innovator", "Problem Solver"];
let currentWordIndex = 0;
let currentCharIndex = 0;
const animatedTextElement = document.querySelector(".animated-text");

function typeEffect() {
  if (currentCharIndex <= words[currentWordIndex].length) {
    // Display one character at a time
    animatedTextElement.textContent = words[currentWordIndex].slice(0, currentCharIndex);
    currentCharIndex++;
    setTimeout(typeEffect, 100); // Typing speed
  } else {
    setTimeout(deleteEffect, 1500); // Pause before deleting
  }
}

function deleteEffect() {
  if (currentCharIndex >= 0) {
    // Remove one character at a time
    animatedTextElement.textContent = words[currentWordIndex].slice(0, currentCharIndex);
    currentCharIndex--;
    setTimeout(deleteEffect, 50); // Deleting speed
  } else {
    // Move to the next word
    currentWordIndex = (currentWordIndex + 1) % words.length;
    setTimeout(typeEffect, 500); // Start typing the next word
  }
}

// Scroll Trigger for Skills Section
const skills = document.querySelectorAll('.skill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});

skills.forEach((skill) => observer.observe(skill));
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.experience-item');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  animateElements.forEach((el) => observer.observe(el));
});


// Start the animation
typeEffect();

  