
import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class dashboard extends NavigationMixin(
    LightningElement
) {
    // Refresh dashboard
    handleRefresh() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Dashboard',
                message:
                    'The dashboard currently displays sample data. Live data integration is the next step.',
                variant: 'info'
            })
        );
    }

    // Navigate to Acquisition Cases
    handleViewCases() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Acquisition_Case__c',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        });
    }
}
