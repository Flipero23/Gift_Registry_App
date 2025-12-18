import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistryApi } from '../../api/registry.api';
import { Registry } from '../../models/registry.models';
import { ItemApi } from '../../api/item.api';
import { GuestApi } from '../../api/guest.api';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registry-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './registry-detail.html',
  styleUrl: './registry-detail.css',
})
export class RegistryDetail {
  private route = inject(ActivatedRoute);
  private registryApi = inject(RegistryApi);
  private itemApi = inject(ItemApi);
  private guestApi = inject(GuestApi);

  private registryId!: number;

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

    this.registryId = id;
    this.loadRegistry();
  }

  private loadRegistry(): void {
    this.loading = true;
    this.error = null;

    this.registryApi.getById(this.registryId).subscribe({
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

  markPurchased(itemId: number): void {
    this.itemApi.purchase(itemId).subscribe({
      next: () => this.loadRegistry(),
      error: () => {
        this.error = 'Failed to mark item as purchased.';
      },
    });
  }

  markRsvp(guestId: number): void {
    this.guestApi.rsvp(guestId).subscribe({
      next: () => this.loadRegistry(),
      error: () => {
        this.error = 'Failed to mark RSVP.';
      },
    });
  }

  deleteRegistry(): void {
    const confirmed = confirm
    ('Are you sure you want to delete this registry? This action cannot be undone.'
    );

    if (!confirmed) {
      return;
    }

    this.registryApi.delete(this.registryId).subscribe({
      next: () => {
        window.location.href = '/registries';
      },
      error: () => {
        this.error = 'Failed to delete registry.';
      },
    });

  }
}