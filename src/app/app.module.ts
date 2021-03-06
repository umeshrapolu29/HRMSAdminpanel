import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { FileSelectDirective } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';





import { IconsComponent } from './icons/icons.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClient } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import {AuthService} from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule, MatNativeDateModule, MatMenuModule, MatRadioModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule ,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatMenuModule,
    MatRadioModule,
    MatIconModule,
    MatToolbarModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SigninComponent,FileSelectDirective,      
   
    
    
  
   
    
    


  ],
  providers: [AuthGuard,AuthService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
