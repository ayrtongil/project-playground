// Desafio 1 -Crie uma função compareTrue

const compareTrue = (valor1,valor2) => {
    let final = '';
    if (valor1 === true && valor2 === true) 
    {
      final = true;}
       else {
      final = false;
    }
    return final;}
    console.log

    // Desafio 2 -Crie uma função splitSentence

    const splitSentence = (string) => string.split (' ') ;

   // Desafio 3 -Crie uma função concatName

    const concatName = (array) => 
    `${array [array.length - 1 ] }
    , ${array[0] }` ;

    // Desafio 4 -Crie uma função footballPoints

    const footballPoints = (wins, ties) => {
        const win = *4;
        return wins * win + ties; 
        }

    // Desafio 5 -Crie uma função highestCount

    const highestCount = (array) => {
        const array = [7, 3, 2, 1, 8, 5, 7] ;
        const array2 = [6, 2, 9, 5, 3,7 ,4 ] ;
        let count = 1 ;
        for ( let index = 0; index < param.length; index += 1) {
            if (param[index] === biggestNumber) { count += 1 ; }
          }
        }

    // Desafio 6 -Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

        const calcTriangleArea = (base, height) => (base * height) / 2;
        const calcRectangleArea = (base, height) => (base * height);
        const calcAllAreas = (base, height, form) => 
        function calcAllAreas(base, height, form) {
            if ( form == 'triângulo') 
            { return 'O valor da área do triângulo é de: '+calcTriangleArea(20, 60);
            } else if ( form == 'retângulo')
            { return 'O valor da área do retângulo é de: '+calcRectangleArea(20, 60);
            } else {
              return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida'} 
        }

    // Desafio 7 -Crie uma função catAndMouse

    function catAndMouse(mouse, cat1, cat2) {
        let result = '';
         const dis1 = Math.abs(mouse - cat1);
         const dis2 = Math.abs(mouse - cat2);
        if ((dis1) < (dis2)) {
        result = 'cat1';
        } else if ( (dis2) < (dis1) ) {
        result = 'cat2';
        } else if (dis1 === dis2) {
        result = 'os gatos trombam e o rato foge'; 
         return result; } 
        } 

    // Desafio 8 -Crie uma função fizzBuzz

    const fizzBuzz = (array) => {
        const fB = [];
        for (const index of array) {
          if ((index % 7) === 0 && (index % 9) === 0) {
            fB.push('fizzBuzz');
          } if ((index % 7) === 0) {
            fB.push('buzz');
          } if ((index % 9) === 0) {
            fB.push('fizz');} 
            else {
            fB.push('bug!');}
        }
        return fB;
       }
 
       // Desafio 9 -Crie uma função encode e a função decode

       const encrypt = {
        a:6,
        y:5,
        r:4,
        t:3,
        o:2,
        n:1,
      };
      const encode = (string1) => string1.replace(/a|y|r|t|o|/ g,(x)=>encrypt[x]);
      
    const decrypt = {
        6:'a',
        5:'y',
        4:'r',
        3:'t',
        2:'o',
        1:'n',
      };
      const decode = (string2) => string2.replace(/6|5|4|3|2|1/ g,(x)=>decrypt[x]);

      // Desafio 10 -Crie uma função techList

      const linguagens = 
      ['JavaScript', 'Jest', 'CSS', 'HTML', 'React'];
      const name = 'Ayrton';
      function techList (array, name){
      let emptArray = [];}
      for (let index = 0; index <sortedArray.length; index += 1) 
      {
        result[index] = 
        {
          tech: sortedArray[index],
          name,
        }
    }
      