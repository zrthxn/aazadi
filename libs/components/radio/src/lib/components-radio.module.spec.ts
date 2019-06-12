import { async, TestBed } from "@angular/core/testing";
import { ComponentsRadioModule } from "./components-radio.module";

describe("ComponentsRadioModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsRadioModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(ComponentsRadioModule).toBeDefined();
  });
});
