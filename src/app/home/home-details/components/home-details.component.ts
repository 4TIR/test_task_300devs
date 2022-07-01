import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IgameItem } from '../../models/home.model';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css'],
})
export class HomeDetailsComponent implements OnInit {
  public gameItem$: Observable<IgameItem | undefined> | undefined;

  constructor(
    private readonly homeService: HomeService,
    private readonly route: ActivatedRoute,
    private readonly titleService: Title
  ) {}

  ngOnInit() {
    this.getGameById();
  }

  private getGameById() {
    const id = +this.route.snapshot.params['id'];
    this.gameItem$ = this.homeService.getGameById(id);
    this.gameItem$.subscribe((game) => this.titleService.setTitle(game!.name));
  }
}
