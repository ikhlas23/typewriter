const sentence = "hello there from lighthouse labs"; 
// animate the each letter to go 1 sec after the otehr 
// we want to loop over each letter 

const typewriter = (word) => {
  let time = 0; 
  for (const letter of sentence) {
    time += 50; 
   let char = ""
    setTimeout(() => {
      // process.stdout.write(letter);  
    //   inside
      char += letter;
      process.stdout.write(char);   
    }, time);
    // we had to increment the time in order to capture it 


  }
    setTimeout(() => {
      process.stdout.write('\n');  
    }, time)


}

typewriter(sentence);
