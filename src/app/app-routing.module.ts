import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerManagerComponent } from './components/customer-manager/customer-manager.component';
import { AddNewComponent } from './components/add-new/add-new.component';
import { UpdateComponent } from './components/update/update.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';

const routes: Routes = [ {path:'',redirectTo:'customers/admin',pathMatch:'full'},
{path:'customers/admin', component:CustomerManagerComponent},
{path: 'customers/add',component:AddNewComponent},
{path:'customers/edit/:customerId',component:UpdateComponent},
{path:'customers/view/:customerId',component:ViewCustomerComponent},
// {path:'**',component:PageNotFoundComponent}];
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
