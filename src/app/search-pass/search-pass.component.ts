import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/Router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import * as pass from '../class/Pass';
import * as request from '../class/ResponseObject';
import { MyHttpRequestService } from '../services/my-http-request.service';
import { PassService } from '../services/pass.service';

@Component({
  selector: 'app-search-pass',
  templateUrl: './search-pass.component.html',
  styleUrls: ['./search-pass.component.css']
})
export class SearchPassComponent implements OnInit {

  private searchFormGroup: FormGroup;
  private passtype: number;
  private passObject: pass.Gatepass.Pass;
  private requestObject: request.Gatepass.ResponseObject;
  private passes : Array<pass.Gatepass.Pass>;
  private spanVisibleClass : string;

  constructor(private route: ActivatedRoute, private myHttpRequestService: MyHttpRequestService,
              private passService: PassService, private router: Router) {
    this.route.params.subscribe(
      (param: Params)=>{
        this.passtype = param['passtype'];
      });
    this.passObject = new pass.Gatepass.Pass();
    this.passObject.passType = this.passtype;
    this.requestObject =  new request.Gatepass.ResponseObject();
    this.passes = new Array<pass.Gatepass.Pass>();
    this.spanVisibleClass = "none";
  }

  ngOnInit() {
    alert("Alert Me" + this.passtype);
    this.searchFormGroup = new FormGroup({
      "passType": new FormControl(this.passObject.passType),
      "name" : new FormControl(this.passObject.name),
      "phone": new FormControl(this.passObject.phone),
      "issueDate" : new FormControl(this.passObject.issueDate),
      "referenceNo" : new FormControl(this.passObject.referenceNo)
    });
  }

  ngOnChanges(){
    alert("On Changes" + this.passtype);
  }

  ngAfterViewChecked(){
   //alert("View Checked" + this.passtype);
  }

  private onSubmit(){
    console.log(this.searchFormGroup)
    if((this.searchFormGroup.value.name == null || this.searchFormGroup.value.name == "") &&
       (this.searchFormGroup.value.phone == null || this.searchFormGroup.value.phone == "") &&
       (this.searchFormGroup.value.issueDate == null || this.searchFormGroup.value.issueDate == "") &&
       (this.searchFormGroup.value.referenceNo == null || this.searchFormGroup.value.referenceNo == ""))
    {
      this.spanVisibleClass = "block"; 
    }
    else{
      this.spanVisibleClass = "none"; 
      this.requestObject.command = "";
      this.requestObject.pass = this.searchFormGroup.value;
      this.myHttpRequestService.makeHttpRequest(this.requestObject, this.getResponse.bind(this));
    }
    // if(this.searchFormGroup.valid){
    //   this.requestObject.command = "";
    //   this.requestObject.pass = this.searchFormGroup.value;
    //   this.myHttpRequestService.makeHttpRequest(this.requestObject, this.getResponse.bind(this))
    // }
    // else
    // {
    //   Object.keys(this.searchFormGroup.controls).forEach(field => {
    //     const control = this.searchFormGroup.get(field);
    //     control.markAsTouched({ onlySelf: true});
    //   });
    // }
  }

  private getResponse(response){
    if(response.success == true){
      this.passService.setSearch(this.searchFormGroup.value);
      this.passes = this.passService.getPassByPassType(this.passtype);
    }
    else{
      alert("Some Problem Occur");
    }
  }

  private onUpdateBtnClick(passId, passType){
    switch(passType){
      case 1:
          this.router.navigate(["/newPass/searchPass", passType, "sarkariniji", passId]);
          break;
      case 2:
          this.router.navigate(["/newPass/searchPass", passType,"forRetiredPeople", passId]);
          break;
      case 3:
          this.router.navigate(["/newPass/searchPass", passType, "nonGovernment", passId]);
          break;
      case 4:
          this.router.navigate(["/newPass/searchPass", passType,"temporaryForNaveenBhawan", passId]);
          break;
      case 5:
          this.router.navigate(["/newPass/searchPass", passType, "temporaryForBapuBhawan", passId]);
          break;
      case 6:
          this.router.navigate(["/newPass/searchPass", passType, "AlpAwadhi", passId]);
          break;
    }
  }
}
