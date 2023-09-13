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
        <div class="col-6">
            <h4>Where it all began</h4>
            <p>SOLO was born in the heart of Cape Town, where the walls of our physical gallery have borne witness to countless masterpieces, each telling a unique story. We've been a pillar of the local art community, championing emerging and established artists alike. The energy, the conversations, and the connections created within these walls are the essence of SOLO.</p>
        </div>
    </div>
    <div class="row">
        <div class="col-6">
            <h4>Our Digital Transformation: The Future of Art</h4>
            <p>In an ever-evolving world, we've adapted to bring art into the digital age. Our new online ecommerce platform opens doors to art lovers around the globe, ensuring that the world can experience the beauty and creativity that emanates from our local artists. We're excited to share our ever-expanding collection with the world, making art more accessible than ever before.</p>
        </div>
        <div class="col-6">Image</div>
    </div>
    <div class="row">
        <div class="col-12">
            <h4>Local Artists at the Heart of SOLO</h4>
            <p>Our dedication to local talent remains at the forefront of our mission. We continue to provide a platform for local artists to shine, to express, and to inspire. From painters and sculptors to photographers and mixed-media creators, SOLO celebrates the diversity of artistic expression in our community.</p>
        </div>
    </div>
    <h3>ART TEAM</h3>
    <div class="container row">
        <div class="col-4">
        <div class="card card0">
            <h2>Al Pacino</h2>
        </div>
        </div>
        <div class="col-4">
            <div class="card card1">
            <h2>Ben Stiller</h2>
        </div>
        </div>

        <div class="col-4">
            <div class="card card2">
            <h2>Patrick Stewart</h2>
        </div>
        </div>
        
        
    </div>
</div>
</template>

<style scoped>
#main{
    width: 100%;
    background-color: #FFDF7D;
    height: 20vh;
}

#intro{
    font-size: 30px;
}

#store{
    width: 100%;
    height: 70%;
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
    /* display: flex;
    justify-content: space-between; */
    align-items: center;
    margin: 0 auto;
}


/* .border{
    height: 369px;
  width: 290px;
  background: transparent;
  border-radius: 10px;
  transition: border 1s;
  position: relative;
}
 

  .border:hover{
    border: 1px solid white;
} */
    

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
    background: url('https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg') center center no-repeat;
    background-size: 200px;
}

.card0:hover{
    background: url('https://i.pinimg.com/736x/8f/a0/51/8fa051251f5ac2d0b756027089fbffde--terry-o-neill-al-pacino.jpg') left center no-repeat;
    background-size: 400px;
}

/* h2{
    opacity: 1
} */

.fa{
    opacity: 1
}

.card1{
    background: url('https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg') center center no-repeat;
    background-size: 200px;

}

.card1:hover{
    background: url('https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg') left center no-repeat;
    background-size: 400px;
}

/* h2{
    opacity: 1;

} */

.fa{
    opacity: 1;
}

.card2{
    background: url('https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg') center center no-repeat;
    background-size: 200px;

}

  .card2:hover{
      background: url('https://i.pinimg.com/originals/ee/85/08/ee850842e68cfcf6e3943c048f45c6d1.jpg') left center no-repeat;
      background-size: 400px;

  }

/* h2{
    opacity: 1;

} */

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