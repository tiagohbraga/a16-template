//Pratica guiada

// const megaSena = [
//     [1,3,5,7],
//     [0,2,4,6],
//     [4,8,12,18],
//     [5,10,15,20]
// ]

// if(megaSena.length===4){
//     for(let i=0;i<megaSena.length;i++){
//         //console.log(`sorteio ${i+1}: ${megaSena[i]}`)
//         let sorteio =`sorteio ${i+1}: `
//         for(let j = 0; j < megaSena[i].length; j++){
//            sorteio += megaSena[i][j] + ', '
//         }
//         console.log(sorteio)
//     }        

// }else{
//     console.log('é necessario alterar o numero de itens do array')
// }

//pratica guiada 2

// if(megaSena.length===4){
//     for(let i in megaSena){
//         let sorteio =`sorteio ${Number(i)+1}: `
        
//         for(let j of megaSena[i]){
//            sorteio += j + ', '
//         }
//         console.log(sorteio)
//     }        

// }else{
//     console.log('é necessario alterar o numero de itens do array')
// }

//pratica guiada 3
const filmes = [
    {
      titulo: 'O Auto da Compadecida',
      ano: 2000,
      diretor: 'Guel Arraes',
      elenco: [
        'Selton Mello',
        'Mateus Nachtergaele',
        'Marco Nanini',
        'Fernanda Montenegro',
      ],
    },
    {
      titulo: 'Carandiru',
      ano: 2001,
      diretor: 'Hector Babenco',
      elenco: [
        'Wagner Moura',
        'José Carlos Vasconcelos',
        'Ailton Graça',
        'Caio Blat',
      ],
    },
    {
      titulo: 'Aquarius',
      ano: 2012,
      diretor: 'Kléber Mendonça Filho',
      elenco: [
        'Sônia Braga',
        'Humberto Carrão',
        'Maeve Jinkings',
        'Bárbara Colen',
      ],
    },
  ]
  for (let i in filmes){
    console.log(`Filme ${Number(i)+1}:`)
    console.log(`"${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}"`)
        
        for(let j of filmes){
           j += `Elenco: ${filmes[i].elenco}`
            console.log(j) 
        }
        
  }