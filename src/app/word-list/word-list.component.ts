import { Component, OnInit } from '@angular/core'
import { WordService } from '../services/word.service'

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit {
  dailyWords: string[] = []
  monthlyWords: string[] = []

  constructor(private wordService: WordService) {}

  ngOnInit() {
    this.dailyWords = this.wordService.getDailyWords()
    this.monthlyWords = this.wordService.getMonthlyWords()
  }
}