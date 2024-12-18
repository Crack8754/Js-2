const graph = {
   name: 'RA',
   neighbours: [
     {
       name: 'RF',
       neighbours: []
     },
     {
       name: 'RC',
       neighbours: [
         {
           name: 'RB',
           neighbours: []
         },
         {
           name: 'RQ',
           neighbours: [
             {
               name: 'RB',
               neighbours: []
             }
           ]
         }
       ]
     }
   ]
};

function noname(graph, needToFind) {
   const queue = [graph]; 

   while (queue.length > 0) {
     const node = queue.shift(); 

     if (node.name === needToFind) {
       return true; 
     }

     if (node.neighbours.length) {
       queue.push(...node.neighbours);
     }
   }

   return false; 
}


console.log(noname(graph, 'RB'));  
console.log(noname(graph, 'ZZ'));