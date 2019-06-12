import { async, TestBed } from "@angular/core/testing";
import { ComponentsWebsiteModule } from "./components-website.module";

describe("ComponentsWebsiteModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsWebsiteModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(ComponentsWebsiteModule).toBeDefined();
  });
});
