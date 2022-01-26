import { LightningElement, wire  } from 'lwc';
import queryAccountsByEmployeeNumber from '@salesforce/apex/AccountListControllerLwc.queryAccountsByEmployeeNumber';

export default class AccountSearch extends LightningElement {

    numberOfEmployees = null;
    
    handleChange(event) {
        this.numberOfEmployees = event.target.value;
    }

    reset() {
        this.numberOfEmployees = null;
    }

    @wire (queryAccountsByEmployeeNumber, { numberOfEmployees : '$numberOfEmployees' })
    accounts;
}