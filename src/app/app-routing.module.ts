import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveTextAlongAMotionPathComponent} from './move-text-along-a-motion-path/move-text-along-a-motion-path.component';

const routes: Routes = [
  { path: 'hallo', component: MoveTextAlongAMotionPathComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
