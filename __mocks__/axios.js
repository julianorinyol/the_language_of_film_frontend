/* 
mock axios -> leaving this comment for text searchability, as those two words
appear in the file, its difficult to find this. And it can cause some gotchas when you need the
real module
*/
export default {
    get: jest.fn(() => Promise.resolve({ data: {} }))
};