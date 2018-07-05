/**
 * @author Nalini  Pathak
 *
 */
import * as designation from '../class/Designation';
import * as department from '../class/Department';
import * as building from '../class/Building';

export namespace Gatepass {
    /**
     * 'Wrapper' class is for 
     */
    export class Wrapper {

        private designations: Array<designation.Gatepass.Designation>;
        private departments: Array<department.Gatepass.Department>;
        private buildings: Array<building.Gatepass.Building>;

        /**
        * constructor to set the variables to their default values
        */
        constructor() {
            this.designations = null;
            this.departments = null;
            this.buildings = null;
        }
    }
}