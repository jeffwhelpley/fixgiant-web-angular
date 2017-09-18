import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule.withServerTransition({ appId: "universal" })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}