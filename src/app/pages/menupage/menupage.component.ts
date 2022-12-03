import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details/order-details.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {

  menuId: any;
  menuData: any;
  formGroup: FormGroup;
  
  constructor(
    private param: ActivatedRoute,
    private orderDetailsService: OrderDetailsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.menuId = this.param.snapshot.paramMap.get('id');
    if (this.menuId) {
      this.menuData =  this.orderDetailsService.foodDetails.filter((value)=>{
        return value.id == this.menuId;
      });
    }

    this.formGroup = this.formBuilder.group({
      full_name: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    });
  }

  submitOrder() {
    if (!this.formGroup.invalid) {
      const data = {
        name: this.formGroup.value.full_name,
        number: this.formGroup.value.phone_number,
        address: this.formGroup.value.address,
      }
      console.log(data);
      
    }
  }
}