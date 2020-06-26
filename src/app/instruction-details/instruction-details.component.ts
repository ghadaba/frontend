import { Instruction } from '../instruction';
import { Component, OnInit, Input } from '@angular/core';
import { InstructionService } from '../instruction.service';
import { InstructionListComponent } from '../instruction-list/instruction-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instruction-details',
  templateUrl: './instruction-details.component.html',
  styleUrls: ['./instruction-details.component.css']
})
export class InstructionDetailsComponent implements OnInit {

  Id: number;
  instruction: Instruction;

  constructor(private route: ActivatedRoute,private router: Router,
    private instructionService: InstructionService) { }

  ngOnInit() {
    this.instruction = new Instruction();

    this.Id = this.route.snapshot.params['Id'];
    
    this.instructionService.getInstruction(this.Id)
      .subscribe(data => {
        console.log(data)
        this.instruction = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['instructions']);
  }
}
