import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RegistryApi } from '../../api/registry.api';
import { Registry } from '../../models/registry.models';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-registry-list',
  imports: [CommonModule, RouterLink],
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
}
