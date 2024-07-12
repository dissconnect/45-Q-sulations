let magician : string[] = ["shehzad","shehbaz","arbaz"];

function copyArray(arr:string[]){
   return [...arr]
}

function make_great2(magicianArrey: string[]) {

    for (let i = 0; i < magicianArrey.length; i++) {

        magicianArrey[i] = 'the great ' + magicianArrey[i]
    }
    
}

function show_magicians(magicians: string[]){

    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician)

make_great2(copyMagicianArray);

console.log('\nThis is my original arrey:');
show_magicians(magician);

console.log('\nThis is my modified copy of the arrey:');
show_magicians(copyMagicianArray);



