const dog = {
    raining : true,
    noise : "Woof!",
    makeNoise: function() {
            console.log(this.noise)
        }
    }


const cat = {
    raining : false,
    noise: "Meow!",
    makeNoise : function() {
        console.log(this.noise);
    }
}

cat.raining = true;
if (dog.raining === true) {
    dog.makeNoise();
}
if (cat.raining === true) {
    cat.makeNoise();
}

const massHysteria = () => {
    if (dog.raining === true && cat.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

massHysteria();