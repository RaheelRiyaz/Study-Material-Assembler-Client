import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { ChaptersComponent } from './pages/chapters/chapters.component';
import { StudentComponent } from './student.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: '', component: SubjectsComponent },
      { path: 'chapters/:subjectId/:semesterId', component: ChaptersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
