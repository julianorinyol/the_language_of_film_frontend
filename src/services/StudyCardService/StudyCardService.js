import { LanguageOfFilmService } from '../LanguageOfFilmService/LanguageOfFilmService.js'

export const StudyCardService = {
    findCards() {
        return LanguageOfFilmService.findCards()
    }
}