let magician : string[] = ["shehzad","shehbaz","arbaz"];
function make_great (magicianArray:string[] ){
   for(let i = 0; i < magicianArray.length; i++) {
   magician[i] = 'the great '+ magicianArray[i]
   }
}




    function show_magicians(magicians: string[]){

        magician.forEach(Element => {
            console.log(Element);
        });
    }

make_great(magician);
show_magicians(magician);

