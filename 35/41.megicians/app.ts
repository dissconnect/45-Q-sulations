function show_megicians(megicians: string[]): void {

    for (const megician of megicians) {
        console.log(megician.charAt(0).toUpperCase() + megician.slice(1));
    }
}
const megician: string[] = ["shehzad","shehbaz","arbaz"];
show_megicians(megician)