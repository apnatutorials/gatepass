import { Injectable } from '@angular/core';
import * as account from '../class/Account';
import * as vahanPass from '../class/VahanPass';

/** 
* vahanPass service 
*/
@Injectable()
export class VahanPassService {

  private vahanPasses : Array<vahanPass.Gatepass.VahanPass>;
  private filteredvahanPasses : Array<vahanPass.Gatepass.VahanPass>;
  constructor() {
    this.vahanPasses = new Array<vahanPass.Gatepass.VahanPass>();
    this.filteredvahanPasses = new Array<vahanPass.Gatepass.VahanPass>();
    // this.initialize();
  }

  //private setvahanPasses(searchedvahanPasses: Array<vahanPass.Gatepass.VahanPass>){
  //}
  public setSearch(searchingvahanPass: vahanPass.Gatepass.VahanPass){
    let vahanPassArr = new Array<vahanPass.Gatepass.VahanPass>();
    for(let p of this.vahanPasses){
      if(p.passType == searchingvahanPass.passType){
        if(p.name.includes(searchingvahanPass.name) || p.issueDate.includes(searchingvahanPass.issueDate) || p.referenceNo.includes(searchingvahanPass.referenceNo)){
          vahanPassArr.push(p);
        }
      }
    }
    this.filteredvahanPasses = vahanPassArr;
    console.log(this.vahanPasses);
    
    console.log(this.filteredvahanPasses);
  }

  public getvahanPassByPassType(passType: number): Array<vahanPass.Gatepass.VahanPass>{
    let vahanPassArray = new Array<vahanPass.Gatepass.VahanPass>();
    for(let p of this.filteredvahanPasses){
      if(p.passType == passType){
        vahanPassArray.push(p);
      }
    }
    return vahanPassArray;
  }

  public getvahanPassById(vahanPassId): vahanPass.Gatepass.VahanPass{
    let vahanPassObject = new vahanPass.Gatepass.VahanPass();
    for(let p of this.vahanPasses){
      if(p.id == vahanPassId){
        vahanPassObject = p;
        break;
      }
    }
    return vahanPassObject;
  }

//   private initialize(){
//     let searchedvahanPasses = new Array<vahanPass.Gatepass.VahanPass>();
//     let p = new vahanPass.Gatepass.VahanPass();
//     p.id = 1;
//     p.vahanPassNo = 101 ;
//     p.name = "Ram Singh" ;
//     p.designation = "Officer" ;
//     p.office = "Sachivalaya" ;
//     p.phone = "8967564534" ;
//     p.reference1 = "1" ;
//     p.reference2 = "2" ;
//     p.issueDate = "3 July, 2018" ;
//     p.referenceNo = "1" ; 
//     p.address1 = "Indira nagar, Lucknow" ;
//     p.address2 = "kanpur" ;
//     p.vahanPassType = 1;
//     searchedvahanPasses.push(p);
//     let p1 = new vahanPass.Gatepass.VahanPass();
//     p1.id = 2;
//     p1.vahanPassNo = 102 ;
//     p1.name = "J. K. Tripathi" ;
//     p1.designation = "Officer" ;
//     p1.office = "Bapu Bhawan" ;
//     p1.phone = "1234567898" ;
//     p1.reference1 = "2" ;
//     p1.reference2 = "2" ;
//     p1.issueDate = "4 July, 2018" ;
//     p1.referenceNo = "1" ; 
//     p1.address1 = "Mahanagar nagar, Lucknow" ;
//     p1.address2 = "Allahabad" ;
//     p1.vahanPassType = 1;
//     searchedvahanPasses.push(p1);

//     let p2 = new vahanPass.Gatepass.VahanPass();
//     p2.id = 3;
//     p2.vahanPassNo = 103 ;
//     p2.name = "Milind Singh" ;
//     p2.designation = "Officer" ;
//     p2.office = "Shakti Bhawan" ;
//     p2.phone = "998676545" ;
//     p2.reference1 = "3" ;
//     p2.reference2 = "4" ;
//     p2.issueDate = "1 July, 2018" ;
//     p2.referenceNo = "1" ; 
//     p2.address1 = "Tilak nagar, Lucknow" ;
//     p2.address2 = "Gurgaon" ;
//     p2.vahanPassType = 1;
//     searchedvahanPasses.push(p2);

//     let p3 = new vahanPass.Gatepass.VahanPass();
//     p3.id = 4;
//     p3.vahanPassNo = 101 ;
//     p3.name = "Ramesh Singh" ;
//     p3.phone = "7867564533" ;
//     p3.address1 = "Ram nagar, Lucknow" ;
//     p3.address2 = "Nisatganj" ;
//     p3.issueDate = "3 July, 2018" ;
//     p3.dob = "3 July, 2018" ;
//     p3.referenceNo = "1" ;  
//     p3.receiptNo = "1"
//     p3.vahanPassType = 2;
//     searchedvahanPasses.push(p3);

//     let p4 = new vahanPass.Gatepass.VahanPass();
//     p4.id = 5;
//     p4.vahanPassNo = 101 ;
//     p4.name = "Shayesha Khan" ;
//     p4.phone = "6909785600" ;
//     p4.address1 = "Kapoorthala, Lucknow" ;
//     p4.reference1 = "3" ;
//     p4.reference2 = "4" ;
//     p4.issueDate = "4 July, 2018" ;
//     p4.referenceNo = "1" ;  
//     p4.vahanPassType = 3;
//     searchedvahanPasses.push(p4);

//     let p5 = new vahanPass.Gatepass.VahanPass();
//     p5.id = 6;
//     p5.vahanPassNo = 101 ;
//     p5.name = "Bhoomi Shukla" ;
//     p5.phone = "1234567890" ;
//     p5.address1 = "Indrani nagar, Lucknow" ;
//     p5.fromDate = "2 July, 2018";
//     p5.toDate = "1 July, 2018";
//     p5.reference1 = "3" ;
//     p5.reference2 = "4" ;
//     p5.issueDate = "3 July, 2018" ;
//     p5.referenceNo = "1" ;  
//     p5.vahanPassType = 4;
//     searchedvahanPasses.push(p5);

//     let p6 = new vahanPass.Gatepass.VahanPass();
//     p6.id = 7;
//     p6.vahanPassNo = 101 ;
//     p6.name = "Shrishti Kumari" ;
//     p6.phone = "9089707767" ;
//     p6.address1 = "Khurram nagar, Lucknow" ;
//     p6.fromDate = "2 July, 2018";
//     p6.toDate = "1 July, 2018";
//     p6.reference1 = "3" ;
//     p6.reference2 = "4" ;
//     p6.issueDate = "3 July, 2018" ;
//     p6.referenceNo = "1" ;  
//     p6.vahanPassType = 5;
//     searchedvahanPasses.push(p6);

//     let p7 = new vahanPass.Gatepass.VahanPass();
//     p7.id = 8;
//     p7.vahanPassNo = 101 ;
//     p7.name = "Suresh Pandey" ;
//     p7.phone = "8765453345" ;
//     p7.address1 = "Tikona nagar, Lucknow" ;
//     p7.fromDate = "2 July, 2018";
//     p7.toDate = "1 July, 2018";
//     p7.reference1 = "3" ;
//     p7.reference2 = "4" ;
//     p7.issueDate = "3 July, 2018" ;
//     p7.referenceNo = "1" ;  
//     p7.vahanPassType = 6;
//     searchedvahanPasses.push(p7);

//     this.vahanPasses = searchedvahanPasses;
//   }
}
