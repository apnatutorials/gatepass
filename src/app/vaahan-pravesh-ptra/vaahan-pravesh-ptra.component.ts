import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as vahanPass from '../class/VahanPass';
import { ActivatedRoute, Params } from '@angular/Router';
import { VahanPassService } from '../services/vahan-pass.service';

@Component({
  selector: 'app-vaahan-pravesh-ptra',
  templateUrl: './vaahan-pravesh-ptra.component.html',
  styleUrls: ['./vaahan-pravesh-ptra.component.css']
})
export class VaahanPraveshPtraComponent implements OnInit {

  private vahanPassAFormGroup: FormGroup = null;
  private vahanPassObject: vahanPass.Gatepass.VahanPass =null;
  private id: number = null;
  constructor(private route: ActivatedRoute, private passService: VahanPassService) { 

    this.id = -1;
    this.route.params.subscribe(
      (param: Params) => {
        this.id = param['id'];
    });
    if(this.id == -1){
      this.vahanPassObject = new vahanPass.Gatepass.VahanPass();
      this.vahanPassObject.passType = 4; //naveen bhawan or mukhya bhawan
      this.vahanPassObject.id = this.vahanPassObject.id == -1 ? null : this.vahanPassObject.id;
      this.vahanPassObject.passNo = this.vahanPassObject.passNo == -1 ? null : this.vahanPassObject.passNo;
    }
    else{
      this.vahanPassObject = this.passService.getvahanPassById(this.id);
    }
   
   
  }

  ngOnInit() {
    this.vahanPassAFormGroup = new FormGroup ({
      "id" : new FormControl(this.vahanPassObject.id, Validators.required),
      "passNo" : new FormControl(this.vahanPassObject.passNo, Validators.required),
      "name" : new FormControl(this.vahanPassObject.name, Validators.required),
      "designation" : new FormControl(this.vahanPassObject.designation, Validators.required),
      "office" : new FormControl(this.vahanPassObject.office, Validators.required),
      "vehicleNo1" : new FormControl(this.vahanPassObject.vehicleNo1, Validators.required),
      "vehicleNo2" : new FormControl(this.vahanPassObject.vehicleNo2, Validators.required),
      "vehicleReference1" : new FormControl(this.vahanPassObject.vehicleReference1, Validators.required),
      "vehicleReference2" : new FormControl(this.vahanPassObject.vehicleReference2, Validators.required),
      "issueDate" : new FormControl(this.vahanPassObject.issueDate, Validators.required),
      "referenceNo" : new FormControl(this.vahanPassObject.referenceNo, Validators.required),
      "passType" : new FormControl(this.vahanPassObject.passType, Validators.required)
    });
  }

  private onSubmit(){
    console.log("Submit Clicked");
    console.log(this.vahanPassAFormGroup);
    if(this.vahanPassAFormGroup.valid){
     // code if the form is valid 
     console.log(this.vahanPassAFormGroup)
    }
    else{
      // code in else , the form is invalid
      Object.keys(this.vahanPassAFormGroup.controls).forEach(field =>{
        const control = this.vahanPassAFormGroup.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}

