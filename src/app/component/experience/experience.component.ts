import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  activeFilter: string = 'all';

  filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'salesforce', label: 'Salesforce' },
    { id: 'java', label: 'Java & Spring' },
    { id: 'aws', label: 'AWS Cloud' },
    { id: 'data', label: 'Data & BI' },
  ];

  projects = [
    {
      id: 1,
      category: 'java',
      title: 'Serverless Microservices',
      description:
        'A scalable backend architecture handling high-volume requests using Java Spring Boot deployed on AWS Lambda with API Gateway integration.',
      image: 'assets/images/serverless_microservices.png', // Ensure you have these images or placeholders
      technologies: ['Java', 'Spring Boot', 'AWS Lambda', 'Docker'],
    },
    {
      id: 2,
      category: 'salesforce',
      title: 'Nonprofit CRM Solution',
      description:
        'Custom Salesforce implementation for donor management, featuring complex Apex triggers, LWC interfaces, and automated email workflows.',
      image: 'assets/images/tf.jpg',
      technologies: ['Salesforce', 'Apex', 'LWC', 'SOQL'],
    },
    {
      id: 3,
      category: 'aws',
      title: 'Cloud Data Pipeline',
      description:
        'Automated ETL pipeline using AWS Glue and S3 to process terabytes of operational data for real-time analytics.',
      image: 'assets/images/cloud_data.png',
      technologies: ['AWS Glue', 'S3', 'Python', 'Athena'],
    },
    {
      id: 4,
      category: 'data',
      title: 'Healthcare Analytics Dashboard',
      description:
        'Interactive Power BI dashboard for patient data visualization, integrating directly with SQL Server healthcare databases.',
      image: 'assets/images/health-project.jpg',
      technologies: ['Power BI', 'SQL Server', 'DAX'],
    },
    {
      id: 5,
      category: 'java',
      title: 'E-Commerce REST API',
      description:
        'Secure RESTful API for a multi-vendor e-commerce platform built with Spring Security and Hibernate.',
      image: 'assets/images/ecom-project.jpg',
      technologies: ['Java', 'Spring Security', 'PostgreSQL', 'Redis'],
    },
    {
      id: 6,
      category: 'salesforce',
      title: 'Salesforce-Jira Integration',
      description:
        'Middleware solution syncing Salesforce Cases with Jira tickets using REST APIs to streamline support and dev team collaboration.',
      image: 'assets/images/voice-assistant.jpg',
      technologies: ['Salesforce API', 'Node.js', 'Jira API'],
    },
  ];

  filterProjects(category: string) {
    this.activeFilter = category;
  }

  getVisibleProjects() {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter((project) => project.category === this.activeFilter);
  }
}
