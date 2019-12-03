import { removeKeysFromObject } from './ObjectHelpers'

describe('ObjectHelpers', () => {
    describe('removeKeysFromObject', () => {
        it('should remove keys from the object that are in the blacklist array', done => {
            expect.assertions(1)
            const original = {
                foo: 'bar',
                baz: 'qux'
            }
            
            const blacklist = ['foo']
            const expected = { baz: 'qux' }
    
            expect(removeKeysFromObject(original, blacklist)).toEqual(expected)
            return done()
        })
    })
})