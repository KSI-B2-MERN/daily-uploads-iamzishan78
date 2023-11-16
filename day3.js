console.log('************Arrays Function************')

{
    console.log('**Sort Function**')
    let compare=(a,b)=>{
        return b-a;
    }
    const array=[10,20,80,700,8,30,50]
r= array.sort(compare)
console.log(r)
console.log(array)
}
{
    console.log("**JOIN Function**")
    array=[1,2,3,4,5]
    narray= array.join('-')
    console.log(narray)
    console.log(array)
}
{
    console.log("**Array Concatination**") 
    const array1=[1,2,3,4,5]
    const  array2=[10,20,30,40,50]

    const array3= array1.concat(array2)
    console.log(array3)
}
{
    console.log("**Array Reverse**") 
    const array1=[1,2,3,4,5]
    //const  array2=[10,20,30,40,50]
    const array3= array1.reverse()
    console.log(array3)
}
{
    console.log("**Array Slice**") 
    const array1=[1,2,3,4,5]
    //const  array2=[10,20,30,40,50]
    const array3= array1.slice(2,3)
    console.log(array3)
}
{
    console.log("**Array Splice**") 
    const array1=[1,2,3,4,5]
    //const  array2=[10,20,30,40,50]
    const array3= array1.splice(1,3,10,20,30)
    console.log(array3)
    console.log(array1)
}
{
    console.log("**Array Map**") 
    const array1=[1,2,3,4,5]
    const my=array1.toString()
    console.log(my,typeof(my))
}
{
    console.log("**Array Map**") 
    const array1=[1,2,3,4,5]
    const array2 = array1.map((value,Index,array1)=>{
    console.log(value,Index,array1)
    return value+1
    }
    )
    console.log(array2)
}
{
    console.log("**Array Filter**") 
    const array1=[1,2,3,4,5]
    const newarray=array1.filter(
        (value)=>{
            return value>3
        }
    )
    console.log(newarray)
}
{
    console.log("**Array Reduce**") 
    const array1=[1,2,3,4,5]
    const newarray=array1.reduce(
        (value1,value2)=>{
            return value1+value2
        }
    )
    console.log(newarray)
}
{
    console.log("**Array flatMap**") 
    const array1=["Hello","I am Zeeshan","Naseeb Khan"]
    const newarray=array1.flatMap(
        (value)=>{
            return value.split(" ")
        }
    )
    console.log(newarray)
}
{
    console.log("**Array Flat**") 
    const array1=[1,[0,20,10,1],[20,30]]
    
    console.log(array1.flat(Infinity))
   // console.log(array1)
}
{
    console.log("**Array Find**") 
    const array1=[1,20,30,2000,4000]
    const newarray= array1.find((value)=>{
        return value >2500
    })
    console.log(newarray)
}



console.log('Loops')

//////////////For Loop
console.log('************For Loop************')

let table=5
for(let i=1; i<11;i++){
    console.log(table,"*",i,"=",table*i)
}

//////////////While Loop
console.log('************While Loop************')

const array=[1,2,3,4,5,6,7,8,9]
let i=0;
while(i<array.length){
        console.log("Our value at",i,"Index is", array[i])
        i++
}
