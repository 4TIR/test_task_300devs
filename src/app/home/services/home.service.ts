import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IgameItem } from '../models/home.model';
import { HomeApiService } from './home-api.service';

@Injectable()
export class HomeService {
  constructor(private readonly homeApiService: HomeApiService) {}

  public getGamesList(): Observable<IgameItem[]> {
    return this.homeApiService.gamesList();
  }

  public getGameById(id: number): Observable<IgameItem | undefined> {
    return this.getGamesList()
      .pipe(map((gameList) => gameList.find((gameItem) => gameItem.id === id)));
  }
}
