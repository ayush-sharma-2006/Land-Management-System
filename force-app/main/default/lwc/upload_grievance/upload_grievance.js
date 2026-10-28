import { LightningElement } from 'lwc';

export default class Upload_grievance extends LightningElement {
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
