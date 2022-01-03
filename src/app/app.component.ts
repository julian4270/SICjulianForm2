import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from './services/state/state.service';
import { PersonService } from './services/person/person.service';
import { PcService } from './services/pc/pc.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SICjulianForm';

  personForm: FormGroup;
  pc: any;

  constructor(
    public fb: FormBuilder,
    public stateService: StateService,
    public pcService: PcService,
    public personService: PersonService
  ) { }

  ngOnInit(): void {
    this.personForm = this.fb.group({
      Documento: ['', Validators.required],
      Email: ['', Validators.required],
      Comentarios: ['', Validators.required],
      MarcaFavoritaPC: ['', Validators.required],
      fecha: ['', Validators.required],
      pc: ['', Validators.required],
      state: ['', Validators.required],
    });;
    this.pcService.getAllPC().subscribe(resp => {
      this.pc = resp;
      console.log(resp);
    },
      error => { console.error(error) }

    )
  }
  Save(): void {
  }



}
