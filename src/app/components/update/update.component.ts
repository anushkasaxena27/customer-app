import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from '../modals/icustomer';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private dialog: MatDialog,private customerService : CustomerService, private router: Router,
    private activatedRoute: ActivatedRoute) {}
  openDialog(component: any): void {
    this.dialog.open(component);
  }
  public customer: ICustomer = {} as ICustomer;
  public customerId :string |null = null;
  public loading : boolean = false;
  public errorMessage:string | null = null;
  public customerName:string | null = null

 
  ngOnInit(): void {
    // this.customerService.getGroups().subscribe((data) =>{
    //   this.groups = data;
    // });

    this.activatedRoute.paramMap.subscribe((param)=> {
      this.customerId = param.get('customerId');
      //  console.log(this.customerId);
       if(this.customerId != null){
        this.customerService.getCustomerById(this.customerId).subscribe((data) =>{
          this.customer = data; 
    });
    
  }
});
  }

  onSubmit(){
    if(this.customerId){
      console.log(this.customerId);
      
      this.customerService.updateCustomers(this.customerId,this.customer).subscribe((data)=>{
        this.router.navigate(['/']).then();
      })
    }

  }
}

