import { async, TestBed } from "@angular/core/testing";
import { FeaturesSharedModule } from "./features-shared.module";

describe("FeaturesSharedModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeaturesSharedModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(FeaturesSharedModule).toBeDefined();
  });
});
