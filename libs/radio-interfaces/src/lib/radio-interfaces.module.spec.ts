import { async, TestBed } from "@angular/core/testing";
import { RadioInterfacesModule } from "./radio-interfaces.module";

describe("RadioInterfacesModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RadioInterfacesModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(RadioInterfacesModule).toBeDefined();
  });
});
