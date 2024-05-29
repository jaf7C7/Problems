/*
 * 1. Parse a query string into an object
 *
 * input = '?foo=hello&bar=world&baz'
 * output: {
 *     foo: 'hello',
 *     bar: 'world',
 *     baz: 'true,
 * }
 *
 * 2. Create a query string from an object (reverse of 1.)
 *
 */
const testCases = [
    // Base case
    [
        '?foo=hello&bar=world&baz',
        {
            foo: 'hello',
            bar: 'world',
            baz: 'true'
        }
    ],
    // Edge cases
    ['?', {}],
    ['?foo=', {foo: ''}],
    ['?foo=hello&foo=world', {foo: ['hello', 'world']}],
    ['?foo=%3F', {foo: '?'}]
]


function testParseQueryString(testCases) {
    console.log('Extracting the payload from a query string...\n')
    for (const [queryString, expectedPayload] of testCases) {
        console.log(
            'Query String: ', queryString,
            '\nExpected: ', expectedPayload,
            '\n  Actual: ', parseQueryString(queryString),
            '\n'
        )
    }
}


function parseQueryString(queryString) {
    const payload = {}
    queryString.slice(1).split('&').forEach(assignment => {
        let [key, val] = assignment.split('=')
        if (!key)
            return
        if (val === undefined)
            val = true
        const [decodedKey, decodedVal] = [
            decodeURIComponent(key),
            decodeURIComponent(val),
        ]
        if (decodedKey in payload) {
            if (payload[decodedKey].constructor === Array)
                payload[decodedKey].push(decodedVal)
            else
                payload[decodedKey] = [payload[decodedKey], decodedVal]
        } else
            payload[decodedKey] = decodedVal
    })
    return payload
}


function testMakeQueryString(testCases) {
    console.log('Creating query strings from a payload...\n')
    for (const [expectedQueryString, payload] of testCases) {
        console.log(
            ' Payload: ', payload,
            '\nExpected: ', expectedQueryString,
            '\n  Actual: ', makeQueryString(payload),
            '\n'
        )
    }
}


function makeQueryString(payload) {
    let queryString = '?'
    for (const [key, val] of Object.entries(payload)) {
        if (!key || val === undefined)
            continue
        if (queryString !== '?')
            queryString += '&'
        const [encodedKey, encodedVal] = [
            encodeURIComponent(key),
            encodeURIComponent(val),
        ]
        queryString += `${encodedKey}`
        if (encodedVal.constructor === Array) {
            queryString += `=${encodedVal.join(`&${encodedKey}=`)}`
        } else if (encodedVal !== true)
            queryString += `=${encodedVal}`
    }
    return queryString
}


testParseQueryString(testCases)
testMakeQueryString(testCases)
