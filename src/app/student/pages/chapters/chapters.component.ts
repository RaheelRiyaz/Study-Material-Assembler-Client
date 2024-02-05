import { Component } from '@angular/core';
import { BaseService } from '../../../services/base.service';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';
import { ChapterResponse } from '../../../models/chapter';

@Component({
  selector: 'app-chapters',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './chapters.component.html',
  styleUrl: './chapters.component.scss',
})
export class ChaptersComponent {
  constructor(
    private service: BaseService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}
  subjectId!: string;
  chapters: ChapterResponse[] = [];
  semesterId!: string;
  errorMessage!:string;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (response) => {
        this.semesterId = response['semesterId'];
        this.subjectId = response['subjectId'];
      },
    });

    this.getChapters();
  }

  getChapters(): void {
    this.service
      .Fetch<ChapterResponse[]>(`chapter/${this.subjectId}/${this.semesterId}`)
      .subscribe({
        next: (response) => {
          if (response.isSuccess) this.chapters = response.result;
          else this.errorMessage = "No Chapter Added"
        },
        error: (err: Error) => {
          console.log(err);
        },
      });
  }

  // navigateToPdf(filePath: string): void {
  //   const encodedFilePath = encodeURIComponent(filePath);
  //   this.route.navigate([`/pdf/hh`]);
  // }
}
