import { Component } from '@angular/core';
import { BaseService } from '../../../services/base.service';
import { SubjectResponse } from '../../../models/subject';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { SemesterResponse } from '../../../models/semester';
import { SpinnerComponent } from '../../../shared/pages/spinner/spinner.component';

@Component({
  selector: 'app-subjects',
  standalone: true,
  imports: [HttpClientModule, RouterModule, SpinnerComponent],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.scss',
})
export class SubjectsComponent {
  constructor(private service: BaseService, private route: Router) {}
  subjects: SubjectResponse[] = [];
  showSpinner: boolean = true;
  semesters: SemesterResponse[] = [];
  errorMessage!: string;
  ngOnInit(): void {
    this.getSubjects();
    this.getSemesters();
  }

  getSubjects(): void {
    this.service.Fetch<SubjectResponse[]>('subjects').subscribe({
      next: (response) => {
        this.showSpinner = false;
        if (response.isSuccess) this.subjects = response.result;
        else this.errorMessage = 'No subject found';
      },
      error: (err) => {
        this.showSpinner = false;
        console.log(err);
      },
    });
  }

  getSemesters(): void {
    this.service.Fetch<SemesterResponse[]>('semester').subscribe({
      next: (response) => {
        if (response.isSuccess) this.semesters = response.result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  changeRoute(subId: string, semId: string): void {
    this.route.navigate([`chapters/${subId}/${semId}`]);
  }

  filterSubjects(term: string): void {
    this.errorMessage = '';
    if (term) {
      this.service
        .Fetch<SubjectResponse[]>(`subjects/search/${term}`)
        .subscribe({
          next: (response) => {
            if (response.result.length > 0) this.subjects = response.result;
            else {
              this.subjects = [];
              this.errorMessage = 'No Subject Found';
            }
          },
          error: (error: Error) => {},
        });
    } else this.getSubjects();
  }
}
