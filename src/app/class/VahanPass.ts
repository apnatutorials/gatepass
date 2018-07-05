/**
 * @author Nalini Pathak
 *
 */
export namespace Gatepass {
    /**
     * 'VahanPass' Class is for 'pass' table in 'Gatepass' schema
     */
    export class VahanPass {

        // Start of Vahan Pass 'A' fields
        public id : number ;
        public passNo : number ;
        public name : string ;
        public designation : string ;
        public office : string ;
        public vehicleNo1 : string;
        public vehicleNo2 : string;
        public vehicleReference1 : string;
        public vehicleReference2 : string;
        public issueDate : string;
        public referenceNo : string;
        public passType : number;
        
        // end of Vahan Pass 'A' fields	
        /**
         *  All the forms Vahan Pas 'B', Vahan Pass 'C', Vahan Pass 'D', Vahan Pass 'E' have
         * same fields.
         */
	
        /**
        * constructor to set the variables to their default values
        */
        constructor() {
            this.id = -1 ;
            this.passNo = -1 ;
            this.name = "" ;
            this.designation = "" ;
            this.office = "" ;
            this.vehicleNo1 = "" ;
            this.vehicleNo2 = "" ;
            this.vehicleReference1 = "" ;
            this.vehicleReference2 = "" ;
            this.issueDate = "" ;
            this.referenceNo = "" ;
            this.passType = -1 ;
        }
    }
}