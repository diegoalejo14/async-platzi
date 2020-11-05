const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => resolve('Resolve'), 3000)
        } else {
            reject(new Error('Test error'))
        }
    })
}

const doSomething = async () => {
    const something=await doSomethingAsync();
    console.log(something)
}

console.log('before')
doSomething();
console.log('after')

const anotherFunction=async()=>{
    try{
        const something=await doSomethingAsync();
        console.log(something)
    }catch(err){
        console.error(err)
    }
}

console.log('before 1')
anotherFunction();
console.log('after 2')