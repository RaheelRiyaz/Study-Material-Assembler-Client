import { Routes } from '@angular/router';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';

export const routes: Routes = [
  { path: '', loadChildren: () => StudentModule },
  { path: 'admin', loadChildren: () => AdminModule },
];
