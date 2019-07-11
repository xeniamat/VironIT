const VasyaInfo = {
    name: 'Vasya',
    address: {
        country: 'Belarus',
        city: 'Minsk',
    },
    phone: null,
    friends: ['Petya', 'Kolya', 'Sveta']
};


function writeValue(obj){
    let result = [];
    const values = Object.values(obj);
    values.forEach(function (item){
        if (typeof item !== 'object' || item === null){
            result.push(item);
        } else {
            result = result.concat(writeValue(item));
                     
        }    
    } );
    return result;
} 
console.log(writeValue(VasyaInfo));