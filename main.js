
let leftArray = []
let rightArray = []
let displayArray = []
let hearButton = document.querySelectorAll('button')

hearButton.forEach(button => {
  button.addEventListener('click', event => {
    console.log(event.target)
    let avalue = document.querySelector(.a)
    element.textcontent = string(leftArray)
    let bvalue = document.querySelector(.b)
    element.textcontent = string(rightArray)

    displayArray.push(event.target)
    if (Number.isInteger(event.target))
    displayArray.push(event.target)
    else if (displayArray.includes('/' || 'X' || '+' || '-')) {
      rightArray.push(event.target)
      displayArray.push(event.target)
    } else if (Number.isInteger(event.target)) {
      displayArray.push(event.target)
      leftArray.push(event.target)
    } else if (event.target === '=') {
      displayArray.includes('+')
      return (document.getElementById('output') = leftArray.value + rightArray.value)
    } else if (event.target === '=') {
      displayArray.includes('-')
      return (document.getElementById('output') = leftArray.value - rightArray.value)
    } else if (event.target === '=') {
      displayArray.includes('X')
      return (document.getElementById('output') = leftArray.value * rightArray.value)
    } else if (event.target === '=') {
      displayArray.includes('/')
      return (document.getElementById('output') = leftArray.value / rightArray.value)
    } else if (event.target === 'C') {
      displayArray.splice(0, displayArray.length)
      leftArray.splice(0, leftArray.length)
      rightArray.splice(0, rightArray.length)
    }
  })
})

// let computation = hearButton.value
// if ((computation = C)) {
//   workingArray.splice(0, workingArray.length) && displayArray.splice(0, displayArray.length)
// } else if ((computation = equals)) {
//   displayArray.splice(0, displayArray.length)
//   let Result = valueOf(workingArray)
//   return (document.getElementById('output').innerHTML = workingArray.value)
// } else {
//   workingArray.push[computation]
//   displayArray.push[computation]
// }
