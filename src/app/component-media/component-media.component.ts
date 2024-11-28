import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { Students } from '../model/Students';
import { MediaPipe } from '../pipe/media.pipe';

@Component({
  selector: 'app-component-media',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MediaPipe],
  templateUrl: './component-media.component.html',
  styleUrl: './component-media.component.css'
})
export class ComponentMediaComponent {

form = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  firstNote: new FormControl<number | null>(null, [Validators.required, Validators.min(0), Validators.max(10)]),
  seccondNote: new FormControl<number | null>(null, [Validators.required, Validators.min(0), Validators.max(10)])
})

vetor: Students[] = []

btnCadastrar: boolean = true

index:number = -1

addBtn(){
this.vetor.push(this.form.value as unknown as Students)
this.form.reset()
}

selectBtn(index: number){
this.index = index

this.form.setValue({
  name: this.vetor[index].name,
  firstNote: this.vetor[index].firstNote,
  seccondNote: this.vetor[index].seccondNote
})
this.btnCadastrar = false
}

changeBtn(){
  this.vetor[this.index] = this.form.value as Students
  this.form.reset()

  this.btnCadastrar = true
}

deleteBtn(){
  this.vetor.splice(this.index, 1)
  this.form.reset()

  this.btnCadastrar = true
}

cancelBtn(){
  this.form.reset()
  this.btnCadastrar = true
}
}
