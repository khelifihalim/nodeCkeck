const fs = require('fs');
const data = 'hello node!';

fs.writeFile('welcome.txt', data, 
        
        function(err)  {
            if (err) {
             throw err;   
            }else{
              console.log(data) 
            }       
 })
 