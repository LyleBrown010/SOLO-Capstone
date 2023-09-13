<template>
<div class="body">
    <div class="main">
        <img id="back" src="https://i.postimg.cc/63tqFbWd/main-background.jpg" alt="">
        <div class="center">WELCOME TO SOLO.</div>
    </div>

    <div class="moving-strip-container">
        <div class="moving-strip d-flex justify-content-evenly">
            <span  id="text">FEATURED ARTWORK <img id="logo-small" src="https://i.postimg.cc/0QqK4xZV/2-removebg-preview.png" alt=""></span>
            <span id="text">FEATURED ARTWORK <img id="logo-small" src="https://i.postimg.cc/0QqK4xZV/2-removebg-preview.png" alt=""></span>
            <span id="text">FEATURED ARTWORK <img id="logo-small" src="https://i.postimg.cc/0QqK4xZV/2-removebg-preview.png" alt=""></span>
            <span id="text">FEATURED ARTWORK <img id="logo-small" src="https://i.postimg.cc/0QqK4xZV/2-removebg-preview.png" alt=""></span>
            <span id="text">FEATURED ARTWORK <img id="logo-small" src="https://i.postimg.cc/0QqK4xZV/2-removebg-preview.png" alt=""></span>
        </div>
    </div>

    <div class="body2">
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" checked/>
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main id="carousel">
            <div class="item"><img id="featured" src="https://i.postimg.cc/MHnKLyL2/Wall-Wonders.jpg" alt=""></div>
            <div class="item"><img id="featured" src="https://i.postimg.cc/Pq6CFrqD/Towers-of-Misfortune.jpg" alt=""></div>
            <div class="item"><img id="featured" src="https://i.postimg.cc/k40XkVP2/Milky.jpg" alt=""></div>
            <div class="item"><img id="featured" src="https://i.postimg.cc/76MWycpS/A-Gardens-gift.jpg" alt=""></div>
            <div class="item"><img id="featured" src="https://i.postimg.cc/6p4mZ5Qz/Mother.jpg" alt=""></div>
        </main>
    </div>

    <div class="moving-strip-container">
        <div class="moving-strip d-flex justify-content-evenly">
            <span  id="text">UPCOMING EVENTS <img id="logo-small" src="https://i.postimg.cc/0QqK4xZV/2-removebg-preview.png" alt=""></span>
            <span id="text">UPCOMING EVENTS <img id="logo-small" src="https://i.postimg.cc/0QqK4xZV/2-removebg-preview.png" alt=""></span>
            <span id="text">UPCOMING EVENTS <img id="logo-small" src="https://i.postimg.cc/0QqK4xZV/2-removebg-preview.png" alt=""></span>
            <span id="text">UPCOMING EVENTS <img id="logo-small" src="https://i.postimg.cc/0QqK4xZV/2-removebg-preview.png" alt=""></span>
            <span id="text">UPCOMING EVENTS <img id="logo-small" src="https://i.postimg.cc/0QqK4xZV/2-removebg-preview.png" alt=""></span>
        </div>
    </div>
    <div class="row" id="upcoming">
        <div class="col-5 p-4">
            <h1>SOLO. <br>Launch Event</h1>
            <h4>LOCATION: SOLO HQ</h4>
            <h5>ENTRANCE FEE: Utter Secret Password</h5>
            <label for="showTextCheckbox">PASSWORD</label>
            <input type="checkbox" id="showTextCheckbox">
            <p id="displayText">I-LOVE-SOLO</p>
        </div>
        <div class="col-7"><img id="event" src="https://i.postimg.cc/ZqjRXVrM/aleksandr-popov-9v-Ddkx-SCAD4-unsplash.jpg" alt=""></div>
    </div>
</div>


</template>

<style scoped>
.main{
  position: relative;
  text-align: center;
}
.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: #FFBF00;
}
#upcoming{
    background-color: #FFBF00;
    height: 50vh;
}

#event{
  width:100%;
  height: 100%;
}
#back{
    width: 100%;
}

#logo-small{
    width: 60px;
    height: 30px;
}

#text{
    font-size: 30px;
    font-family: 'Rubik Mono One', sans-serif;
}
.body {
    margin: 0;
    overflow: hidden;
}

.moving-strip-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: #FFF9F0;
}

.moving-strip {
    white-space: nowrap;
    animation: moveStrip 30s linear infinite;
}

@keyframes moveStrip {
    0% {
    transform: translateX(100%);
    }
    100% {
    transform: translateX(-100%);
    }
}

/* card carousel */
.body2 {
  height: 600px;
  margin: 0;
  display: grid;
  grid-template-rows: 500px 100px;
  grid-template-columns: 1fr 30px 30px 30px 30px 30px 1fr;
  align-items: center;
  justify-items: center;
  background-color: black;
}

main#carousel {
  grid-row: 1 / 2;
  grid-column: 1 / 8;
  width: 100vw;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 600px;
  --items: 5;
  --middle: 3;
  --position: 1;
  pointer-events: visiblePainted;
}

div.item {
  position: absolute;
  width: 300px;
  height: 400px;
  background-color: green;
  --r: calc(var(--position) - var(--offset));
  --abs: max(calc(var(--r) * -1), var(--r));
  transition: all 0.25s linear;
  transform: rotateY(calc(-10deg * var(--r)))
    translateX(calc(-300px * var(--r)));
  z-index: calc((var(--position) - var(--abs)));
}

#featured{
    width: 300px;
    height: 400px;
}

div.item:nth-of-type(1) {
  --offset: 1;
}
div.item:nth-of-type(2) {
  --offset: 2;
}
div.item:nth-of-type(3) {
  --offset: 3;
}
div.item:nth-of-type(4) {
  --offset: 4;
}
div.item:nth-of-type(5) {
  --offset: 5;
}

input:nth-of-type(1) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}
input:nth-of-type(1):checked ~ main#carousel {
  --position: 1;
  
}

input:nth-of-type(2) {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}
input:nth-of-type(2):checked ~ main#carousel {
  --position: 2;
}

input:nth-of-type(3) {
  grid-column: 4 /5;
  grid-row: 2 / 3;
}
input:nth-of-type(3):checked ~ main#carousel {
  --position: 3;
}

input:nth-of-type(4) {
  grid-column: 5 / 6;
  grid-row: 2 / 3;
}
input:nth-of-type(4):checked ~ main#carousel {
  --position: 4;
}

input:nth-of-type(5) {
  grid-column: 6 / 7;
  grid-row: 2 / 3;
}
input:nth-of-type(5):checked ~ main#carousel {
  --position: 5;
}

/* Hide the text by default */
#displayText {
    display: none;
}

/* Style the label to look like a button */
label {
    background-color: black;
    color: #FFBF00;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    user-select: none;
}

/* Hide the checkbox input */
#showTextCheckbox {
    display: none;
}

/* When the checkbox is checked, show the text */
#showTextCheckbox:checked + #displayText {
    display: block;
}


</style>