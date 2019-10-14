import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

const mockBuses = 
[
  {
    id:'123123123',
    name:'Bolivar',
    bus:[
      { 
        id:123,
        matricula:'xxx-123'
      }
    ]
  },
  {
    id:'123123123',
    name:'Trans Benito',
    bus:[
      { 
        id:123,
        matricula:'xxx-123'
      }
    ]
  },
  {
    id:'123123123',
    name:'Copacabana',
    bus:[
      { 
        id:123,
        matricula:'xxx-123'
      }
    ]
  },
  {
    id:'123123123',
    name:'Trans La Paz',
    bus:[
      { 
        id:123,
        matricula:'xxx-123'
      }
    ]
  },
]
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
  
  show: boolean = false;
  panelActive: boolean = false;
  public dataSource:any[] = mockBuses;
  public dataSourceDetall:any[];
  ngOnInit() { 
    
  }

  public viewDetallBus() {
    this.dataSource.forEach(element => {
      this.dataSourceDetall = element;
    });
  }

  activatePanel(){
    this.show = true;
    // this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
    // this.dataSource.forEach(element => {
    //   this.dataSourceDetall = element;
    // });
    console.log("IMPRIMIENDO ");
    
  }
}