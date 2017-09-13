import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { RatingCategoryPipe } from './rating-category.pipe';
import { RatingComponent } from './rating/rating.component';
import { HttpModule } from "@angular/http";
import { routing } from "./app.routing";
import { TabsComponent } from './tabs/tabs.component';
import { RouterModule } from "@angular/router";
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookGuardService } from "./book-guard.service";
import { NewBookComponent } from './new-book/new-book.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CollectionComponent,
    RatingCategoryPipe,
    RatingComponent,
    TabsComponent,
    BookDetailComponent,
    NewBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule,
    routing,
    ReactiveFormsModule
  ],
  entryComponents: [
    NewBookComponent
  ],
  providers: [BookGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
