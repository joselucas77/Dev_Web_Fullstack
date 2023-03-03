// for(var y = 1; y <=10; y++) {
//     for(var x = 1; x <= 10; x++) {
//         console.log(y + ' x ' + x + ' = ' + (y*x))
//     }

//     console.log('\n')
// }

var x = 1
var y = 1

while(x <= 10) {
    y=1
    while(y <= 10) {
        console.log(y + ' x ' + x + ' = ' + (y*x))
        y++
    }
    console.log('\n')
    x++
}
