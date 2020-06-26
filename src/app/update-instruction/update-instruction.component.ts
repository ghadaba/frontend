import { Component, OnInit } from '@angular/core';
import { Instruction } from '../instruction';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructionService } from '../instruction.service';

@Component({
  selector: 'app-update-instruction',
  templateUrl: './update-instruction.component.html',
  styleUrls: ['./update-instruction.component.css']
})
export class UpdateInstructionComponent implements OnInit {

  id: number;
  instruction: Instruction;

  constructor(private route: ActivatedRoute,private router: Router,
    private instructionService: InstructionService) { }

  ngOnInit() {
    this.instruction = new Instruction();

    this.id = this.route.snapshot.params['id'];
    
    this.instructionService.getInstruction(this.id)
      .subscribe(data => {
        console.log(data)
        this.instruction = data;
      }, error => console.log(error));
  }

  updateInstruction() {
    this.instructionService.updateInstruction(this.id, this.instruction)
      .subscribe(data => console.log(data), error => console.log(error));
    this.instruction = new Instruction();
    this.gotoList();
  }

  onSubmit() {
    this.updateInstruction();    
  }

  gotoList() {
    this.router.navigate(['/instructions']);
  }
}
