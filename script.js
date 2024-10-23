const buttons = document.querySelectorAll('.car-button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const car = this.getAttribute('data-car');

        let name, description, imageUrl, alertMessage;
        switch (car) {
            case 'jesko':
                name = 'Koenigsegg Jesko';
                description = `
                    The Koenigsegg Jesko is a marvel of modern engineering and a top contender in the hypercar world. 
                    Boasting a twin-turbocharged V8 engine that produces up to 1,600 horsepower, the Jesko is capable of 
                    speeds exceeding 300 mph. It features advanced aerodynamics, a lightweight carbon fiber structure, 
                    and a new 9-speed multi-clutch transmission known as "Light Speed Transmission" (LST).`;
                imageUrl = 'jesko.png';  // Ensure this image is in the same folder as index.html
                alertMessage = 'Damn.... !! You choose Speed. Be careful white deriving, take care';
                break;
            case 'urus':
                name = 'Lamborghini Urus';
                description = `
                    The Lamborghini Urus is a high-performance SUV that combines luxury, sportiness, and functionality. 
                    Powered by a 4.0-liter twin-turbocharged V8 engine producing 641 horsepower, the Urus can accelerate 
                    from 0 to 60 mph in just 3.6 seconds. It offers various driving modes for on-road and off-road terrains.`;
                imageUrl = 'urus-bg.png';  // Ensure this image is in the same folder as index.html
                alertMessage = 'Hmmm ! You choose Comfort. Seems to love luxury';
                break;
            case 'zonda':
                name = 'Pagani Zonda';
                description = `
                    The Pagani Zonda is a hypercar masterpiece. Powered by a naturally aspirated AMG V12 engine, the Zonda 
                    delivers unparalleled performance and precision craftsmanship. The car’s lightweight design and 
                    hand-built components make it a collector's favorite.`;
                imageUrl = 'zonda-bg.png';  // Ensure this image is in the same folder as index.html
                alertMessage = 'Billiant !!! You choose Sound. Seems that you love the sound ';
                break;
            default:
                alert('Please select a car.');
                return;
        }

        // Show the alert message based on the car chosen
        alert(alertMessage);

        // Open a new tab for the car's details
        const newTab = window.open("", "_blank");

        if (newTab) {
            newTab.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${name}</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: center;
                            height: 100vh;
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                        }
                        .content-container {
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            align-items: center;
                            width: 100%;
                            height: 85vh;
                        }
                        .image-container {
                            width: 50%;
                            height: 100%;
                            margin-left: 15px; /* Added left margin */
                            background-image: url('${imageUrl}');
                            background-size: cover;
                            background-repeat: no-repeat;
                            background-position: center;
                        }
                        .description-container {
                            width: 45%;
                            padding: 40px;
                            background: rgba(255, 255, 255, 0.8); /* Light background for contrast */
                            border-radius: 10px;
                            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
                            overflow-y: auto;
                        }
                        h1 {
                            font-size: 2.5em; /* Adjusted size for better visibility */
                            margin-bottom: 20px;
                            color: #333; /* Dark color for contrast */
                        }
                        p {
                            font-size: 1.1em;
                            line-height: 1.6;
                            color: #555; /* Slightly lighter color for the text */
                        }
                        .footer {
                            width: 100%;
                            text-align: center;
                            padding: 20px;
                            background-color: #f4f4f4;
                            font-size: 1em;
                            color: #666;
                            position: relative;
                            bottom: 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="content-container">
                        <div class="image-container"></div>
                        <div class="description-container">
                            <h1>${name}</h1>
                            <p>${description}</p>
                        </div>
                    </div>
                    <div class="footer">
                        Developed by-Darkkkk | Support: contact.developerdark@gmail.com | Information source - Wiki, Koenigsegg's Official Website and images from Google
                    </div>
                </body>
                </html>
            `);
        } else {
            alert("Popup was blocked. Please allow popups for this website.");
        }
    });
});
