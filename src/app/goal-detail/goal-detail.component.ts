import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {
  @Input()
  goal: Goal | any;

  constructor(private route:ActivatedRoute, private service:GoalService) { }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.goal = this.service.getGoal(id)
  }

}
