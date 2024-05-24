import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Person } from '../../data/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss'
})
export class PersonsComponent {
  dataSource: Person[] = [];
  displayedColumns: string[] = ['id', 'name', 'age'];

  isUnique = true;
  person = new Person();
  public personForm = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    age: new UntypedFormControl(0),
  });


  public constructor(private httpClient: HttpClient) {
    this.reloadData();
  }

  reloadData() {
    this.httpClient.get<Person[]>('http://localhost:9090/api/person').subscribe(data => {
      this.dataSource = data;
    });
  }

  async save(formData: any) {
    this.person = Object.assign(formData);
    this.isUnique = true;
    this.dataSource.forEach(person => {
      if (person.name === this.person.name) {
        alert('Person with this name already exists');
        this.isUnique = false;
        return;
      }
    })

    if (!this.isUnique) {
      return;
    }

    this.httpClient.post('http://localhost:9090/api/person', this.person).subscribe(result => {
      this.reloadData();
    });
  }
}
