app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!--Code Challenge no. 6-->
        <!--insert your code using :class in img-->
        <img v-bind:src="image">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <!--Code Challenge no. 1-->
        <!--Put your code here-->
        <p>{{description}}</p>
        

        <p v-if="inStock">On Sale</p>
        <p v-else>Out of Stock</p>

        <!--Code Challenge no. 7-->
        <!--Modify code challenge 3-->

        <!--Code Challenge no. 3-->
        <!--Put your code here-->

        <br>
        <p>Shipping: {{ shipping }}</p>
        <br>
        <ul>
          <p>Shoe Details:</p>
          <li v-for="detail in details" class="list">{{ detail }}</li><br>
          <p>Available Sizes:</p>
          
          <li v-for="detailq in detailed" class="list">{{ detailq }}</li>
        </ul>

        <!--Code Challenge no. 4-->
        <!--Put your code here-->

        <ul style="display: flex">
          <li 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
          </li>
        </ul>
        
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="addToCart">
          Add to Cart
        </button>

        

        <!--Code Challenge no. 5-->
        <!--Put your code here-->
        <button 
          class="button" 
          :class="{ disabledButton: !inStock }" 
          :disabled="!inStock" 
          v-on:click="removeFromCart">
          Remove Item
        </button>

       

      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
        product: 'Shoes:Footwear Men Size',
        brand: 'NIKE',
        // Code Challenge no. 1
        // Add description
        // DONE
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        detailed: ['Small','Large','Extralarge'],
        // Code Challenge no. 3
        // Add onSale = boolean
        

        // Code Challenge no. 2
        //Insert your code in variants
        // DONE
        variants: [
          { id: 0001, color: '#fc030f', image: './assets/images/shoe1.png', quantity: 50},
          { id: 0002, color: '#542c2d', image: './assets/images/shoe2.png', quantity: 10 },
          { id: 0003, color: '#0f122d', image: './assets/images/shoe3.png', quantity: 20 },
          { id: 0004, color: '#237fc8', image: './assets/images/shoe4.png', quantity: 0 },
        ],

        // Code Challenge no. 4
        // Add an array
        
        reviews: []
    }
  },
  methods: {
      addToCart() {
          this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
      },
      
      updateVariant(index) {
          this.selectedVariant = index
      },
      addReview(review) {
        this.reviews.push(review)
      },
      // Code Challenge no. 5
      // Add removeFromCart()
      // Note: this.cart -= 1, if the cart = 0, it will stop to decrement
      removeFromCart() {
        if (this.cart >= 1) {
            this.cart -= 1
        }
    }

      
  },
  computed: {
      title() {
          return this.brand + ' ' + this.product
      },
      image() {
          return this.variants[this.selectedVariant].image
      },
      inStock() {
          return this.variants[this.selectedVariant].quantity
      },
      
      shipping() {
        if (this.premium) {
          return 'Free'
        }
        return 2.99
      },
      // Code Challenge no. 7
      // Add sale()
      //use if then return ''
      //you can refer to the title()
      
  }
})