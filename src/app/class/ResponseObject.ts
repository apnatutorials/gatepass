import * as account from '../class/Account';
import * as pass from '../class/Pass';
/**
 * @author Nalini Pathak
 *
 */
export namespace Gatepass {

    export class ResponseObject {
       /**
    * Every response from server will go as a xml of ResponseObject.
    * command and previousCommand will contain the respective values of request object
    * For every successful operation, success field will contain true value where for any unsuccessful operation
    * success will contain false and reason in message field.
    */
	public command: string = "" ;
    public previousCommand: string = "" ;
    public success: boolean = true ;
    public message: string = "" ;
    public startIndex: number = 0 ;
    public recordCount: number = -1 ;
    public errorCode: number = -1 ;
    
    public account: account.Gatepass.Account = null ;
    public accounts: Array<account.Gatepass.Account> = null ;
    public pass: pass.Gatepass.Pass;

        /**
         * constructor to set the variables to their default values
         */
        constructor() {
            this.command = "";
            this.previousCommand = "";
            this.startIndex = -1;
            this.recordCount = -1;
            this.success = true;
            this.message = "";
            this.errorCode = -1
            this.account = null;
            this.accounts = null;
            this.pass = null;
        }
    }
}