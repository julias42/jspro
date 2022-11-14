const sale_center = {

    methods: {
        onEntry(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    change.target.classList.add('element-show');
                }
            });
            let options = { threshold: [0.1] };
            let observer = new IntersectionObserver(onEntry, options);
            let elements = document.querySelectorAll('.sale, .product_info');
            for (let elm of elements) {
                observer.observe(elm);
            }
        }
    },

    template: `<div class="sale center">
    <div class="sale_item">
        <img src="img/sale1.jpg" alt="sale one">
        <div class="sale_content">
            <p class="sale_text">30% OFF</p>
            <h3 class="sale_heading">FOR WOMEN</h3>
        </div>
    </div>
    <div class="sale_item">
        <img src="img/sale2.jpg" alt="sale two">
        <div class="sale_content">
            <p class="sale_text">HOT DEAL</p>
            <h3 class="sale_heading">FOR MEN</h3>
        </div>
    </div>
    <div class="sale_item">
        <img src="img/sale3.jpg" alt="sale three">
        <div class="sale_content">
            <p class="sale_text">NEW ARRIVALS</p>
            <h3 class="sale_heading">FOR KIDS</h3>
        </div>
    </div>
    <div class="sale_item_big">
        <img class="sale_big_img" src="img/salebig.jpg" alt="sale four">
        <div class="sale_content">
            <p class="sale_text">LUXIROUS&TRENDY</p>
            <h3 class="sale_heading">ACCESORIES</h3>
        </div>
    </div>
</div>`
}