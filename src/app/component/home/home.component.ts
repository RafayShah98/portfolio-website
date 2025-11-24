import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.animateOnScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.animateOnScroll();
  }

  private animateOnScroll() {
    const counters = this.el.nativeElement.querySelectorAll('.counter');
    const skills = this.el.nativeElement.querySelectorAll('.skill-bar');

    counters.forEach((counter: HTMLElement) => {
      const target = +counter.getAttribute('data-target')!;
      if (this.isInViewport(counter) && !counter.classList.contains('animated')) {
        this.animateCounter(counter, target);
        counter.classList.add('animated');
      }
    });

    skills.forEach((bar: HTMLElement) => {
      const width = bar.getAttribute('data-width');
      if (this.isInViewport(bar) && !bar.classList.contains('animated')) {
        bar.style.width = width!;
        bar.classList.add('animated');
      }
    });
  }

  private animateCounter(element: HTMLElement, target: number) {
    let current = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      element.innerText = Math.floor(current).toString();
    }, 20);
  }

  private isInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }
}
