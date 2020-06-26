import { InstructionDetailsComponent } from './instruction-details/instruction-details.component';
import { CreateInstructionComponent } from './create-instruction/create-instruction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructionListComponent } from './instruction-list/instruction-list.component';
import { UpdateInstructionComponent } from './update-instruction/update-instruction.component';

const routes: Routes = [
  { path: '', redirectTo: 'instruction', pathMatch: 'full' },
  { path: 'instructions', component: InstructionListComponent },
  { path: 'add', component: CreateInstructionComponent },
  { path: 'update/:id', component: UpdateInstructionComponent },
  { path: 'details/:id', component: InstructionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
