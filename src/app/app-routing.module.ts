import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage/homepage.component';
import { AboutUsComponent } from './pages/about-us/about-us/about-us.component';
import { BlogComponent } from './pages/blog/blog/blog.component';
import { ContactComponent } from './pages/contact-us/contact/contact.component';
import { FaqComponent } from './pages/faq/faq/faq.component';
import { ShopContentComponent } from './pages/shop/shop-content/shop-content.component';
import { PageNotFoundComponentComponent } from './pages/404/page-not-found-component/page-not-found-component.component';


const routes: Routes = [
  { path: '',  component: HomepageComponent  }, 
  { path: 'shop', component: ShopContentComponent },
  { path: 'about-us',  component: AboutUsComponent  }, 
  { path: 'blog', component: BlogComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  {  path: '',   redirectTo: 'home',   pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
