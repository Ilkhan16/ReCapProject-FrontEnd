import { Component } from '@angular/core';

interface SidenavToggle{
  screenWidth:number
  collapsed:boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recapdb';

  isSideNavCollapsed=false
  screenWidth=0
  onToggleSidenav(data: SidenavToggle):void{
    this.screenWidth=data.screenWidth
    this.isSideNavCollapsed=data.collapsed

  }
}
