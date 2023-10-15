import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICustomer } from '../components/modals/icustomer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent {

  public customerId: string | null = null;
  public customer: ICustomer = {} as ICustomer;
  public loading: boolean = false;
  public errorMessage: string |null = null;
  public groupName : string|null = null

  constructor(
    private activatedRoute : ActivatedRoute,
    private customerService: CustomerService
  ){}
  ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe((param)=> {
    this.customerId = param.get('customerId');
    // console.log(this.customerId);
    if(this.customerId != null){
      this.loading =  true;
      this.customerService.getCustomerById(this.customerId).subscribe((data) =>{
      this.customer = data;
    })
    }});
   }

  }

