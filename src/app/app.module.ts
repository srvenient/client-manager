import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BsModalService, ModalModule} from 'ngx-bootstrap/modal';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ClientComponent} from './components/client/client.component';
import {RegisterComponent} from './components/client/register/register.component';
import {SearchComponent} from './components/client/search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditComponent} from './components/client/edit/edit.component';
import {ErrorComponent} from './components/client/error/error.component';

@NgModule({
    declarations: [
        AppComponent,
        ClientComponent,
        RegisterComponent,
        SearchComponent,
        EditComponent,
        ErrorComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgOptimizedImage,
        FormsModule,
        BrowserAnimationsModule,
        ModalModule.forRoot()
    ],
    providers: [BsModalService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
