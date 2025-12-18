import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegistryApi } from '../../api/registry.api';
import { RegistryForm } from "../../shared/registry-form/registry-form";

@Component({
  selector: 'app-registry-create',
  standalone: true,
  imports: [RegistryForm],
  template: `
    <h1>Create Registry</h1>
    <app-registry-form (submitForm)="create($event)"></app-registry-form>
  `,
})
export class RegistryCreate {
  private api = inject(RegistryApi);
  private router = inject(Router);

  create(data: any): void {
    this.api.create(data).subscribe(() => {
      this.router.navigate(['/registries']);
    });
  }
}