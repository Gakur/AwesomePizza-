$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
//Get inputs
    $("#checkout").click(function () {
        let flavour = $(".flavour option:selected").val();
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);

        //Function order
        let order = (f, s, c, t, n, total) => {
            return {f, s, c, t, n, total};
        };

        //check price
        let price, totalPrice;
        switch (flavour) {
            case flavour = "pepperoni":
                switch (size) {
                    case size = "small":
                        price = 400;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;   
                        }
                        break;
                    case size = "medium":
                        price = 750;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                }
                break;
            case flavour = "margherita":
                switch (size) {
                    case size = "small":
                        price = 400;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "medium":
                        price = 750;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                }
                break;
            case flavour = "buffalo":
                switch (size) {
                    case size = "small":
                        price = 400;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "medium":
                        price = 750;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                }
                break;
            case flavour = "bbq":
                switch (size) {
                    case size = "small":
                        price = 400;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "medium":
                        price = 750;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                }
                break;
            case flavour = "meat":
                switch (size) {
                    case size = "small":
                        price = 400;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "medium":
                        price = 750;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                }
                break;
            case flavour = "hawaiian":
                switch (size) {
                    case size = "small":
                        price = 400;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "medium":
                            price = 750;
                            if (crust === "cheese-stuffed") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "thin") {
                                totalPrice = (price * number) + 150;
                            } else if (crust === "flatbread") {
                                totalPrice = (price * number) + 200;
                            } else if (crust === "sicilian") {
                                totalPrice = (price * number) + 300;
                            } else {
                                totalPrice = (price * number) + 380;
                            }    
                    case size = "large":
                        price = 1500;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                }
                break;
            case flavour = "veggie":
                switch (size) {
                    case size = "small":
                        price = 400;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "medium":
                        price = 750;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                }
                break;
            case flavour = "cheese":
                switch (size) {
                    case size = "small":
                        price = 400;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "medium":
                        price = 750;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                    case size = "large":
                        price = 1500;
                        if (crust === "cheese-stuffed") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "sicilian") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 380;
                        }
                        break;
                }
                break;
        }
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 100;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 100;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 100;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 100;
                break;
            case topping = "sausage":
                totalPrice = totalPrice + 150;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 150;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 150;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 150;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 150;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 190;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 190;
                break;

        }

        //Execute order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder); // test func

        //create a new object
        // let myOrder = JSON.stringify(JSON.parse(newOrder));

        //Write to the order
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css("font -family", "times new roman").css('font-size', '24px');
    });

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').show();
    });

    //Click to order
    $(".click-to-order").click(function () {
        alert("Hello, + name, your order will be delivered at, + location in 20min");
    });


    //Pick Up
    $(".delivernot").click(function () {
        $(".summary").slideUp();
        $(".summary").text("Your order will be ready in 10 minutes. Thank you for choosing PizzaINN").slideDown();


    });
});