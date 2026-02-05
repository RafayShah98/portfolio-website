import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private setupIntersectionObserver() {
    // Select all elements that need animation
    const counters = this.el.nativeElement.querySelectorAll('.counter');
    const skillBars = this.el.nativeElement.querySelectorAll('.skill-bar');

    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of element is visible
    };

    this.observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;

          if (target.classList.contains('counter')) {
            this.animateCounter(target);
          } else if (target.classList.contains('skill-bar')) {
            const width = target.getAttribute('data-width');
            target.style.width = width || '0%';
          }

          // Stop observing once animated
          obs.unobserve(target);
        }
      });
    }, options);

    // Start observing
    counters.forEach((el: any) => this.observer.observe(el));
    skillBars.forEach((el: any) => this.observer.observe(el));
  }

  private animateCounter(element: HTMLElement) {
    const target = +element.getAttribute('data-target')!;
    const duration = 2000; // 2 seconds
    const steps = 50;
    const increment = target / steps;
    const stepTime = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.innerText = target.toString(); // Ensure clean integer at end
        clearInterval(timer);
      } else {
        element.innerText = Math.floor(current).toString();
      }
    }, stepTime);
  }
}
