import { async, TestBed } from "@angular/core/testing";
import { InterfacesModule } from "./interfaces.module";

describe("InterfacesModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InterfacesModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(InterfacesModule).toBeDefined();
  });
});
