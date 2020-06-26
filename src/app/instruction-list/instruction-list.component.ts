import { InstructionDetailsComponent } from './../instruction-details/instruction-details.component';
import { Observable } from "rxjs";
import { InstructionService } from "../instruction.service";
import { Instruction } from "../instruction";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-instruction-list",
  templateUrl: "./instruction-list.component.html",
  styleUrls: ["./instruction-list.component.css"]
})
export class InstructionListComponent implements OnInit {
  instructions: Observable<Instruction[]>;

  constructor(private instructionService: InstructionService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.instructions = this.instructionService.getInstructionsList();
  }

  deleteInstruction(id: number) {
    this.instructionService.deleteInstruction(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  instructionDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateInstruction(id: number){
    this.router.navigate(['update', id]);
  }
}
