import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert-service/alert.service';
import { Goal } from '../goal';
import { GoalService } from '../goal-service/goal.service';
import { Quote } from '../quote-class/quote';
import { QuoteRequestService } from '../quote-http/quote-request.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})

export class GoalComponent implements OnInit {


  goals:Goal[];
  alertService: AlertService;
  quote!: Quote;

constructor(goalService:GoalService, alertService:AlertService, private http:HttpClient, private quoteService:QuoteRequestService) {
  this.goals = goalService.getGoals()
  this.alertService = alertService;
 }


  toggleDetails(index: any) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete: any,index: number){
    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if(toDelete) {
        this.goals.splice(index,1);
        this.alertService.alertMe("The goal has been deleted")
      }
    }
  }

  addNewGoal(goal: any) {
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  ngOnInit() {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote
}
}