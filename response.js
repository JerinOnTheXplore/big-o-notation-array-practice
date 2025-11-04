/* Grouping and Aggregating Data*/

// Scenario: Count every survey and group by response

// input//
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

/* TODO initiate empty object
 * TODO Check if the response already exist or not
 * TODO If it exists then increment the count
 * TODO If not then initialize it with 1 
*/

const count = surveyResponses.reduce((table, response)=>{
    if (table[response]){
        table[response] = table[response] +1 ;
    } else {
        table[response] = 1;
    }
    return table;
},{});

console.log(count);

/* Step by step */
 /**
  * 1. shurutei table amer khali object toiri korsi..{}
  *  2. first iteration e response = A..table e A key nai tai notun key "A" = 1 jog kora hoy..
  * table ekhon {A:1}
  * 3. 2nd iteration e response = C ...C key nei tai " C: 1" jog kore pai..table e ekohn {A:1,C:1}
  * 4. 3rd iteration e respose = B ..B key nei tai "B" = 1 jog kore...table e {A:1,C:1,B:1}
  * 5. 4th iteration e response = "A"..."A" key age thekei ache..tai count bariye "A": 2..tablee e ekhon {A:2,C:1,B:1 }
  * 6. ei vabe puro array ghure prottek response onujayi count barte thake..
  */

//final output :
// { A:5, C:3, B:5, D:1}

// Complexity:
/**
 * Time Complexity: O(n) ...karon prottek element ekbar kore transverse kora hoise..
 */