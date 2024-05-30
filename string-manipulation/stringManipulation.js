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
            'PASSED' : `FAILED: ${output} !== ${expected}`
        )
    }
}


const forEachOdd = (str, callback, separator) => str.split(separator).map(
    (element, index) => (index % 2 === 1) ? callback(element) : element
).join(separator)


const capitalizeEveryOtherLetter = str => forEachOdd(
    str, subStr => subStr.toUpperCase(), ''
)


const closeDivTags = html => forEachOdd(html, subStr => subStr + '/', 'div>')


testFunction(capitalizeEveryOtherLetter, [
    ['hello', 'hElLo'],
    ['', ''],
    ['foo bar', 'fOo bAr'],
    ['!?*', '!?*']
])


// TODO: '<div><div>hello</div></div>' -> '<div><div>hello</div></div>'
testFunction(closeDivTags, [
    ['<div>hello<div>', '<div>hello</div>'],
    ['', '']
])