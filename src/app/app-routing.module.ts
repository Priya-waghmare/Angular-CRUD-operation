import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewempComponent } from './addnewemp/addnewemp.component';
import { EmpdataComponent } from './empdata/empdata.component';
import { UpdtempdetComponent } from './updtempdet/updtempdet.component';

const routes: Routes = [
  {path:'empdata', component:EmpdataComponent},
  {path:'addnewemp', component:AddnewempComponent},
  {path:'updatempdet/:id', component:UpdtempdetComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
