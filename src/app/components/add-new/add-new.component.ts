import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { ICustomer } from '../modals/icustomer';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent {
  public customer:ICustomer = {} as ICustomer;
  public address:string |null = null;
  public mobile:string |null = null;
  public rating:number  = 0;
  public loading : boolean = false;
  public errorMessage:string | null = null;

  constructor(private activatedRoute : ActivatedRoute,private customerService: CustomerService , private router : Router){}
  ngOnInit(): void {
    

    
    // (err) => {
    //   this.errorMessage = err;
    //   this.loading = false;
    // }

  }
  onSubmit(form:NgForm){
    // console.log(form.value);
    this.customerService.addCustomers(this.customer).subscribe((data) => {
      this.router.navigate(['/']).then();
    })
    
  }
//   addtoAddresses(value:any){
//     if (value) {
//       this.customer.addresses.push(value);
//       this.address = '';
    
//   }
// }
// addtoratings(value:any){
//   if (value) {
//     this.customer.ratings.push(value);
//     this.rating = 0;
  
// }
// }
// addtoMobiles(value:any){
//   if (value) {
//     this.customer.mobiles.push(value);
//     this.mobile = "";
  
// }
// }
}
