import { async, TestBed } from "@angular/core/testing";
import { GmailerModule } from "./gmailer.module";

describe("GmailerModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GmailerModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(GmailerModule).toBeDefined();
  });
});
