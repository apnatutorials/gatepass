/**
 * @author Nalini Pathak
 *
 */
export namespace Gatepass {
    /**
    * 'Building' class for the 'building' table in 'Gatepass' schema
    */
    export class Building {

        private id: number = -1;
        private eName: string = "";
        private hName: string = "";

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
