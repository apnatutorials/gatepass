/**
 * @author Nalini Pathak
 */
export namespace Gatepass {
    /**
     * 'Account' class for the 'account' table in 'Gatepass' schema
     */
    export class Account {

        public static readonly TYPE_USER: number = 1;
        public static readonly TYPE_ADMIN: number = 2;

        public id: number;
        public buildingId: number;
        public building: string;
        public departmentId: number;
        public department: string;
        public name: string;
        public userId: string;
        public password: string;
        public email: string;
        public phone: string;

        public type = Account.TYPE_USER;

        /**
         * constructor to set the variables to their default values
         */
        constructor() {
           // this.TYPE_ADMIN = 1;
           // this.TYPE_USER = 2;

            this.id = -1;
            this.buildingId = -1;
            this.building = "";
            this.departmentId = -1;
            this.name = "";
            this.userId = "";
            this.password = "";
            this.email = "";
            this.phone = "";
        }
    }
}