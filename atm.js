const leftBtn = document.querySelector(".leftList").children
const rightBtn = document.querySelector(".rightList").children
const rightInfo = document.querySelector("#rightInfo").children[0].children
const leftInfo = document.querySelector("#leftInfo").children[0].children
const atm = document.querySelector("#atm")
const atmText = atm.firstElementChild
const header = document.querySelector("#header")

console.log(rightInfo[0].innerText)
function ATM(){
    leftBtn[0].addEventListener('click', event => {
        atmText.innerText = "Would you like to withdraw or deposit money?"
        atm.children[1].style.cssText = "opacity: 0"
        rightInfo[0].innerText = "Withdraw money"
        leftInfo[0].innerText = "Deposit money"
        rightBtn[0].addEventListener('click', event => {
            atmText.innerText = "how much money would you like to withdraw?"
            rightInfo[0].innerText = "20 funtow"
            leftInfo[0].innerText = "50 funtow"
        })
        leftBtn[0].addEventListener('click', event => {
            atmText.innerText = "how much money would you like to deposit?"
        })
    })
}
function bankomat(){
    rightBtn[0].addEventListener('click', event => {
        atmText.innerText = "Chciałbyś wypłacić czy wpłacić pieniądze?"
        atm.children[1].style.cssText = "opacity: 0"
        rightInfo[0].innerText = "Wypłać pieniądze"
        leftInfo[0].innerText = "Wpłać pieniądze"
    })
}

leftBtn[0].addEventListener('click', ATM())