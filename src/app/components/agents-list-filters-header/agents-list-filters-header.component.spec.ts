import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsListFiltersHeaderComponent } from './agents-list-filters-header.component';

describe('AgentsListFiltersHeaderComponent', () => {
  let component: AgentsListFiltersHeaderComponent;
  let fixture: ComponentFixture<AgentsListFiltersHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AgentsListFiltersHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentsListFiltersHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
