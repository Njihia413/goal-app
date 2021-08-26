import { Injectable } from '@angular/core';
import { goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  getGoals() {
    return goals
  }
  
  getGoal(id: number){
    for (let goal of goals){
      if (goal.id == id){
        return goal;
      }
    }
    return;
  }
  constructor() { }
}
