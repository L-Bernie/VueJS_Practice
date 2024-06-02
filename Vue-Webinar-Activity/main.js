const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true,
            description:"Shoes:Footwear Men Size",
            
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart() {
            if (this.cart >= 1) 
            {
                this.cart -= 1
            }
        },
        
        
    }
})
