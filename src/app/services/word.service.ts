import { Injectable } from '@angular/core'
import { ApplicationSettings } from '@nativescript/core'

@Injectable({
  providedIn: 'root'
})
export class WordService {
  private readonly DAILY_KEY = 'dailyWords'
  private readonly MONTHLY_KEY = 'monthlyWords'

  addWord(word: string) {
    const dailyWords = this.getDailyWords()
    const monthlyWords = this.getMonthlyWords()

    dailyWords.push(word)
    monthlyWords.push(word)

    this.saveDailyWords(dailyWords)
    this.saveMonthlyWords(monthlyWords)
  }

  getDailyWords(): string[] {
    const words = ApplicationSettings.getString(this.DAILY_KEY)
    return words ? JSON.parse(words) : []
  }

  getMonthlyWords(): string[] {
    const words = ApplicationSettings.getString(this.MONTHLY_KEY)
    return words ? JSON.parse(words) : []
  }

  private saveDailyWords(words: string[]) {
    ApplicationSettings.setString(this.DAILY_KEY, JSON.stringify(words))
  }

  private saveMonthlyWords(words: string[]) {
    ApplicationSettings.setString(this.MONTHLY_KEY, JSON.stringify(words))
  }
}