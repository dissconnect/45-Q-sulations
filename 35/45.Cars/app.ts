    function storeCarinfo(manufacturer: string, modelName: string, ...extraOption:{[key : string]: any }[] ): object {
        const carInfo = {
            manufacturer,
            modelName,
            ...Object.assign({}, ...extraOption)
        }
return carInfo;
    };

   let answer = storeCarinfo('honda','Civic',{color:'black'}, {features: ['navigation','Power window']})
    
console.log(answer)









