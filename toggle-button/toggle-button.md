# Toggle Button

A simple Toggle Button with Smoky rainbow cursor created using **HTML** , **CSS** and **JavaScript**.

## Demo

The toggle button has a smooth sliding animation:

- **Off state:** Dark background
- **On state:** Blue background with slider moving.

## HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Toggle Button</title>
    <link rel="stylesheet" href="style.css" />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        cursor: none;
      }

      body {
        background-color: #000;
        height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .instruction {
        color: #aaa;
        font-family: Arial, sans-serif;
        font-size: 14px;
        position: absolute;
        bottom: 20px;
        text-align: center;
        z-index: 10;
      }

      .rainbow-particle {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        mix-blend-mode: screen;
      }
    </style>
  </head>
  <body>
    <label class="toggle">
      <input type="checkbox" />
      <span class="slider"></span>
    </label>
    <div class="instruction">Move your cursor for rainbow smoke</div>

    <script>
      document.addEventListener("DOMContentLoaded", () => {
        const body = document.body;
        let hue = 0; // Starting hue for rainbow effect

        // Create rainbow particles on mouse move
        document.addEventListener("mousemove", (e) => {
          createRainbowParticle(e.clientX, e.clientY);
        });

        // Create particles on touch for mobile
        document.addEventListener("touchmove", (e) => {
          e.preventDefault();
          const touch = e.touches[0];
          createRainbowParticle(touch.clientX, touch.clientY);
        });

        function createRainbowParticle(x, y) {
          // Create multiple particles for each movement
          for (let i = 0; i < 3; i++) {
            const particle = document.createElement("div");
            particle.classList.add("rainbow-particle");

            // Random size between 5 and 20 pixels
            const size = Math.random() * 15 + 5;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;

            // Random offset for natural spread
            const offsetX = (Math.random() - 0.5) * 35;
            const offsetY = (Math.random() - 0.5) * 35;

            // Set initial position
            particle.style.left = `${x + offsetX}px`;
            particle.style.top = `${y + offsetY}px`;

            // Rainbow color based on hue value
            hue = (hue + 5) % 360; // Cycle through hue values
            const color = `hsl(${hue}, 100%, 65%)`;
            particle.style.backgroundColor = color;

            // Add to DOM
            body.appendChild(particle);

            // Animate the particle
            animateRainbowParticle(particle, hue);
          }
        }

        function animateRainbowParticle(particle, startHue) {
          let opacity = 0.9;
          let size = parseFloat(particle.style.width);
          let x = parseFloat(particle.style.left);
          let y = parseFloat(particle.style.top);

          // Random movement direction
          const moveX = (Math.random() - 0.5) * 1.5;
          const moveY = -Math.random() * 1.8 - 0.3; // Mostly upward

          // Gradually shift hue during animation
          let currentHue = startHue;

          const animation = setInterval(() => {
            // Move particle
            x += moveX;
            y += moveY;

            // Gradually increase size and decrease opacity
            size += 0.18;
            opacity -= 0.01;

            // Shift hue for color transition effect
            currentHue = (currentHue + 2) % 360;

            // Apply changes
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.opacity = opacity;
            particle.style.backgroundColor = `hsl(${currentHue}, 100%, 65%)`;

            // Remove particle when invisible
            if (opacity <= 0) {
              clearInterval(animation);
              particle.remove();
            }
          }, 20);
        }
      });
    </script>
  </body>
</html>
```

## CSS

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
}

.toggle {
  position: relative;
  width: 90px;
  height: 44px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  inset: 0;
  background-color: #2a2f36;
  border-radius: 44px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.slider::before {
  content: "";
  position: absolute;
  height: 34px;
  width: 34px;
  left: 5px;
  bottom: 5px;
  background-color: #ffffff;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.toggle input:checked + .slider {
  background-color: #4174fa;
}

.toggle input:checked + .slider::before {
  transform: translateX(46px);
}
```
