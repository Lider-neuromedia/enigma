import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';

const appRoutes: Routes = [
    { path: '', component: InicioComponent},
    { path: 'inicio', component: InicioComponent}
];

export const appRoutingProviders: any[] = [];
export const APP_ROUTING: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes, {
    initialNavigation: 'enabled'
});

// export const APP_ROUTING = RouterModule.forRoot(appRoutes, {
//     useHash: true,
//     enableTracing:true,
//     onSameUrlNavigation: "ignore",
//     anchorScrolling: 'enabled',
//     scrollPositionRestoration: 'enabled'
// });
