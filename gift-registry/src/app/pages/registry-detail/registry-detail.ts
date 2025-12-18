import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistryApi } from '../../api/registry.api';
import { Registry } from '../../models/registry.models';

@Component({
  selector: 'app-registry-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registry-detail.html',
  styleUrl: './registry-detail.css',
})
export class RegistryDetail {
  private route = inject(ActivatedRoute);
  private registryApi = inject(RegistryApi);

  registry: Registry | null = null;
  loading = false;
  error: string | null = null;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if(!idParam || Number.isNaN(id)) {
      this.error = 'Invalid registry ID';
      return;
    }

    this.loading = true;
    this.registryApi.getById(id).subscribe({
      next: (data) => {
        this.registry = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Registry not found or failed to load.';
        this.loading = false;
      },
    });
  }
}
