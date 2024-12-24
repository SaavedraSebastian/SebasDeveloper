document.addEventListener("DOMContentLoaded", function () {
    const messages = [
        "Desarrollador Web",
        "Desarrollador Backend",
        "Apasionado por la tecnología y la innovación",
        "Especializado en HTML, CSS y JavaScript",
        "Siempre aprendiendo y evolucionando",
        "Creando experiencias digitales únicas"
    ];

    const codingTextElement = document.getElementById("coding-text");
    const cursorElement = document.getElementById("cursor");
    const typingSpeed = 30; 
    const erasingSpeed = 10; 
    const newTextDelay = 1000;
    let messageIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < messages[messageIndex].length) {
            codingTextElement.innerHTML += messages[messageIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }
    function erase() {
        if (charIndex > 0) {
            codingTextElement.innerHTML = codingTextElement.innerHTML.slice(0, -1); 
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            messageIndex++;
            if (messageIndex >= messages.length) messageIndex = 0; 
            setTimeout(type, newTextDelay); 
        }
    }


    setTimeout(type, newTextDelay);
});

document.addEventListener('DOMContentLoaded', function () {
 
    const scrollButton = document.getElementById('scrollDown');
    const targetSection = document.getElementById('about');

    scrollButton.addEventListener('click', function() {

        targetSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            targetSection.classList.add('visible');
        }, 1000);
    });
});
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const sidebarLinks = document.querySelectorAll('#sidebar a');
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id');
    }
  });

  sidebarLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active');
    }
  });
});
const checkbox = document.getElementById('active');
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
});
function closeMenu() {
  document.getElementById('active').checked = false;
  document.body.classList.remove('menu-open');
}
document.querySelectorAll('.social-link').forEach(link => {
  link.addEventListener('click', function() {
    console.log(`Redirigiendo a: ${this.href}`);
  });
});
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 180,  
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.8,  
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3.9458004845442964,  
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100, 
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 8,  
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",  
    "events": {
      "onhover": {
        "enable": true,  
        "mode": "repulse"  
      },
      "onclick": {
        "enable": true,
        "mode": "push" 
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 150,  
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



