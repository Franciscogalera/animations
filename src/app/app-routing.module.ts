import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoveTextAlongAMotionPathComponent} from './move-text-along-a-motion-path/move-text-along-a-motion-path.component';
import { CatComponent} from './cat/cat.component';

const routes: Routes = [
  { path: 'SVGpath', component: MoveTextAlongAMotionPathComponent },
  { path: 'cat', component: CatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
