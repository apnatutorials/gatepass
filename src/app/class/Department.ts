/**
 * @author Nalini  Pathak
 *
 */
export namespace Gatepass {
    /**
     * 'Department' class is for 'department' table in 'Gatepass' schema
     */
    export class Department {

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