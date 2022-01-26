public with sharing class AccountListControllerLwc {
    public AccountListControllerLwc() {
        
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByEmployeeNumber(Integer numberOfEmployees){
        return [ select Name
                 from Account
                 where NumberOfEmployees >= :numberOfEmployees];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByRevenue(Decimal annualRevenue){
        return [ select Name
                 from Account
                 where AnnualRevenue >= :annualRevenue];
    }
}
