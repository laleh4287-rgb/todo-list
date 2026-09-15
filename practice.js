for ( let i = 1; i <= 20; i++

){
    console.log(i);
}
 console.log(10 % 2);
 console.log(4 % 2);
 console.log(7 % 2);

 for (let i = 1; i <= 10; i++) {

    if (i % 2 == 0) {
        console.log("محصول شماره " + i + "تخفیف داره!");
    }
 }

 for ( let i = 1; i <= 15; i++) {
     if (i % 3 === 0) {
        console.log( "محصول شماره"   + i + "ارسال رایگان داره ")
     }
 }

 let inventory = 5;
    while (inventory > 0) {
        console.log("یه کفش فروحته شد! موجودی باقی مونده" + inventory);
        inventory--;
    }

    let tickets = 4;
     while (tickets > 0) {
           console.log("یه بلیط فروخته شد ! باقی مونده" + tickets);
           tickets--;
     }

     let products = [ "کلاه" , "کیف" ,"کفش"];
        console.log(products);
        console.log(products[1]);
        console.log(products.length);

        let fruits = ["انار","نارنگی","انبه","موز"]
            console.log(fruits);
            console.log(fruits[0]);
            console.log(fruits.length);

        let snacks = ["بیسکویت","چیپس"];
            console.log(snacks);
            snacks.push("شکلات");
            console.log(snacks);
            snacks.pop();
            console.log(snacks);

        let cart = ["خودکار","دفترچه"];
            console.log(cart);
            cart.push("پاکن");
            console.log(cart);
            cart.pop();
            console.log(cart);

        let fruitslist = ["پرتقال","موز","سیب"];

            for (let i = 0; i < fruitslist.length; i++) {
                console.log(fruitslist[i]);
            }

            let colors = ["بنفش","قرمز","سرمه ای","مشکی"];
                for (let i = 0; i < colors.length; i++) {
                    console.log(colors[i]);
                }

            let animals = ["خرگوش","سگ","گربه"];
            animals.forEach(function(animal) {
            console.log(animal);
});

            for (let animal of animals) {
                console.log(animal);
            }

            let product = {
                name: "کفش",
                price: 250000,
                color: "مشکی"
            };
            console.log(product.name);
            console.log(product.price);
            console.log(product.color);

            product.price = 300000
            product.size = 42;
            console.log(product);

            let student = {
                name: "لاله",
                age: 18,
                city: "تگزاس"
            }
            console.log(student.name);
            console.log(student.age);
            console.log(student.city);

            student.age = 19
            student.grade = "دوازدهم";
            console.log(student);

            let person = {
                name: "سارا",
                sayHello: function() {
                console.log( "هستم!" + this.name +  "سلام, من");

                }
            };
            person.sayHello();

            let car = {
                brand: "dodge",
                color: "مشکی",
                start: function() {
                console.log("ماشین" + this.brand + "روشن شد !"); 
            }
            };
            car.start();

            
            let productss = [
            { name: "کفش", price: 250000 },
            { name: "کیف", price: 400000 },
            { name: "کلاه", price: 100000 },

            ];
            console.log(productss[0]);
            console.log(productss[0].name);
            console.log(productss[1].price);

            let myprofile = {
                name: "سارا",
                age: 25,
                city: "تهران"
            };
            for (let key in myprofile) {
                console.log(key);
            }

            let book = {
                title: "جنایات و مکافات",
                author: "فیودور دایستافسکی",
                pages: 900
            };
            for (let key in book) {
                console.log(key);
            }

            let btn = document.getElementById("mybutton");
            console.log(btn);
            btn.textContent = "کلیک شد!";
            btn.style.backgroundColor = "yellow";
            btn.style.color = "blue";
            
            let nameInput = document.getElementById("nameInput");
            let ageInput = document.getElementById("ageInput");

            btn.addEventListener("click", function() {
    console.log("دکمه کلیک شد!");
    
    btn.style.backgroundColor = "green";
    console.log(nameInput.value);
});