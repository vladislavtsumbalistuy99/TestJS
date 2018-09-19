var periodicIterator = function (array, time){
    for(let i = 0; i < array.length; i++){
        setTimeout(()=>console.log(array[i]), time * i);
    }
}
periodicIterator([3,2,3],100);

