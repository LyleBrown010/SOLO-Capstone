<template>
<div>
    <div class="">
        <div class="text-center mx-auto" id="main">
            <p id="intro">Welcome to SOLO. <br> Where art comes to life in every stroke, color, and creation.</p> 
            <!-- <p> We're not just an art gallery; we're a vibrant tapestry of local talent and artistic expression. As we evolve from our roots as a physical gallery to embrace the digital realm, our passion for showcasing the finest local artists remains unwavering.</p> -->
        </div>
    </div>
    <div class="row">
        <div class="col-6"><img id="store" src="https://i.postimg.cc/VvDGfJYF/ruben-ramirez-Ltk-VWp-OPK9w-unsplash.jpg" alt=""></div>
        <div class="col-6 p-3" id="text">
            <h4>Where it all began</h4>
            <p id="p">SOLO was born in the heart of Cape Town, where the walls of our physical gallery have borne witness to countless masterpieces, each telling a unique story. We've been a pillar of the local art community, championing emerging and established artists alike. The energy, the conversations, and the connections created within these walls are the essence of SOLO.</p><br>
            <h4>Our Digital Transformation: The Future of Art</h4>
            <p id="p"> In an ever-evolving world, we've adapted to bring art into the digital age. Our new online ecommerce platform opens doors to art lovers around the globe, ensuring that the world can experience the beauty and creativity that emanates from our local artists. We're excited to share our ever-expanding collection with the world, making art more accessible than ever before.</p>
        </div>
    </div><br>
    <div class="row">
        <div class="col-12">
            <h4 class="text-center">Local Artists at the Heart of SOLO</h4>
            <p class="text-center">Our dedication to local talent remains at the forefront of our mission. We continue to provide a platform for local artists to shine, to express, and to inspire. From painters and sculptors to photographers and mixed-media creators, SOLO celebrates the diversity of artistic expression in our community.</p>
        </div>
    </div>
    <h4 class="text-center">Latest Members to our Team</h4>
    <div class="container row ">
        <div class="col-4 ">
        <div class="card card0">
            <h2>Sibs Frank</h2>
        </div>
        </div>
        <div class="col-4">
            <div class="card card1">
            <h2>Fred</h2>
        </div>
        </div>

        <div class="col-4">
            <div class="card card2">
            <h2>Luna</h2>
        </div>
        </div>
        
        
    </div>
</div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: 'Lalezar', cursive;
}

#main{
    width: 100%;
    background-color: #FFDF7D;
    padding: 7%;
    font-family: 'Rubik Mono One', sans-serif !important;
}

#intro{
    font-size: 130%;

}
#text, #p{
    background-color: black;
    color: #FFF9F0;
}

#text{
    height: 40vh;
}
@media only screen and (max-width: 1306px){
    #text{
        font-size: 70%;
    }
}

@media only screen and (max-width: 680px){
  #main{
    width: none;
  }
}
#store{
    width: 100%;
    height: 40vh;
}

.container{
    /* height: 100vh;
    width: 100vw; */
    /* max-height: 800px;
    max-width: 1280px; */
    min-height: 300px;
    min-width: 100%;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
}

@media only screen and (max-width: 612px){
  .container{
    grid-template-columns: auto auto;
  }
}
@media only screen and (max-width: 460px){
  .container{
    grid-template-columns: auto;
  }
}



    

.card{
    height: 250px;
    width: 200px;
    background: grey;
    border-radius: 10px;
    transition: background 0.8s;
    overflow: hidden;
    background: black;
    box-shadow: 0 70px 63px -60px #000000;
    display: flex;
    justify-content: end;
    align-items: center;
    position: relative;
}
 

.card0{
    background: url('https://i.postimg.cc/VLNc04gQ/markus-stephen-griffiths-Mt-SF6-U6gy2-Q-unsplash.jpg') center center no-repeat;
    background-size: 200px;
}

.card0:hover{
    background: url('https://i.postimg.cc/VLNc04gQ/markus-stephen-griffiths-Mt-SF6-U6gy2-Q-unsplash.jpg') left center no-repeat;
    background-size: 400px;
}

.fa{
    opacity: 1
}

.card1{
    background: url('https://i.postimg.cc/k4hDV6Cm/christian-buehner-Xi-WX754jx0s-unsplash.jpg') center center no-repeat;
    background-size: 200px;

}

.card1:hover{
    background: url('https://i.postimg.cc/k4hDV6Cm/christian-buehner-Xi-WX754jx0s-unsplash.jpg') left center no-repeat;
    background-size: 400px;
}


.fa{
    opacity: 1;
}

.card2{
    background: url('https://i.postimg.cc/8cZdJTHv/markus-stephen-griffiths-z-Zm8b-KTXm-SU-unsplash.jpg') center center no-repeat;
    background-size: 200px;

}

  .card2:hover{
      background: url('https://i.postimg.cc/8cZdJTHv/markus-stephen-griffiths-z-Zm8b-KTXm-SU-unsplash.jpg') left center no-repeat;
      background-size: 400px;

  }

.fa{
    opacity: 1;

}

h2{
    color: #FFDF7D;
    margin: 20px;

}

.fa{
    opacity: 0;
    transition: opacity 1s;

}
</style>