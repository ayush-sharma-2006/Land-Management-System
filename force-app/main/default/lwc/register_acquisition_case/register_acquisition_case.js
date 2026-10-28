import { LightningElement } from 'lwc';

export default class Register_acquisition_case extends LightningElement {
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
