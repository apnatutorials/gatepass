import * as account from '../class/Account';
/**
 * @author Nalini Pathak
 *
 */
export namespace Gatepass {

    export class RequestObject {
        /**
         * Client in each and every request will send a xml of RequestObject. In every call client will 
         * set value of command and previousCommand plus xml of respective object. eg. for login, a xml of User object 
         * along with command, previousCommand will be send
         */
        public command: string;
        public previousCommand: string;
        public startIndex: number;
        public recordCount: number;

        public account: account.Gatepass.Account;
        public accounts: Array<account.Gatepass.Account>;

        /**
         * constructor to set the variables to their default values
         */
        constructor() {
            this.command = "";
            this.previousCommand = "";
            this.startIndex = -1;
            this.recordCount = -1;
            this.account = null;
            this.accounts = null;
        }
    }
}