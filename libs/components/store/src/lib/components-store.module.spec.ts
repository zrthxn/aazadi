import { async, TestBed } from "@angular/core/testing";
import { ComponentsStoreModule } from "./components-store.module";

describe("ComponentsStoreModule", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsStoreModule]
    }).compileComponents();
  }));

  it("should create", () => {
    expect(ComponentsStoreModule).toBeDefined();
  });
});
