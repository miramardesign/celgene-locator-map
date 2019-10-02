import { Component, OnInit } from "@angular/core";

import { interval, Subscription } from "rxjs";
import { timeout, take } from "rxjs/operators";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit {
  private subscription: Subscription = new Subscription();
  imgPath: string;
  studyClicked = false;
  studyClickedList = [];
  countryClicked = "";

  diseases = {
    psoriasis: "psoriasis",
    plaquePsoriasis: "plaque-psoriasis",
    moderatePlaquePsoriasis: "moderate-plaque-psoriasis"
  };

  countryStudies = {
    sweden: [this.diseases.psoriasis],
    gb: [this.diseases.psoriasis],
    ireland: [this.diseases.psoriasis],
    netherlands: [this.diseases.psoriasis],
    belgium: [this.diseases.psoriasis],
    switzerland: [this.diseases.psoriasis],
    austria: [this.diseases.psoriasis],

    france: [this.diseases.plaquePsoriasis],
    italy: [this.diseases.plaquePsoriasis],

    germany: [this.diseases.psoriasis, this.diseases.plaquePsoriasis],
    spain: [this.diseases.psoriasis, this.diseases.plaquePsoriasis],

    greece: [this.diseases.moderatePlaquePsoriasis],

    // for testing layout with hidden link
    all: [
      this.diseases.psoriasis,
      this.diseases.plaquePsoriasis,
      this.diseases.moderatePlaquePsoriasis
    ]
  };

  constructor() {}

  ngOnInit() {
  }
  /**
   *  'italy-sardina -> italy '
   */
  getCountryfromCountryRegion(countryRegion: string): string {
    return countryRegion.split("-")[0];
  }


  close() {
    this.subscription.add(
      interval(60000)
        .pipe(take(1))
        .subscribe(
          value => {
            console.log(new Date());
            this.countryClicked = "";
            console.log(value);
          }, // Will emit numbers just as regular `interval` would.
          err => console.log(err) // Will never be called.
        )
    );
  }

  log(obj: any) {
    console.log(obj);
  }

  selectCountry(event: any) {
    this.countryClicked = "";
    // show all for debuggingg layout, link is hidden in crete, does not hide timer
    if (event === "all") {
      this.countryClicked = Object.keys(this.countryStudies).join(" ");
      return;
    }

    this.subscription.unsubscribe();
    this.subscription = new Subscription();

    this.subscription.add(
      interval(500)
        .pipe(take(1))
        .subscribe(
          value => {
            //for hiding.
            if (event === "") {
              this.studyClicked = false;
              this.countryClicked = "";
              return;
            }

            this.countryClicked = this.getCountryfromCountryRegion(
              event.target.id
            );

            console.log(new Date());
            this.close();
          }, // Will emit numbers just as regular `interval` would.
          err => console.log(err) // Will never be called.
        )
    );
  }
}
