import { LightningElement } from 'lwc';

export default class Registration_compensation extends LightningElement{
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
