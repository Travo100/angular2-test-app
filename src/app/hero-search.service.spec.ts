import { TestBed, inject } from '@angular/core/testing';

import { HeroSearchService } from './hero-search.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroService } from './hero.service';

describe('HeroSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, RouterTestingModule ],
      providers: [HeroSearchService]
    });
  });

  it('should ...', inject([HeroSearchService], (service: HeroSearchService) => {
    expect(service).toBeTruthy();
  }));
});
