import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });

    // Initialize EmailJS with your public key
    emailjs.init('yddhxVofTnH4OrRSE');
  }

  get f() {
    return this.contactForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      return;
    }

    this.loading = true;
    const formData = this.contactForm.value;

    try {
      // Send email to yourself (website owner)
      await emailjs.send('service_y5j17ek', 'template_0w7svat', {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'No Subject',
        message: formData.message,
        to_email: 'rafayshah.9814@gmail.com',
      });

      // Send auto-response to user
      await emailjs.send('service_y5j17ek', 'template_yccnu7c', {
        to_name: formData.name,
        to_email: formData.email,
        user_subject: formData.subject || 'Your inquiry',
        user_message: formData.message,
      });

      this.successMessage =
        '✅ Your message was sent successfully! You will receive a confirmation email shortly.';
      this.contactForm.reset();
      this.submitted = false;
    } catch (error) {
      console.error('Error sending email:', error);
      this.errorMessage = '❌ Oops! Something went wrong. Please try again later.';
    } finally {
      this.loading = false;
    }
  }
}
