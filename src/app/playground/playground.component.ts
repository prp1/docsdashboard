import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Component({
    selector: 'playground',
    templateUrl: 'playground.template.html'
})
export class PlaygroundComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        let btn = document.getElementById('btn1')
        let clicks = Observable.fromEvent(btn, 'click')

        // let subscription = clicks.forEach(
        //     (e) => {
        //         console.log('clicked')
        //         //subscription.dispose();
        //         //throw 'error thrown'
        //     },
        //     (error) => {
        //         console.log('error')
        //     },
        //     () => {
        //         console.log('completed')
        //     })

        // let subscription = clicks.forEach(
        //     function onNext(e) {
        //         console.log('clicked')
        //         //subscription.dispose();
        //         //throw 'error thrown'
        //     },
        //     function onError(error) {
        //         console.log('error')
        //     },
        //     function onCompleted() {
        //         console.log('done')
        //     })
        // //     })

        let subscription = clicks.forEach(
            function onNext(e) {
                console.log('clicked')
                //subscription.dispose();
                //throw 'error thrown'
            });
    }
}