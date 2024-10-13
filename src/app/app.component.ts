import { Component, OnInit } from '@angular/core'
import { Application } from '@nativescript/core'

@Component({
  selector: 'ns-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log('App component initialized')
    Application.on(Application.launchEvent, (args) => {
      console.log('Application launched')
    })
    Application.on(Application.displayedEvent, (args) => {
      console.log('Application displayed')
    })
    Application.on(Application.uncaughtErrorEvent, (args) => {
      console.error('Uncaught error:', args.error)
    })
  }
}