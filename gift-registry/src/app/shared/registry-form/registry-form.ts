import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Form, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Registry } from '../../models/registry.models';

@Component({
  selector: 'app-registry-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registry-form.html',
  styleUrl: './registry-form.css',
})
export class RegistryForm implements OnInit {
  private fb = inject(FormBuilder);

  @Input() initialData: Registry | null = null;
  @Output() submitForm = new EventEmitter<Partial<Registry>>();

  form = this.fb.nonNullable.group({
    eventName: ['', Validators.required],
    ownerName: ['', Validators.required],
    date: ['', Validators.required],
    description: [''],
  });


  ngOnInit(): void {
    if (this.initialData) {
      this.form.patchValue({
        eventName: this.initialData.eventName,
        ownerName: this.initialData.ownerName,
        date: this.initialData.date,
        description: this.initialData.description,
      });
    }
  }

  submit(): void {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitForm.emit(this.form.getRawValue());
  }

}
