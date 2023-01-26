export const capitalize = (word:string):string|undefined => {
  if(!word) return 
  return word[0].toLocaleUpperCase()+word.slice(1)
}


