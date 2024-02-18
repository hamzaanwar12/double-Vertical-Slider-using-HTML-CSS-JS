let types = document.querySelector(".types")
let imagePart = document.querySelector(".imagePart")
let bottomButton = document.querySelector(".left")
let topButton = document.querySelector(".right")
let click = 1;

console.log(types)
console.log(imagePart)
console.log(bottomButton)
console.log(topButton)


let slide = ()=>
{
    if(click<4)
    {
        click++;
        imagePart.style.transform =  `translateY(-${(3-click+1)*100}vh)`;
        types.style.transform =   `translateY(-${(click-1)*100}vh)`;
    }
    else if(click==4)
    {
        click=1;
        imagePart.style.transform =  `translateY(-${300}vh)`;
        types.style.transform =   `translateY(${0}vh)`;
    }
}

 topButton.addEventListener("click",slide)
 bottomButton.addEventListener("click",slide)

//Fauly Logic 
/*
let backgrounds = [".eagle",".castle",".flower",".sky"]
let textSideNodes = [];
let backgroundNodes = [];
let index = 0;
for(let i=0;i<backgrounds.length;i++)
{
    backgroundNodes[i] = document.querySelector(`${backgrounds[i]}`); 
    textSideNodes[i] = document.querySelector(`${backgrounds[i]}_t`);
}

console.log(backgroundNodes,textSideNodes)

let slide = (index)=>
{
    if(index<3 && index>=0)
    {
        backgroundNodes[index].classList.add("Inactive")
        
        if(backgroundNodes[index].classList.contains("Active"))
            backgroundNodes[index].classList.remove("Active")
        
        if(backgroundNodes[index+1].classList.contains("Inactive"))
            backgroundNodes[index+1].classList.remove("Inactive")

        backgroundNodes[index+1].classList.add("Active")
    }
    else if(index==3)
        index=0
}

let buttons = [document.querySelector(".left"),document.querySelector(".right")]
console.log(buttons)

buttons[0].addEventListener("click",()=>
{
    slide(index)
    --index;
})
buttons[1].addEventListener("click",()=>
{
    slide(index)
    ++index;
}) 
*/