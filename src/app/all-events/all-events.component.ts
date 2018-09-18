import { Component, OnInit, Input} from '@angular/core';
import {EventDetailComponent} from '../event-detail/event-detail.component';
import {EventChartComponent} from '../event-chart/event-chart.component';
import {EventFoodDesiredComponent} from '../event-food-desired/event-food-desired.component';
import {MainIngredientComponent} from '../main-ingredient/main-ingredient.component';
import {MakeBudgetComponent} from '../make-budget/make-budget.component';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';



@Component({
	selector: 'app-all-events',
	templateUrl: './all-events.component.html',
	styleUrls: ['./all-events.component.less']
})


export class AllEventsComponent implements OnInit {
	private closeResult = "";

	@Input() showEventDetail :boolean;

	constructor(private modalService:NgbModal) {}

	public openCreateEvent(content) {
		this.modalService.open(content).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

	private getDismissReason (reason : any) {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return  `with: ${reason}`;
		}
	}  

	ngOnInit() {

	}

}
