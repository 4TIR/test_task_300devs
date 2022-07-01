import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { debounceTime } from "rxjs";
import { IgameItem } from "../../models/home.model";
import { HomeService } from "../../services/home.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public filteredItems: IgameItem[] = [];
  public searchFormControl = new FormControl('');
  private allGameList: IgameItem[] = [];

  constructor(private homeService: HomeService, private readonly router:Router) {}

  ngOnInit() {
    this.loadGameList();
    this.subscribeToSearchFormValueChanges();
  }
  
  public navigateToDetails(id: number){
    this.router.navigate([`/item/${id}`]);
  }

  private subscribeToSearchFormValueChanges() {
    this.searchFormControl.valueChanges
      .pipe(debounceTime(200))
      .subscribe((searchText) => {
        if (!searchText) {
          this.filteredItems = this.allGameList;
          return;
        }

        this.filteredItems = this.allGameList.filter((el: IgameItem) =>
          el.name.toLocaleLowerCase().includes(searchText?.toLocaleLowerCase()!)
        );
      });
  }

  private loadGameList() {
    this.homeService.getGamesList().subscribe((gameList) => {
      this.allGameList = gameList;
      this.filteredItems = gameList;
    });
  }
}
