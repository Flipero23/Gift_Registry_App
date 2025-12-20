import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RegistryApi } from '../../api/registry.api';
import { Registry } from '../../models/registry.models';
import { RouterLink } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-registry-list',
  imports: [CommonModule, RouterLink, FormsModule],
  standalone: true,
  templateUrl: './registry-list.html',
  styleUrl: './registry-list.css',
})
export class RegistryList implements OnInit{
  private registryApi = inject(RegistryApi);

  registries: Registry[] = [];
  loading = false;
  error: string | null = null;

  ngOnInit(): void {
    this.fetchRegistries();
  }

  fetchRegistries(): void {
    this.loading = true;
    this.error = null;

    this.registryApi.getAll().subscribe({
      next: (data) => {
        this.registries = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load registries. Is the backend running?';
        this.loading = false;
      },
    });
  }

  searchText = '';
  ownerFilter = '';
  dateFrom = ''; 
  dateTo = ''; 

  purchasedOnly = false;
  sortBy: 'dateAsc' | 'dateDesc' | 'nameAsc' | 'nameDesc' = 'dateAsc';

  get visibleRegistries() {
    const list = [...this.registries];

    const search = this.searchText.trim().toLowerCase();
    const owner = this.ownerFilter.trim().toLowerCase();

    let filtered = list.filter(r => {
      const haystack = `${r.eventName} ${r.ownerName} ${r.description}`.toLowerCase();

      const matchesSearch = !search || haystack.includes(search);
      const matchesOwner = !owner || r.ownerName.toLowerCase().includes(owner);

      return matchesSearch && matchesOwner;
    });

    if (this.dateFrom) {
      filtered = filtered.filter(r => r.date >= this.dateFrom);
    }
    if (this.dateTo) {
      filtered = filtered.filter(r => r.date <= this.dateTo);
    }

    if (this.purchasedOnly) {
      filtered = filtered.filter(r => r.items.length > 0 && r.items.every(i => i.purchased));
    }

    filtered.sort((a, b) => {
      switch (this.sortBy) {
        case 'dateAsc':
          return a.date.localeCompare(b.date);
        case 'dateDesc':
          return b.date.localeCompare(a.date);
        case 'nameAsc':
          return a.eventName.localeCompare(b.eventName);
        case 'nameDesc':
          return b.eventName.localeCompare(a.eventName);
      }
    });

    return filtered;
  }

  resetFilters(): void {
    this.searchText = '';
    this.ownerFilter = '';
    this.dateFrom = '';
    this.dateTo = '';
    this.purchasedOnly = false;
    this.sortBy = 'dateAsc';
  }
}