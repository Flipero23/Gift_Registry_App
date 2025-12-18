import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RegistryForm } from '../../shared/registry-form/registry-form';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistryApi } from '../../api/registry.api';
import { Registry } from '../../models/registry.models';

@Component({
  selector: 'app-registry-edit',
  standalone: true,
  imports: [CommonModule, RegistryForm],
  templateUrl: './registry-edit.html',
  styleUrls: ['./registry-edit.css'],
})
export class RegistryEdit implements OnInit{
  private route = inject(ActivatedRoute);
  private api = inject(RegistryApi);
  private router = inject(Router);

  registry: Registry | null = null;
  loading = false
  error: string | null = null;

  private registryId!: number;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if(!idParam || Number.isNaN(id)) {
      this.error = 'Invalid registry ID';
      return;
    }

    this.registryId = id;
    this.loadRegistry();
  }

  private loadRegistry(): void {
    this.loading = true;
    this.error = null;

    this.api.getById(this.registryId).subscribe({
      next: (data) => {
        this.registry = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load registry.';
        this.loading = false;
      },
    });
  }

  save(data: Partial<Registry>): void {
    this.api.update(this.registryId, data).subscribe({
      next: () => {
        this.router.navigate(['/registries', this.registryId]);
      },
      error: () => {
        this.error = 'Failed to save changes.';
      },
    });
  }
}
