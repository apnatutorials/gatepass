import { Injectable } from '@angular/core';
import * as account from '../class/Account';
import * as pass from '../class/Pass';

/** 
* Pass service 
*/
@Injectable()
export class PassService {

  private passes : Array<pass.Gatepass.Pass>;
  private filteredPasses : Array<pass.Gatepass.Pass>;
  constructor() {
    this.passes = new Array<pass.Gatepass.Pass>();
    this.filteredPasses = new Array<pass.Gatepass.Pass>();
    this.initialize();
  }

  //private setPasses(searchedPasses: Array<pass.Gatepass.Pass>){
  //}
  public setSearch(searchingPass: pass.Gatepass.Pass){
    let passArr = new Array<pass.Gatepass.Pass>();
    for(let p of this.passes){
      if(p.passType == searchingPass.passType){
        if(p.name.includes(searchingPass.name) || p.phone.includes(searchingPass.phone) 
        || p.issueDate.includes(searchingPass.issueDate) || p.referenceNo.includes(searchingPass.referenceNo)){
          passArr.push(p);
        }
      }
    }
    this.filteredPasses = passArr;
    console.log(this.passes);
    
    console.log(this.filteredPasses);
  }

  public getPassByPassType(passType: number): Array<pass.Gatepass.Pass>{
    let passArray = new Array<pass.Gatepass.Pass>();
    for(let p of this.filteredPasses){
      if(p.passType == passType){
        passArray.push(p);
      }
    }
    return passArray;
  }

  public getPassById(passId): pass.Gatepass.Pass{
    let passObject = new pass.Gatepass.Pass();
    for(let p of this.passes){
      if(p.id == passId){
        passObject = p;
        break;
      }
    }
    return passObject;
  }

  private initialize(){
    let searchedPasses = new Array<pass.Gatepass.Pass>();
    let p = new pass.Gatepass.Pass();
    p.id = 1;
    p.passNo = 101 ;
    p.name = "Ram Singh" ;
    p.designation = "Officer" ;
    p.office = "Sachivalaya" ;
    p.phone = "8967564534" ;
    p.reference1 = "1" ;
    p.reference2 = "2" ;
    p.issueDate = "3 July, 2018" ;
    p.referenceNo = "1" ; 
    p.address1 = "Indira nagar, Lucknow" ;
    p.address2 = "kanpur" ;
    p.passType = 1;
    searchedPasses.push(p);
    let p1 = new pass.Gatepass.Pass();
    p1.id = 2;
    p1.passNo = 102 ;
    p1.name = "J. K. Tripathi" ;
    p1.designation = "Officer" ;
    p1.office = "Bapu Bhawan" ;
    p1.phone = "1234567898" ;
    p1.reference1 = "2" ;
    p1.reference2 = "2" ;
    p1.issueDate = "4 July, 2018" ;
    p1.referenceNo = "1" ; 
    p1.address1 = "Mahanagar nagar, Lucknow" ;
    p1.address2 = "Allahabad" ;
    p1.passType = 1;
    searchedPasses.push(p1);

    let p2 = new pass.Gatepass.Pass();
    p2.id = 3;
    p2.passNo = 103 ;
    p2.name = "Milind Singh" ;
    p2.designation = "Officer" ;
    p2.office = "Shakti Bhawan" ;
    p2.phone = "998676545" ;
    p2.reference1 = "3" ;
    p2.reference2 = "4" ;
    p2.issueDate = "1 July, 2018" ;
    p2.referenceNo = "1" ; 
    p2.address1 = "Tilak nagar, Lucknow" ;
    p2.address2 = "Gurgaon" ;
    p2.passType = 1;
    searchedPasses.push(p2);

    let p3 = new pass.Gatepass.Pass();
    p3.id = 4;
    p3.passNo = 101 ;
    p3.name = "Ramesh Singh" ;
    p3.phone = "7867564533" ;
    p3.address1 = "Ram nagar, Lucknow" ;
    p3.address2 = "Nisatganj" ;
    p3.issueDate = "3 July, 2018" ;
    p3.dob = "3 July, 2018" ;
    p3.referenceNo = "1" ;  
    p3.receiptNo = "1"
    p3.passType = 2;
    searchedPasses.push(p3);

    let p4 = new pass.Gatepass.Pass();
    p4.id = 5;
    p4.passNo = 101 ;
    p4.name = "Shayesha Khan" ;
    p4.phone = "6909785600" ;
    p4.address1 = "Kapoorthala, Lucknow" ;
    p4.reference1 = "3" ;
    p4.reference2 = "4" ;
    p4.issueDate = "4 July, 2018" ;
    p4.referenceNo = "1" ;  
    p4.passType = 3;
    searchedPasses.push(p4);

    let p5 = new pass.Gatepass.Pass();
    p5.id = 6;
    p5.passNo = 101 ;
    p5.name = "Bhoomi Shukla" ;
    p5.phone = "1234567890" ;
    p5.address1 = "Indrani nagar, Lucknow" ;
    p5.fromDate = "2 July, 2018";
    p5.toDate = "1 July, 2018";
    p5.reference1 = "3" ;
    p5.reference2 = "4" ;
    p5.issueDate = "3 July, 2018" ;
    p5.referenceNo = "1" ;  
    p5.passType = 4;
    searchedPasses.push(p5);

    let p6 = new pass.Gatepass.Pass();
    p6.id = 7;
    p6.passNo = 101 ;
    p6.name = "Shrishti Kumari" ;
    p6.phone = "9089707767" ;
    p6.address1 = "Khurram nagar, Lucknow" ;
    p6.fromDate = "2 July, 2018";
    p6.toDate = "1 July, 2018";
    p6.reference1 = "3" ;
    p6.reference2 = "4" ;
    p6.issueDate = "3 July, 2018" ;
    p6.referenceNo = "1" ;  
    p6.passType = 5;
    searchedPasses.push(p6);

    let p7 = new pass.Gatepass.Pass();
    p7.id = 8;
    p7.passNo = 101 ;
    p7.name = "Suresh Pandey" ;
    p7.phone = "8765453345" ;
    p7.address1 = "Tikona nagar, Lucknow" ;
    p7.fromDate = "2 July, 2018";
    p7.toDate = "1 July, 2018";
    p7.reference1 = "3" ;
    p7.reference2 = "4" ;
    p7.issueDate = "3 July, 2018" ;
    p7.referenceNo = "1" ;  
    p7.passType = 6;
    searchedPasses.push(p7);

    this.passes = searchedPasses;
  }
}
