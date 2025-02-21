export function capitalizeEachFirstLetter(letter: string){
    if(letter){
        return letter.charAt(0).toUpperCase() + letter.slice(1);
    }
}