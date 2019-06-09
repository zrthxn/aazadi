import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule]
})
export class RadioInterfacesModule {}

export interface PlayerProps {
  playTrackId: string
}

export interface RecommenderProps {
  context: {
    contextType: string,
    playingTrackId: string,
    caller: any
  },
  listType: string,
  omitTracks: object
}