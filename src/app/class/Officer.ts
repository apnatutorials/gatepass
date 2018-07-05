/**
 * @author Nalini Pathak
 *
 */
export namespace Gatepass {
    /**
     * 'Officer' class is for 'officer' table in 'Gatepass' schema
     */
    export class Officer {

        private id: number;
        private buildingId: number;
        private building: string;
        private departmentId: number;
        private departmentName: string;
        private designationId: number;
        private designationName: string;
        private floor: number;
        private roomNo: number;
        private name: string;
        private extention: string;
        private phoneOffice: string;

        /**
        * constructor to set the variables to their default values
        */
        constructor() {
            this.id = -1;
            this.buildingId = -1;
            this.building = "";
            this.departmentId = -1;
            this.departmentName = "";
            this.designationId = -1;
            this.designationName = "";
            this.floor = -1;
            this.roomNo = -1;
            this.name = "";
            this.extention = "";
            this.phoneOffice = "";
        }
    }
}