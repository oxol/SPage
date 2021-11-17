import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VitaComponent } from './components/vita/vita.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { ImpressumComponent } from './components/impressum/impressum.component';

const routes: Routes = [
    { path: "", component: HomeComponent, outlet: "contentOutlet"},
    { path: "home-component", component: HomeComponent, outlet: "contentOutlet"},
    { path: "vita-component", component: VitaComponent, outlet: "contentOutlet"  },
    { path: "kontakt-component", component: KontaktComponent, outlet: "contentOutlet"  },
    { path: "impressum-component", component: ImpressumComponent, outlet: "contentOutlet"   },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
