import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegistryApi } from '../../api/registry.api';
import { Registry } from '../../models/registry.models';
import { ItemApi } from '../../api/item.api';
import { GuestApi } from '../../api/guest.api';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registry-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
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


  newItem = {
  name: '',
  price: null as number | null,
  quantity: null as number | null,
  };
  
  newGuest = {
  name: '',
  email: '',
  };

  addItem(): void {
    if (!this.newItem.name || this.newItem.price == null || this.newItem.quantity == null || this.newItem.price <= 0 || this.newItem.quantity <= 0) {
      return;
    }

    const payload = {
      name: this.newItem.name,
      price: this.newItem.price,
      quantity: this.newItem.quantity,
    };

    this.itemApi.addToRegistry(this.registryId, payload).subscribe({
      next: () => {
        this.newItem = { name: '', price: null, quantity: null };
        this.loadRegistry();
      },
      error: () => {
        this.error = 'Failed to add item.';
      },
    });
  }

  addGuest(): void {
    if (!this.newGuest.name || !this.newGuest.email) {
      return;
    }

    this.guestApi.addToRegistry(this.registryId, this.newGuest).subscribe({
      next: () => {
        this.newGuest = { name: '', email: '' };
        this.loadRegistry();
      },
      error: () => {
        this.error = 'Failed to add guest.';
      },
    });
  }

  get totalItems(): number {
    return this.registry ? this.registry.items.length : 0;
  }

  get purchasedItems(): number {
    return this.registry ? this.registry.items.filter(i => i.purchased).length : 0;
  }

  get purchasePercent(): number {
    if (!this.registry || this.totalItems === 0) return 0;
    return Math.round((this.purchasedItems / this.totalItems) * 100);
  }

  get totalGuests(): number {
    return this.registry ? this.registry.guests.length : 0;
  }

  get rsvpGuests(): number {
    return this.registry ? this.registry.guests.filter(g => g.hasRSVP).length : 0;
  }

  get rsvpPercent(): number {
    if (!this.registry || this.totalGuests === 0) return 0;
    return Math.round((this.rsvpGuests / this.totalGuests) * 100);
  }
}