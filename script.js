document.addEventListener('DOMContentLoaded', function () {
    if (document.body.id === 'billportal-page') {
        const linkedButton = document.querySelector('.linked-button');
        const fonts = [
            'Roboto, sans-serif',
            'Open Sans, sans-serif',
            'Lobster, cursive',
            'Montserrat, sans-serif'
        ];

        const styles = [
            //rainbow background colors
            { backgroundColor: 'rgb(178, 176, 34)', color: 'white', borderRadius: '5px' }, // fire brick
            { backgroundColor: 'rgb(222, 224, 94)', color: 'black', borderRadius: '10px' }, // Light orange background
            { backgroundColor: 'rgba(224, 211, 27, 0.89)', color: 'black', borderRadius: '15px' }, // Gold background
            { backgroundColor: 'rgb(238, 255, 0)', color: 'white', borderRadius: '20px' }, // Lime green background
            { backgroundColor: 'rgb(173, 167, 80)', color: 'white', borderRadius: '10px' }, // Steel blue background
            { backgroundColor: 'rgba(218, 230, 110, 0.81)', color: 'black', borderRadius: '15px' }, // Purple background
            { backgroundColor: 'rgba(188, 199, 39, 0.63)', color: 'white', borderRadius: '20px' }  // Violet background
        ];
        
        /*shape options -_- rectangle --> circle*/
        const shapes = [
            { shape: '', borderRadius: '5px' }, // Default rectangle
            { shape: 'circle', borderRadius: '50%' }, // Circle
            { shape: 'oval', borderRadius: '50%/30%' } // Oval
        ];

        //new audio object
        const oh = new Audio('sounds/stanley-oh-my-god.mp3');
        const well = new Audio('sounds/bill-cipher-well-well.mp3');
        const peekaboo = new Audio('sounds/cipherpeekaboo.mp3');

        linkedButton.addEventListener('click', function (event) {
            event.preventDefault(); // Prevents default behavior if button is a link

            //play peekaboo audio (once)
            peekaboo.play()


            // Generate 250 buttons
            for (let i = 0; i < 80; i++) {
                setTimeout(function () {
                    const button = document.createElement('button');
                    button.innerHTML = 'I Found You :D!';
                    button.classList.add('random-button');

                    // randomise font
                    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
                    button.style.fontFamily = randomFont;

                    // randomise style
                    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
                    button.style.backgroundColor = randomStyle.backgroundColor;
                    button.style.color = randomStyle.color;
                    
                    //randomised font size between 25 and 40
                    const randomFontSize = Math.floor(Math.random() * (40 - 25 + 1)) + 25;
                    button.style.fontSize = randomFontSize + "px"; 

                    // randomise shape
                    const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
                    button.style.borderRadius = randomShape.borderRadius;

                    // random location
                    const x = Math.floor(Math.random() * window.innerWidth);
                    const y = Math.floor(Math.random() * window.innerHeight);
                    button.style.position = 'absolute';
                    button.style.left = x + 'px';
                    button.style.top = y + 'px';

                    document.body.appendChild(button);
                //wait 0.1 seconds between button appearances
                }, i * 50);
            }
        });
    }
});
