// Things to know:
// - `test` is a global function from Jest:
//   `test(messageString, testerFunction)`
//   Learn more here: https://facebook.github.io/jest/docs/api.html#testname-fn
// - `expect` is a global function from Jest
//   which allows you to make assertsions. For
//   example:
//     `expect(1).toBe(1)`
//   Learn more here: https://facebook.github.io/jest/docs/expect.html
//
// Write unit tests for getTokenFromHeader.
// See `api/src/routes/utils/get-token-from-header.js`
// to see how this function has been implemented and
// how it's intended to be used. Write at least two unit
// tests to ensure that that use case is always supported.
import getTokenFromHeader from '../get-token-from-header'

test('should return null if req is blank', () => {
  const req = {headers: {authorization: ''}}
  const result = getTokenFromHeader(req)
    expect(result).toBeNull()
})

test('getTokenFromHeader returns the token when provided', () => {
  const req = {headers: {authorization: 'Token blablabla'}}
  const result = getTokenFromHeader(req);
  expect(result).toBe('blablabla')
})

test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(true).toBe(submitted)
})
////////////////////////////////
