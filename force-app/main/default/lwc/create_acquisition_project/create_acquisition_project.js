import { LightningElement } from 'lwc';

export default class Create_acquisition_project extends LightningElement {
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
