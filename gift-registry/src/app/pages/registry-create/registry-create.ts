import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RegistryApi } from '../../api/registry.api';
import { RegistryForm } from "../../shared/registry-form/registry-form";

@Component({
  selector: 'app-registry-create',
  standalone: true,
  imports: [RegistryForm],
  templateUrl: './registry-create.html',
  styleUrls: ['./registry-create.css'],
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