import { Component } from '@angular/core';

interface ListMember {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TONTINE 2020';

  public listOfMembers: ListMember[] = [];
  public addMember(newMember: string) {
    if (newMember) {
      this.listOfMembers.push({
        name: newMember,
      });
    }
}
  public suppMember(idx: number) {
      // this.listOfMembers.splice(this.listOfMembers.indexOf(member), 1);
      this.listOfMembers.splice(idx, 1);
    /*find((item: ListMember, index: number) => {
      return idx === index;
    });*/
  }
}
