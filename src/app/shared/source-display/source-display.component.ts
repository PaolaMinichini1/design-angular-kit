import { Component, OnInit, Input } from '@angular/core';

let tabIdentifier = 0;
let tabContentIdentifier = 0;
let tabHtmlIdentifier = 0;
let tabTypescriptIdentifier = 0;
let tabCssIdentifier = 0;

@Component({
  selector: 'it-source-display',
  templateUrl: './source-display.component.html',
  styleUrls: ['./source-display.component.scss']
})
export class SourceDisplayComponent implements OnInit {

  idTab = `source-display-tab-${tabIdentifier++}`;
  idTabContent = `source-display-tab-content-${tabContentIdentifier++}`;
  idTabHtml = `tab-html-${tabHtmlIdentifier++}`;
  idTypescript = `tab-typescript-${tabTypescriptIdentifier++}`;
  idTabCss = `tab-css-${tabCssIdentifier++}`;

  @Input() html: string;
  @Input() typescript: string;
  @Input() css: string;

  constructor() { }

  ngOnInit() {
    if (this.html) {
      this.html = this.html.replace(/\/{\/{/g, '{{');
      this.html = this.html.replace(/\/}\/}/g, '}}');
    }

    if (this.typescript) {
      this.typescript = this.typescript.replace(/\/{\/{/g, '{{');
      this.typescript = this.typescript.replace(/\/}\/}/g, '}}');
    }

    if (this.css) {
      this.css = this.css.replace(/\/{\/{/g, '{{');
      this.css = this.css.replace(/\/}\/}/g, '}}');
    }
  }
}
