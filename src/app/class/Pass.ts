/**
 * @author Nalini Pathak
 *
 */
export namespace Gatepass {
    /**
     * 'Pass' Class is for 'pass' table in 'Gatepass' schema
     */
    export class Pass {

        public static readonly TYPE_GOVERNMENT_PRIVATE: number = 1;
        public static readonly TYPE_RETIRED_OFFICERS_EMPLOYEES: number = 2;
        public static readonly TYPE_NON_GOVERNMENT: number = 3;
        public static readonly TYPE_MINISTERS_NAVEEN_BHAWAN_MUKHYA_BHAWAN: number = 4;
        public static readonly TYPE_MINISTERS_BAPU_BHAWAN: number = 5;
        public static readonly TYPE_SORT_PERIOD: number = 6;

        // Start of sarkari niji fields
        public id : number ;
        public passNo : number ;
        public name : string ;
        public designation : string ;
        public office : string ;
        public phone : string ;
        public reference1 : string ;
        public reference2 : string ;
        public issueDate : string ;
        public referenceNo : string ; 
        public passType : number;
        
        // end of sarkari niji fields	
        // start of sevanivitti fields
        public address1 : string ;
        public address2 : string ;
        public dob : string ;
        public receiptNo : string ;
        //common fields
        // 1. id 	2. passNo	3. phoneNo	4. IssueDate	5. referenceNo
        
        // end of sevanivitti fields
        
        // start of gair sarkari
            // common fields
        // 1. id	2. passNo	3. Name	4. address	5. phone 6. reference1	7. reference2 8 issueDate 9 reference No
        
        // end of gair sarkari
        
        // aasthayi mantri mukhya bhawan
        
        
        public fromDate : string ;
        public toDate : string ;
        // 1. id	2. passNo	3. Name	4. address	5. phone 6. reference1	7. reference2 8 issueDate 9 reference No
        // end of aasthayi mantri mukhya bhawan
        
        //BAPU BHAWAN
        //	Same fields as Mukhya Bhawan
        
        // END OF BAPU BHAWAN
        // Alpawadhi paas
            // commom fields
        // 1. id	2.	passNo	3. name		4. designation/address	5. phone	6. fromDate	7. toDate
        // 8. reference1	9. reference2	10. issueDate	11 referenceNo
        
        // end of alpawadhi 
        
        // Fields of mukhya bhawan, bapu bhawan and alpawadhi paass
	
	
        /**
        * constructor to set the variables to their default values
        */
        constructor() {
            this.id = -1 ;
            this.passNo = -1 ;
            this.name = "" ;
            this.designation = "" ;
            this.office = "" ;
            this.phone = "" ;
            this.reference1 = "" ;
            this.reference2 = "" ;
            this.issueDate = "" ;
            this.referenceNo = "" ; 
            this.address1 = "" ;
            this.address2 = "" ;
            this.dob = "" ;
            this.receiptNo = "" ;
            this.fromDate = "" ;
            this.toDate = "" ;
            this.passType = Pass.TYPE_GOVERNMENT_PRIVATE ;
        }
    }
}