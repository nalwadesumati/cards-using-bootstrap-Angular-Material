import { Component } from '@angular/core';

import { postData } from './shared/consts/post';
import { Ipost } from './models/post';

import { movieData } from './shared/consts/movie';
import { Imovie } from './models/movie';

import { bookArrData } from './shared/consts/book';
import { Ibook } from './models/book';

import { vehicalData } from './shared/consts/vehical';
import { Ivehical } from './models/vehical';

import { countryArr } from './shared/consts/country';
import { Icountry } from './models/country';

import { skillDataArr } from './shared/consts/skills';
import { Iskills } from './models/skills';

import { cardData } from './shared/consts/card';
import { ICard } from './models/card';

import { petsArr } from './shared/consts/pets';
import { Ipets } from './models/pets';

import { wallpapersArr } from './shared/consts/wallpaper';
import { Iwallpaper } from './models/wallpaper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OurSecondProject';

  postsArr: Ipost[] = postData;
  moviesArr: Imovie[] = movieData;
  booksArr: Ibook[] = bookArrData;
  vehiclesArr: Ivehical[] = vehicalData;
  countryArr: Icountry[] = countryArr;
  skillsArr: Iskills[] = skillDataArr;
  cardsArr: ICard[] = cardData;
  wallpapersArr: Iwallpaper[] = wallpapersArr;
  petsArr: Ipets[] = petsArr;
}
