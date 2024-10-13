import { Component, OnInit } from '@angular/core'
import { Application, AndroidApplication, AndroidActivityResultEventData, AndroidActivityBundleEventData } from '@nativescript/core'
import { WordService } from '../services/word.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private wordService: WordService) {}

  ngOnInit() {
    if (Application.android) {
      Application.android.on(AndroidApplication.activityResultEvent, this.onActivityResult.bind(this))
      Application.android.on(AndroidApplication.activityNewIntentEvent, this.onNewIntent.bind(this))
      Application.android.on(AndroidApplication.activityResumeEvent, this.onResume.bind(this))
    }
  }

  onActivityResult(args: AndroidActivityResultEventData) {
    if (args.requestCode === 100 && args.resultCode === android.app.Activity.RESULT_OK) {
      const selectedText = args.intent.getStringExtra('android.intent.extra.PROCESS_TEXT')
      if (selectedText) {
        this.wordService.addWord(selectedText)
      }
    }
  }

  onNewIntent(args: AndroidActivityBundleEventData) {
    this.handleIntent(args.intent)
  }

  onResume(args: AndroidActivityBundleEventData) {
    if (args.activity && args.activity.getIntent()) {
      this.handleIntent(args.activity.getIntent())
    }
  }

  private handleIntent(intent: android.content.Intent) {
    if (intent.getAction() === android.content.Intent.ACTION_SEND && intent.getType() === "text/plain") {
      const sharedText = intent.getStringExtra(android.content.Intent.EXTRA_TEXT)
      if (sharedText) {
        this.wordService.addWord(sharedText)
      }
    }
  }
}