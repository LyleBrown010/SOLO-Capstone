<template>
  <div class="row">
    <div class="col-5 contact-form">
      <h2>Get in touch!</h2>
      <br />
      <form
        action="https://formspree.io/f/mzblrvgp"
        method="POST"
        class="p-2 green-bg"
      >
        <div class="mb-3 green-bg text-font">
          <label for="fullName" class="form-label green-bg"
            >Full Name(s): </label
          >
          <input
            v-model="fullName"
            type="text"
            id="fullName"
            name="Full Name"
            class="form-control p-2 light-bg"
            required
            oninvalid="this.setCustomValidity('Please insert full name')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div class="mb-3 green-bg text-font">
          <label for="email" class="form-label green-bg">Email: </label>
          <input
            v-model="email"
            type="text"
            id="email"
            name="Email"
            class="form-control p-2 light-bg"
            required
            oninvalid="this.setCustomValidity('Please insert Email')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div class="mb-3 green-bg text-font">
          <label for="message" class="form-label green-bg">Message:</label>
          <textarea
            v-model="message"
            id="message"
            name="Message"
            class="form-control p-2 light-bg"
            rows="5"
            placeholder="Leave us a message and we'll get back to you soon!"
            required
            oninvalid="this.setCustomValidity('Please insert Message')"
            oninput="this.setCustomValidity('')"
          ></textarea>
        </div>


        <div class="green-bg text-center">
          <button type="submit" class="btn m-2 add-btn text-font" id="btn">
            Submit!
          </button>
          <button type="reset" class="btn m-2 clr-btn text-font" id="btn">
            Clear Fields
          </button>
        </div>
      </form>
    </div>

    <div class="col-7">
      <div class="col-12" id="right-section">
        <div id="visit-us" class="p-3">
          <h4 class="text-center">Visit us:</h4>
          <p class="text-center">Address: 234 Forest Drive, Salt River, Cape Town</p>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28139.21864282934!2d18.44184702067224!3d-33.93531350262455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5d09797f9fc5%3A0x336f33ca28255691!2sSolo%20Factory%20Shop!5e0!3m2!1sen!2sza!4v1694261019551!5m2!1sen!2sza"
            width="100%"
            height="200"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="col-12 text-center" id="FAQ">
        <h4>Frequently Asked Questions</h4>
        <br />
        <h6>Where can I collect my purchased Artwork?</h6>
        <p class="answer">
          SOLO mainly caters for in person pick up. Artwork can be collected at
          our HQ. Shipping arrangements can be made. Please contact us!
        </p>
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
.contact-form {
  background-color: #ffdf7d;
  height: 72vh;
  padding: 5px;
}

#right-section {
  display: grid;
  grid-template-columns: auto auto;
  background-color: #fff9f0;
}

#FAQ {
  background-color: black;
  height: 46vh;
  color: #ffbf00;
  padding: 10px;
}

.answer {
  color: #fff9f0;
}

#visit-us {
  padding: 10px;
}

#btn {
  background: black;
  color: #FFF9F0;
  border: 3px solid #FFF9F0;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

#btn:hover {
  background: black;
  color: #FFD700;
  box-shadow: 0 0 30px 5px #FFF9F0;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
</style>
