import { LightningElement } from 'lwc';

export default class Upload_land_parcels extends LightningElement {
    showFlow = false;
    handleClick() {
        this.showFlow = true;
    }

    handleStatusChange(event) {
        if (event.detail.status === 'FINISHED') {
            this.showFlow = false;
        }
    }
}
