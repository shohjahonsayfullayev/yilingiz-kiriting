
// const Age = +prompt("yoshingizni kiriting ")





// const Year = [1985,1995,2000,2004,1985,2006]


// function YearNatija(a,b) {
//     const jami = (a - b)
//     return jami
// }

// console.log(YearNatija(2023,Age));


const input = document.querySelector(".input")
const Button = document.querySelector('.button')
const h1 = document.querySelector('.h1')



const Year = []





Button.addEventListener('click',function() {
    const Teng= input.value
    Year.push(Teng)



    for (let i = 0; i < Year.length; i++) {
        const YearOld = Year[i]
    
    
        function YearNatija(a,b) {
            const jami = (a - b)
            return jami
        }
    
        h1.innerHTML = `${YearNatija(2023,YearOld)} - yoshdasiz`
        

        
        
    } 

    
})