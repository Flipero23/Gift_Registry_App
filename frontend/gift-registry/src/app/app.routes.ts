import { Routes } from '@angular/router';
import { RegistryList } from './pages/registry-list/registry-list';
import { RegistryCreate } from './pages/registry-create/registry-create';
import { RegistryDetail } from './pages/registry-detail/registry-detail';
import { RegistryEdit } from './pages/registry-edit/registry-edit';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'registries' },
    { path: 'registries', component: RegistryList},
    
    { path: 'registries/new', component: RegistryCreate},
    { path: 'registries/:id', component: RegistryDetail},
    { path: 'registries/:id/edit', component: RegistryEdit},

    { path: '**', redirectTo: 'registries' }
];
