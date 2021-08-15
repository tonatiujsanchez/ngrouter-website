import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {
  
  @Input() textPrincipal: string = '';
  @Input() textBg: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
