import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferFundComponent } from './transfer-fund/transfer-fund.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'transfer', component:TransferFundComponent},
  {path: 'login', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
