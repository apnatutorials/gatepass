import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as pass from '../class/Pass';
import { PassService } from '../services/pass.service';
import { ActivatedRoute, Params } from '@angular/Router';

@Component({
  selector: 'app-pass-seva-nivratt-officer',
  templateUrl: './pass-seva-nivratt-officer.component.html',
  styleUrls: ['./pass-seva-nivratt-officer.component.css']
})
export class PassSevaNivrattOfficerComponent implements OnInit {

  private sevaNivrattOfficersFormGroup: FormGroup = null;
  private passObject: pass.Gatepass.Pass =null;
  private id: number = null;

  constructor(private route: ActivatedRoute, private passService: PassService) { 

    this.id = -1;
    this.route.params.subscribe(
      (param: Params) => {
        this.id = param['id'];
    });
    if(this.id == -1){
      this.passObject = new pass.Gatepass.Pass();
      this.passObject.passType = 2; //seva nivratt officer;
      this.passObject.id = this.passObject.id == -1 ? null : this.passObject.id;
      this.passObject.passNo = this.passObject.passNo == -1 ? null : this.passObject.passNo;
    }
    else{
      this.passObject = this.passService.getPassById(this.id);
    }

    
  }

  ngOnInit() {
    this.sevaNivrattOfficersFormGroup = new FormGroup ({
      "id" : new FormControl(this.passObject.id , Validators.required),
      "passNo" : new FormControl(this.passObject.passNo, Validators.required),
      "name" : new FormControl(this.passObject.name , Validators.required),
      "address1" : new FormControl(this.passObject.address1 , Validators.required),
      "address2" : new FormControl(this.passObject.address2 , Validators.required),
      "dob" : new FormControl(this.passObject.dob , Validators.required),
      "receiptNo" : new FormControl(this.passObject.receiptNo , Validators.required),
      "phone" : new FormControl(this.passObject.phone, Validators.required),
      "issueDate" : new FormControl(this.passObject.issueDate, Validators.required),
      "referenceNo" : new FormControl(this.passObject.referenceNo, Validators.required), 
      "passType" : new FormControl(this.passObject.passType, Validators.required)
    });
  }

  private onSubmit(){
    console.log("Submit Clicked");
    console.log(this.sevaNivrattOfficersFormGroup);
    if(this.sevaNivrattOfficersFormGroup.valid){
     // code if the form is valid 
     console.log(this.sevaNivrattOfficersFormGroup)
    }
    else{
      // code in else , the form is invalid
      Object.keys(this.sevaNivrattOfficersFormGroup.controls).forEach(field =>{
        const control = this.sevaNivrattOfficersFormGroup.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
