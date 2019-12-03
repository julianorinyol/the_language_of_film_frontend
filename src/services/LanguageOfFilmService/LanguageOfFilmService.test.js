import {  LanguageOfFilmService  } from './LanguageOfFilmService'
import mockAxios from "axios";

jest.mock('../../constants', () => ({
    __esModule: true, // this property makes it work
    defaultBlacklist: ['foo','bar'],    
}));
  
const testData = {
    films: [
        {
            "name":"testfilm1",
            "img":"https://test.com/images/testfilm1.jpg"
        }
    ],
    words: {
        "words": {
          "foo": {
            "word": "foo",
            "english": "eng foo",
            "examples": "['foo is like foo' ]"
          },
          "bar": {
            "word": "bar",
            "english": "eng bar",
            "examples": "[]"
          },
          "baz": {
            "word": "baz",
            "english": "eng baz",
            "examples": "[]"
          }
        }
    }
}

describe('LanguageOfFilmService', () => {
    describe('findFilms', () => {
        it('should call axios.get with the correct url and it should return the data param from returned from axios.get', async done => {
            expect.assertions(3)
            
            const getSpy = jest.fn(() => Promise.resolve({
                data: testData.films
            }))

            mockAxios.get.mockImplementationOnce(getSpy);

            const films = await LanguageOfFilmService.findFilms()

            expect(getSpy.mock.calls.length).toEqual(1)
            const expectedUrl = `${process.env.REACT_APP_API_HOST}/api/v1/films`
            expect(getSpy.mock.calls[0][0]).toEqual(expectedUrl)
            expect(films).toEqual(testData.films)
            return done()
        })

        it('should log error using console.error and then rethrow the err', async done => {
            expect.assertions(3)
            const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
            
            const errMessage = 'foo'

            const throwError = jest.fn(() => {
                return Promise.reject({
                        message: errMessage,
                        status: 404,
                    })
                }
            )

            mockAxios.get.mockImplementation(throwError);
            
            try {
                await LanguageOfFilmService.findFilms()
            } catch(err) {
                expect(err.message).toEqual(errMessage)
                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy.mock.calls[0][0]).toEqual( `Error fetching films ${errMessage}`);
            }

            consoleErrorSpy.mockRestore();
            return done()
        })
    })

    describe('findWords', () => {
        it('should call axios.get with the correct url and it should return the data param from returned from axios.get. with blacklist items removed', async done => {
            expect.assertions(3)
            
            const getSpy = jest.fn(() => Promise.resolve({
                data: testData.words
            }))

            mockAxios.get.mockImplementationOnce(getSpy);

            const words = await LanguageOfFilmService.findWords()

            expect(getSpy.mock.calls.length).toEqual(1)

            const expectedUrl = `${process.env.REACT_APP_API_HOST}/api/v1/words`
            expect(getSpy.mock.calls[0][0]).toEqual(expectedUrl)
            
            // note that defaultBlackList is being mocked above, and so those keys are removed
            const expected = {
                "baz": {
                    "word": "baz",
                    "english": "eng baz",
                    "examples": "[]"
                }
            }

            expect(words).toEqual(expected)
            return done()
        })

        it('should log error using console.error and then rethrow the err', async done => {
            expect.assertions(3)
            const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
            
            const errMessage = 'foo'

            const throwError = jest.fn(() => {
                return Promise.reject({
                        message: errMessage,
                        status: 404,
                    })
                }
            )

            mockAxios.get.mockImplementation(throwError);
            
            try {
                await LanguageOfFilmService.findWords()
            } catch(err) {
                expect(err.message).toEqual(errMessage)
                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy.mock.calls[0][0]).toEqual( `Error fetching words ${errMessage}`);
            }

            consoleErrorSpy.mockRestore();
            return done()
        })
    })

    
})