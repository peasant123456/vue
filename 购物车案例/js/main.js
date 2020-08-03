const app = new Vue({
    el: '#app',
    data: {
        books: [{
                id: 1,
                name: '《linux基础》',
                date: '2011-02',
                price: 58.00,
                count: 1
            },
            {
                id: 2,
                name: '《python基础》',
                date: '2014-03',
                price: 68.00,
                count: 1
            },
            {
                id: 3,
                name: '《git操作》',
                date: '2010-08',
                price: 38.00,
                count: 1
            },
            {
                id: 4,
                name: '《vue基础》',
                date: '2016-04',
                price: 66.00,
                count: 1
            },
        ]
    },
    computed: {
        totalPrice() {
            // 1. 普通for循环
            // let total = 0;
            // for (let i = 0; i < this.books.length; i++) {
            //     total += this.books[i].price * this.books[i].count
            // }
            // return total

            // 2. for (let i in books)
            // let total = 0;
            // for (let i in this.books) {
            //     total += this.books[i].price * this.books[i].count
            // }
            // return total

            // 3. for (let i of this.books)
            let total = 0;
            for (let item of this.books) {
                total += item.price * item.count
            }
            return total
        }
    },
    methods: {
        finalPrice(price) {
            return '￥' + price.toFixed(2)
        },
        decrement(index) {
            this.books[index].count--
        },
        increment(index) {
            this.books[index].count++
        },
        removeHandler(index) {
            this.books.splice(index, 1)

        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2)
        }
    }

})