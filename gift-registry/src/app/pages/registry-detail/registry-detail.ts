import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registry-detail',
  standalone: true,
  imports: [],
  templateUrl: './registry-detail.html',
  styleUrl: './registry-detail.css',
})
export class RegistryDetail {
  private route = inject(ActivatedRoute);

  id = computed(() => this.route.snapshot.paramMap.get('id'));
}
