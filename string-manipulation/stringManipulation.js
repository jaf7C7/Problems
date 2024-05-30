/*
 * 1. Write a function to capitalize ONLY every other letter in a String.
 *   - e.g. 'hello' -> 'hElLo'
 *
 * 2. Given an HTML document, where every closing '</div>' tag is missing
 *    the '/', write a function to close each div properly.
 *   - e.g. '<div>hello<div>' -> '<div>hello</div>'
 *
 * Source: https://www.youtube.com/watch?v=t3qZR6Qjy-c&t=1214s
 */


const testFunction = (functionUnderTest, valueTable) => {
    for ([input, expected] of valueTable) {
        output = functionUnderTest(input)
        console.log(
            functionUnderTest,
            output === expected ?
            'PASSED' : `FAILED: ${input} !== ${output}`
        )
    }
}


const capitalizeEveryOtherLetter = (str) => {
    const splitStr = str.split('')
    for (const i in splitStr)
        if (i % 2 == 1)
            splitStr[i] = splitStr[i].toUpperCase()
    return splitStr.join('')
}


const closeDivTags = (html) => {
    const splitHTML = html.split('div>')
    for (const i in splitHTML)
        if (i % 2 == 1)
            splitHTML[i] = splitHTML[i].concat('/')
    return splitHTML.join('div>')
}


testFunction(capitalizeEveryOtherLetter, [
    ['hello', 'hElLo'],
    ['', ''],
    ['foo bar', 'fOo bAr'],
    ['!?*', '!?*']
])

testFunction(closeDivTags, [
    ['<div>hello<div>', '<div>hello</div>'],
    ['', '']
])