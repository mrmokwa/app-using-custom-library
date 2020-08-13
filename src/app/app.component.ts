import { Component } from '@angular/core';
import { MkwList } from '@mrmokwa/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  list: MkwList[] = [
    {
      title: 'Matheus',
      description: 'Mokwa',
      icon: 'person',
    },
  ];
}
