import { Component} from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { UpdateComponent } from '../update/update.component';
import { AddNewComponent } from '../add-new/add-new.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ICustomer } from '../modals/icustomer';
import { ViewCustomerComponent } from 'src/app/view-customer/view-customer.component';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-customer-manager',
  templateUrl: './customer-manager.component.html',
  styleUrls: ['./customer-manager.component.css']
})
export class CustomerManagerComponent {
  constructor(private dialogService: CustomerService,private customerService: CustomerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,private scroll: ViewportScroller
    ) {}

  // openUpdate(id:any): void {
  //   this.dialogService.openDialog(UpdateComponent)
  //   // this.router.navigate(["/customers/edit/{{customer.id}}"]);
  // }
  openAdd(): void {
    this.dialogService.openDialog(AddNewComponent);
  }

  openView(): void {
    this.dialogService.openDialog(ViewCustomerComponent);
  }

  public customers: ICustomer[] = [] as ICustomer[];
  public loading : boolean = false;
  public errorMessage:string | null = null;
  public customerId :string |null = null;
  public filteredCustomers: ICustomer[] = [];

 
  ngOnInit(): void {
    this.loadDataFromService();
   
  }

  loadDataFromService() {
    this.loading = true;
    this.activatedRoute.paramMap.subscribe((param)=> {
    this.customerId = param.get('customerId');
    })
    this.customerService.getCustomers().subscribe(
      (data) =>{
        this.customers = data;
        this.filteredCustomers = this.customers;
        this.loading = false;
        // console.log(data);
        
      },
      (err) => {
        this.errorMessage = err;
        this.loading = false;
      }
    )

  }
  onDelete(id?:string){
    if (id){}
    this.customerService.deleteCustomers(id).subscribe((data) => {
      this.loadDataFromService();
    });
  }
onSearchCustomer(searchName : string){
  console.log(searchName);
  
  if(!searchName){
    this.filteredCustomers = this.customers;
  }
  this.filteredCustomers = this.customers.filter(
    //customer => customer?.name.toLowerCase()includes(searchName.toLowerCase())
    customer => JSON.stringify(customer).toLowerCase().includes(
      searchName.toLowerCase()));
      //console.log(this.filteredCustomers);
      
      //this.loadDataFromService();
  }
  calculateNumVisible(): number {
    if (this.filteredCustomers.length < 3) {
      return this.filteredCustomers.length; // Display all items if there are fewer than 2.
    }
    return 3;
  }
  circular = true;
  shouldDisableNavigatorButtons(): boolean {
    return !this.circular || this.filteredCustomers.length <= 1;
  }
customIndicatorStyle: any = {
    // Customize the indicator style here
    'background-color': '#223A62',
    'border': '2px solid white',
    'border-radius': '50%',
    'width': '12px',
    'height': '12px',
    'margin': '0 5px', // Adjust the margin as needed
  };
  
}
