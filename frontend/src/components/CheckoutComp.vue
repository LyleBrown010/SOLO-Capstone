<template>
    <div>
        <div class="checkout" v-if="cart.length > 0" >
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in cart" :key="item.product.prodId">
                            <td>{{item.product.prodID}}</td>
                            <td>{{item.product.productName}}</td>
                            <td>{{item.product.productPrice}}</td>
                            <td>{{item.product.productUrl}}</td>
                            <td><button @click="deleteProduct(prodID)" id="btn"> Delete</button></td>
                        </tr>
                    </tbody>
                </table>
                <button @click="clearCart()" id="btn">Clear Cart</button>
                <div>
                    <span>Total: R{{Total}}</span>
                </div>
                <button @click="checkout()" type="submit" id="btn">Checkout</button>
            </div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';

export default{
    data(){
        return{
            cart: [],
        }
    }, 
    created(){
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.cart = cart;
    }, 
    methods: {
        deleteProduct(prodID) {
        const updatedCart = this.cart.filter(item => item.product.prodID!== prodID);
        this.cart = updatedCart;
        this.saveCart();
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    checkout() {
      Swal.fire({
        title: Message,
        text: 'Proceed with checkout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          this.processCheckout();
        } 
      });
    },
    processCheckout() {
      Swal.fire('Success', 'Checkout completed successfully, Your Artwork is ready for pick up!', 'success');
    }
    }, 
    computed:{
        Total(){
            let total = 0;
            for (const item of this.cart) {
            total += this.calculateTotal(item);
             }
         return total;
        }
    }
}
</script>

<style scoped>
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
