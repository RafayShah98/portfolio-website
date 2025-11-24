import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  activeFilter: string = 'all';

  projects = [
    {
      id: 1,
      category: 'python',
      title: 'Multilingual Voice Assistant',
      description:
        'Developed a Python-based voice assistant capable of real-time language detection and translation with OpenAI integration.',
      image: 'assets/images/voice-assistant.jpg',
      technologies: ['Python', 'OpenAI', 'NLP'],
    },
    {
      id: 2,
      category: 'salesforce',
      title: 'Salesforce Nonprofit Solution',
      description:
        'Custom Salesforce and Angular solution for nonprofit organizations to enhance efficiency and user experience.',
      image: 'assets/images/sf-project.jpg',
      technologies: ['Salesforce', 'Angular', 'Apex'],
    },
    // Add all your projects here with proper category assignments
  ];

  filterProjects(category: string) {
    this.activeFilter = category;
  }

  getButtonClass(category: string): string {
    const baseClasses = 'px-4 py-2 rounded-full transition-all duration-300 font-medium ';
    if (this.activeFilter === category) {
      return baseClasses + 'bg-blue-600 text-white shadow-md';
    } else {
      return (
        baseClasses +
        'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
      );
    }
  }

  hasNoProjects(): boolean {
    if (this.activeFilter === 'all') return false;

    const visibleProjects = this.projects.filter(
      (project) => project.category === this.activeFilter
    );
    return visibleProjects.length === 0;
  }
}
