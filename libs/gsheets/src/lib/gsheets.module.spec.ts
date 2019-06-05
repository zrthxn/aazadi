import { async, TestBed } from "@angular/core/testing";
import { GsheetsModule } from "./gsheets.module";

describe("GsheetsModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GsheetsModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(GsheetsModule).toBeDefined();
  });
});
