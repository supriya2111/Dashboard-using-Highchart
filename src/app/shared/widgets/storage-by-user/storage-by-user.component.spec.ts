import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageByUserComponent } from './storage-by-user.component';

describe('StorageByUserComponent', () => {
  let component: StorageByUserComponent;
  let fixture: ComponentFixture<StorageByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorageByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
