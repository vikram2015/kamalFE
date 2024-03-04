import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

const routes: Routes = [
  {
    path: '',
    component: TestimonialComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestimonialsRoutingModule {}
