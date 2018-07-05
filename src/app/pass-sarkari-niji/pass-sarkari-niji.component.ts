import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as pass from '../class/Pass';
import { ActivatedRoute, Params } from '@angular/Router';
import { PassService } from '../services/pass.service';

@Component({
  selector: 'app-pass-sarkari-niji',
  templateUrl: './pass-sarkari-niji.component.html',
  styleUrls: ['./pass-sarkari-niji.component.css']
})
export class PassSarkariNijiComponent implements OnInit {

  private sarkariNijiFormGroup: FormGroup = null;
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
      this.passObject.passType = 1; //sarkari niji;
      this.passObject.id = this.passObject.id == -1 ? null : this.passObject.id;
      this.passObject.passNo = this.passObject.passNo == -1 ? null : this.passObject.passNo;
    }
    else{
      this.passObject = this.passService.getPassById(this.id);
    }
   
  }

  ngOnInit() {
    this.sarkariNijiFormGroup = new FormGroup ({
      "id" : new FormControl(this.passObject.id , Validators.required),
      "passNo" : new FormControl(this.passObject.passNo, Validators.required),
      "name" : new FormControl(this.passObject.name , Validators.required),
      "designation" : new FormControl(this.passObject.designation, Validators.required),
      "office" : new FormControl(this.passObject.office, Validators.required),
      "phone" : new FormControl(this.passObject.phone, Validators.required),
      "reference1" : new FormControl(this.passObject.reference1, Validators.required),
      "reference2" : new FormControl(this.passObject.reference2, Validators.required),
      "issueDate" : new FormControl(this.passObject.issueDate, Validators.required),
      "referenceNo" : new FormControl(this.passObject.referenceNo, Validators.required), 
      "passType" : new FormControl(this.passObject.passType, Validators.required)
    });
  }

  private onSubmit(){
    console.log("Submit Clicked");
    console.log(this.sarkariNijiFormGroup);
    if(this.sarkariNijiFormGroup.valid){
     // code if the form is valid 
     console.log(this.sarkariNijiFormGroup)
    }
    else{
      // code in else , the form is invalid
      Object.keys(this.sarkariNijiFormGroup.controls).forEach(field =>{
        const control = this.sarkariNijiFormGroup.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }
}
