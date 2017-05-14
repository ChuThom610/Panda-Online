import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from "@angular/core";
import { FeedbackComponent } from 'app/feedback';

describe('FeedbackComponent (template)', () => {
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        TestBed.configureTestingModule( {
            declarations: [FeedbackComponent],
        });
        TestBed.compileComponents();
    });

    it ('should exist FeedbackComponent', async(() => {
        const fixture = TestBed.createComponent(FeedbackComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

});