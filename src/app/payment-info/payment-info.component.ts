import { Component, OnInit, Input } from '@angular/core';

@Component({ 
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.less']
})
export class PaymentInfoComponent implements OnInit {

  @Input() payments : boolean;
  @Input() creditCardInfo: boolean;
  @Input() cardName : String;
  @Input() cardNum : String;
  @Input() cardHolder : String;
  @Input() cardDate : String;
  @Input() cardType : String;


  public goTOcreditCardInfo () {
  	this.creditCardInfo = false;
  	this.payments = true;

    this.cardName = "AA BANK NAME";
    this.cardNum ="2465 3321 3422 1278 3423";
    this.cardHolder ="Douane Riel";
    this.cardDate ="12/18";
    this.cardType="VISA";
  }

  constructor() { }

  ngOnInit() {
  	this.creditCardInfo = true;
  	this.payments = false;

  }

}
