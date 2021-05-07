const fs = require('fs')

var inputString = process.argv;

var func = process.argv[2];

if(func === "total"){
    fs.readFile('banco.txt', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        let total = 0;
        var amounts = data.split(",");
        amounts.forEach(amount => {
            if(!Number.isNaN(Number.parseInt(amount))){
                total = total + Number.parseInt(amount);
            }
        });
        console.log("El total de tu cuenta es de: ", total);
    });

}

if(func === "deposito"){
    var monto = process.argv[3];
    console.log("Se realizó un deposito de:", monto);
    var content = "," + monto;
    fs.appendFile('banco.txt', content, function (err) {
        if (err) return console.log(err);
    });
}

if(func === "retiro"){
    var monto = process.argv[3];
    console.log("Se realizó un retiro de: ", monto);
    var content = ",-" + monto;
    fs.appendFile('banco.txt', content, function (err) {
        if (err) return console.log(err);
    })
}