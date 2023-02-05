const products = [
    {productId:1, productName: 'Товар 1', categoryId:1},
    {productId:2, productName: 'Товар 2', categoryId:2},
    {productId:3, productName: 'Товар 3', categoryId:3},
    {productId:4, productName: 'Товар 4', categoryId:4},
    {productId:5, productName: 'Товар 5', categoryId:5},
    {productId:6, productName: 'Товар 6', categoryId:1},
    {productId:7, productName: 'Товар 7', categoryId:2},
    {productId:8, productName: 'Товар 8', categoryId:3},
    {productId:9, productName: 'Товар 9', categoryId:4},
    {productId:10, productName: 'Товар 10', categoryId:5},
    {productId:11, productName: 'Товар 11', categoryId:1},
    {productId:12, productName: 'Товар 12', categoryId:2},
    {productId:13, productName: 'Товар 13', categoryId:3},
    {productId:14, productName: 'Товар 14', categoryId:4},
    {productId:15, productName: 'Товар 15', categoryId:5},
    {productId:16, productName: 'Товар 16', categoryId:1},
    {productId:17, productName: 'Товар 17', categoryId:2},
    {productId:18, productName: 'Товар 18', categoryId:3},
    {productId:19, productName: 'Товар 19', categoryId:4},
    {productId:20, productName: 'Товар 20', categoryId:5},
    {productId:21, productName: 'Товар 21', categoryId:1},
    {productId:22, productName: 'Товар 22', categoryId:2},
    {productId:23, productName: 'Товар 23', categoryId:3},
    {productId:24, productName: 'Товар 24', categoryId:4},
    {productId:25, productName: 'Товар 25', categoryId:5}
];

const categories = [
    {categoryId:1, categoryName: 'Футболки'},
    {categoryId:2, categoryName: 'Майки'},
    {categoryId:3, categoryName: 'Носки'},
    {categoryId:4, categoryName: 'Джинсы'},
    {categoryId:5, categoryName: 'Брюки'},
];

let tabsInputs = [...document.querySelectorAll(".input--js")];
let tabsLabels = [...document.querySelectorAll(".label--js")];
let tabsContent = [...document.querySelectorAll(".tab")];

tabsLabels.forEach(label => {
    let labelIndex = tabsLabels.indexOf(label);
    categories.forEach(category => {
        let categoryIndex = categories.indexOf(category);
        if (labelIndex === categoryIndex) {
            label.insertAdjacentText("beforeend", category.categoryName);
        }
    });
})

tabsInputs.forEach(tab => {
    let inputIndex = tabsInputs.indexOf(tab);
    tab.addEventListener("click", () => {
        if (tab.checked) {
            tabsLabels.forEach(label => {
                let labelIndex = tabsLabels.indexOf(label);
                if (inputIndex === labelIndex) {
                    label.classList.add("tab__name--active");
                } else {
                    label.classList.remove("tab__name--active");
                }
            })
            tabsContent.forEach(content => {
                let contentIndex = tabsContent.indexOf(content);
                if (inputIndex === contentIndex) {
                    content.classList.add("tab--active");
                } else {
                    content.classList.remove("tab--active");
                }
            });
        }
    })
});

tabsContent.forEach(content => {
        for (i = 0; i <= 4; i++) {
            if (tabsContent.indexOf(content) === i) {
                products.forEach(product => {
                    if (product.categoryId === i + 1) {
                        // content.insertAdjacentText("afterbegin", product.productName);
                        content.insertAdjacentHTML("afterbegin", `
                        <div class="tab__item">
                            <img src="tovar.jpg" width="80" height="80">
                            <span>${product.productName}</span>
                        </div>
                        `)
                    }
                })
            }
        }
});