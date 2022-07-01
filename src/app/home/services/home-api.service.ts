import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe, shareReplay } from 'rxjs';
import { IgameItem } from '../models/home.model';

@Injectable()
export class HomeApiService {
  constructor(private readonly httpClient: HttpClient) {}

  public gamesList(): Observable<IgameItem[]> {
    return this.httpClient.get<IgameItem[]>('/assets/gameList.json').pipe(shareReplay());
  }
}
