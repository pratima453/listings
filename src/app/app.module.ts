import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListingsComponent } from './listings/listings.component';
import { MylistingsComponent } from './mylistings/mylistings.component';
import { FishpageComponent } from './fishpage/fishpage.component';
import { CribslistingComponent } from './cribslisting/cribslisting.component';
import { CribComponent } from './crib/crib.component';


@NgModule({
  declarations: [
    AppComponent,
    ListingsComponent,
    MylistingsComponent,
    FishpageComponent,
    CribslistingComponent,
    CribComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
