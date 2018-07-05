/**
 * @author Nalini Pathak
 *
 */
export namespace Gatepass {
    /**
     * 'Designation' class is for 'designation' table in 'Gatepass' schema
     */
    export class Designation {

        private id: number ;
        private eName: string ;
        private hName: string ;

        /**
        * constructor to set the variables to their default values
        */
        constructor() {
            this.id = -1;
            this.eName = "";
            this.hName = "";
        }
    }
}