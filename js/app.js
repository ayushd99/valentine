

const particles = {
    
}

let buttonHeight = 48; // Starting height in pixels
let buttonWidth = 80;
let fontSize = 20; // Starting font size in pixels


document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function(e) {
        if (e.target.id === 'yes') {
            document.querySelector('#particles-js').style.display = "block"
            const messages = [
                'Y- you actually said yes 🥲 \n I LOVE YOU BABY!😘😘😘😘😘😘',
                
            ] 
            const random = Math.floor(Math.random() * messages.length);
            document.querySelector('h1').innerText = messages[random]       
            document.querySelector('#gif').src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" 
            document.querySelector('#yes').style.display = 'none'; 
            document.querySelector('#no').style.display = 'none'; 

            particlesJS('particles-js', {
                "particles": {
                    "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                    },
                    "color": {
                    "value": "#FF0000"
                    },
                    "shape": {
                    "type": "image",
                    "stroke": {
                        "width": 0,
                        "color": "#FF0000"
                    },
                    "polygon": {
                        "nb_sides": 3
                    },
                    "image": {
                        "src": "../valentine/assets/heart.png",
                        "width": 50,
                        "height": 50
                    }
                    },
                    "opacity": {
                    "value": 0.4,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": .5,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                    },
                    "size": {
                    "value": 50,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 3.795204795204795,
                        "size_min": 0,
                        "sync": false
                    }
                    },
                    "line_linked": {
                    "enable": true,
                    "distance": 32.06824121731046,
                    "color": "#ffffff",
                    "opacity": 0.03206824121731046,
                    "width": 0
                    },
                    "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
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
                        "mode": "bubble"
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
                        "distance": 0,
                        "size": 40,
                        "duration": 0.6496617698410762,
                        "opacity": 1,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 300,
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
                "retina_detect": true,
                "config_demo": {
                "hide_card": false,
                "background_color": "#b61924",
                "background_image": "",
                "background_position": "50% 50%",
                "background_repeat": "no-repeat",
                "background_size": "cover"
                }
            });
            
        }

        if(e.target.id === "no") {
            document.querySelector('#particles-js').style.display = "none" 
            const messages = [
                'Why not?', 'Your answer makes me sad 🥲', 'Pleasee be my valentine', 
                'b- b- but... why :(', 'You must say yes', 
                'You must have misclicked...', 'This hurts me 😖',
                'I cannot believe this', 'PLEASE BABY', 'I did not expect this ',
                "Don't do this to me :(", "You're breaking my heart baby 💔", "I'm gonna cry...",
                'NO BABY :('
            ]
            const random = Math.floor(Math.random() * messages.length);
            document.querySelector('h1').innerText = messages[random]
            document.querySelector("#gif").src = "https://media.tenor.com/RJgIui1E_2QAAAAj/teddy-bear.gif"

            const yesButton = document.querySelector('#yes');
            buttonHeight += 35; // Increase height by 5px on each click
            buttonWidth += 35;
            fontSize += 25; // Increase font size by 1px on each click
            yesButton.style.height = `${buttonHeight}px`; // Update button height
            yesButton.style.width = `${buttonWidth}px`;
            yesButton.style.fontSize = `${fontSize}px`; // Update font size
            
        }
    })
})
