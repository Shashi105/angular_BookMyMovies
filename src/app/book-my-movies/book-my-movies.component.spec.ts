import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookMyMoviesComponent } from './book-my-movies.component';

describe('BookMyMoviesComponent', () => {
  let component: BookMyMoviesComponent;
  let fixture: ComponentFixture<BookMyMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookMyMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookMyMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
