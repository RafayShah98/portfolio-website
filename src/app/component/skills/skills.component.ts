import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  // Reorganized to prioritize "Java/AWS/Salesforce"
  skills = [
    {
      title: 'Cloud & Salesforce',
      icon: 'fab fa-salesforce', // Requires FontAwesome Brand icons
      items: [
        'Salesforce Admin & Dev',
        'Apex & LWC',
        'AWS Lambda',
        'EC2 & S3',
        'Serverless Architecture',
        'Power Apps',
      ],
    },
    {
      title: 'Backend Engineering',
      icon: 'fas fa-server',
      items: [
        'Java Spring Boot',
        'Node.js & Express',
        'Python (Django/Flask)',
        'RESTful APIs',
        'Microservices',
        'Hibernate / JPA',
      ],
    },
    {
      title: 'Data & Analytics',
      icon: 'fas fa-chart-pie',
      items: [
        'SQL & MSSQL',
        'Power BI',
        'Pandas & NumPy',
        'Data Visualization',
        'Query Optimization',
        'ETL Pipelines',
      ],
    },
    {
      title: 'Frontend Development',
      icon: 'fas fa-code',
      items: [
        'Angular (Latest)',
        'TypeScript',
        'Tailwind CSS',
        'Bootstrap',
        'HTML5 / SCSS',
        'RxJS',
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: 'fas fa-tools',
      items: [
        'Git & GitHub',
        'Docker',
        'CI/CD Basics',
        'Jupyter Notebooks',
        'Postman',
        'Agile/Scrum',
      ],
    },
    {
      title: 'Project Management',
      icon: 'fas fa-tasks',
      items: [
        'Stakeholder Management',
        'Sprint Planning',
        'Requirements Analysis',
        'Team Leadership',
        'Jira / Trello',
      ],
    },
  ];

  certifications = [
    {
      title: 'Java Spring Framework 6 with Spring Boot 3',
      provider: 'Udemy',
      date: 'November 2024',
      logo: 'assets/images/Udemy.png',
      certificateImage: 'assets/images/Java Spring Framework 6 with Spring Boot 3.jpg',
      desc: 'Mastery of the Spring ecosystem, including dependency injection, Spring MVC, REST APIs, and database integration using Hibernate.',
    },
    {
      title: 'Data Analyst & Data Science',
      provider: 'AIN GenX',
      date: 'October 2024',
      logo: 'assets/images/GenX.png',
      certificateImage: 'assets/images/Data Analytics.jpg',
      desc: 'Professional training covering the complete data lifecycle: collection, cleaning, exploratory analysis, and visualization using Python and Power BI.',
    },
    {
      title: 'Certified Power Apps Developer',
      provider: 'Udemy',
      date: 'July 2024',
      logo: 'assets/images/Udemy.png',
      certificateImage: 'assets/images/Udemy PowerApps.jpg',
      desc: 'Deep dive into low-code development, building custom business apps, and automating workflows with Microsoft Power Platform.',
    },
    {
      title: 'The Complete Python Bootcamp',
      provider: 'Udemy',
      date: 'July 2024',
      logo: 'assets/images/Udemy.png',
      certificateImage: 'assets/images/Udemy Python.jpg',
      certificateLink: 'https://www.udemy.com/', // Update actual link if available
      desc: 'Comprehensive Python course covering OOP, decorators, generators, and working with external libraries and files.',
    },
    {
      title: 'SQL Server Optimization',
      provider: 'Udemy',
      date: 'July 2024',
      logo: 'assets/images/Udemy.png',
      certificateImage: 'assets/images/Udemy SQL.jpg',
      desc: 'Advanced techniques for writing efficient SQL queries, indexing strategies, and database performance tuning.',
    },
    {
      title: 'Data Analysis Validation',
      provider: 'Testdome',
      date: 'July 2025',
      logo: 'assets/images/primary.svg-9xmsfn8i.svg',
      certificateImage: 'assets/images/Screenshot_9.jpg',
      desc: 'Verified assessment of practical data analysis skills, focusing on problem-solving and interpretation of complex datasets.',
    },
  ];

  education = [
    {
      period: '2025 - Present',
      place: 'Karachi, Pakistan',
      degree: "Master's of Business Administration (MBA)",
      institute: 'Institute of Business Management (IoBM)',
    },
    {
      period: '2018 - 2023',
      place: 'Karachi, Pakistan',
      degree: 'Doctor of Pharmacy (Pharm.D)',
      institute: 'Hamdard University',
    },
  ];

  selectedCert: any = null;
  isModalOpen = false;

  viewCertificationDetails(cert: any) {
    this.selectedCert = cert;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    setTimeout(() => {
      this.selectedCert = null;
    }, 300); // Wait for fade out
    document.body.style.overflow = 'auto';
  }

  openCertificateLink() {
    if (this.selectedCert?.certificateLink) {
      window.open(this.selectedCert.certificateLink, '_blank');
    }
  }
}
