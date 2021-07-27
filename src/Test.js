
arr =[10,20,30,40]
// for(let item of arr)
// {
//     //console.log(arr.indexOf(item));
//     // if(arr.indexOf(item%2)==0)
//     // {
//     //     console.log('even',arr.indexOf(item));
//     // }
//     // else
//     // console.log('odd',arr.indexOf(item));  

//     //console.log((arr.indexOf(item)%2==0)?('even: '+arr.indexOf(item)+' : '+item):'odd:  '+arr.indexOf(item)+' : '+item)
//     console.log((arr.indexOf(item)%2==0)?('even: '+arr.indexOf(item)+' : '+item):('odd:  '+arr.indexOf(item)+' : '+arr.pop(item)))
// }

let temp = arr.map((data)=>{
   if(arr.indexOf(data)%2==0){
         data = ('even: '+arr.indexOf(data)+' : '+data);
    }
    else {
      data =  ('odd:  '+arr.indexOf(data)+' : '+arr.pop(data));
    }
    return data;
})

arr=temp
console.log(arr);

