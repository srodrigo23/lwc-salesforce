import { LightningElement } from 'lwc';

export default class AccountFinder extends LightningElement {
    annualRevenue = null;

    handleChange(event){
        this.annualRevenue = event.detail.value;
        console.log(this.annualRevenue);
    }

    reset(){
        this.annualRevenue = null;
    }

}