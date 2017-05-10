import { Component } from '@angular/core';

@Component({
    selector: 'phanhoi',
    styleUrls:['feedback.css'],
    template: `
  
                <div class="container" id="feedback">
                    <div class="fb-comments" data-ng-href="https://tem-h3t.firebaseapp.com/feedback" data-numpost="5" data-colorscheme="light" width="100%">
                    </div>
                </div>
    `
})

export class FeedbackComponent {

}