function solution(input){
   let search = input[0];
   let n = 1;
   while(input[n] != search && input[n] != `No More Books`){
       n++;
   }
   if(input[n] == search){
       console.log(`You checked ${n-1} books and found it.`)
   }else if(input[n] == `No More Books`){
       console.log(`The book you search is not here!`)
       console.log(`You checked ${n-1} books.`)
   }
}
solution(["Bourne",

"True Story",

"Forever",

"More Space",

"The Girl",

"Spaceship",

"Strongest",

"Profit",

"Tripple",

"Stella",

"The Matrix",

"Bourne"])