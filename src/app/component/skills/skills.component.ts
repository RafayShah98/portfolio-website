// skills.component.ts
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
  skills = [
    {
      title: 'Programming & Web Development',
      icon: 'fas fa-code',
      items: ['Angular', 'NodeJs', 'Tailwind', 'HTML', 'CSS/SCSS', 'Bootstrap', 'Python'],
    },
    {
      title: 'Database & Query Management',
      icon: 'fas fa-database',
      items: ['SQL', 'MSSQL', 'Database Designing', 'Query Optimization'],
    },
    {
      title: 'Data Analysis & Visualization',
      icon: 'fas fa-chart-line',
      items: [
        'Power BI',
        'Data Visualization',
        'Data Cleaning',
        'Machine Learning',
        'Pandas',
        'NumPy',
        'Matplotlib',
      ],
    },
    {
      title: 'Frameworks',
      icon: 'fas fa-layer-group',
      items: ['Django', 'Flask', 'FastAPI'],
    },
    {
      title: 'Business Applications',
      icon: 'fas fa-briefcase',
      items: ['Salesforce (CRM)', 'Power Apps'],
    },
    {
      title: 'Tools & Technologies',
      icon: 'fas fa-tools',
      items: ['Git', 'Docker', 'REST APIs', 'Jupyter Notebooks'],
    },
  ];

  certifications = [
    {
      title: 'Data Analysis',
      provider: 'Testdome',
      date: 'July 2025',
      logo: 'assets/images/primary.svg-9xmsfn8i.svg',
      certificateImage: 'assets/images/Screenshot_9.jpg',
      desc: 'TestDome is an online skills tests platform that uses work-sample testing methodology to screen knowledge workers.',
    },
    {
      title: 'Java Spring Framework 6 with Spring Boot 3',
      provider: 'Udemy',
      date: 'November 2024',
      logo: 'assets/images/Udemy.png',
      certificateImage: 'assets/images/Java Spring Framework 6 with Spring Boot 3.jpg',
      desc: 'Comprehensive training on Java Spring Framework and Spring Boot for building enterprise applications.',
    },
    {
      title: 'Data Analyst & Data Science',
      provider: 'AIN GenX',
      date: 'October 2024',
      logo: 'assets/images/GenX.png',
      certificateImage: 'assets/images/Data Analytics.jpg',
      desc: 'Professional certification in data analysis, visualization, and data science techniques.',
    },
    {
      title: 'The Complete Python Bootcamp Course',
      provider: 'Udemy',
      date: 'July 2024',
      logo: 'assets/images/Udemy.png',
      certificateImage: 'assets/images/Udemy Python.jpg',
      certificateLink: 'https://www.udemy.com/certificate/example-python',
      desc: 'Master Python programming from basics to advanced concepts with practical projects.',
    },
    {
      title: 'Working with Microsoft SQL Server using ChatGPT',
      provider: 'Udemy',
      date: 'July 2024',
      logo: 'assets/images/Udemy.png',
      certificateImage: 'assets/images/Udemy SQL.jpg',
      desc: 'Learn to use ChatGPT for SQL Server queries, optimization, and database management.',
    },
    {
      title: 'Certified Power Apps Developer',
      provider: 'Udemy',
      date: 'July 2024',
      logo: 'assets/images/Udemy.png',
      certificateImage: 'assets/images/Udemy PowerApps.jpg',
      desc: 'Professional certification in developing custom business applications using Microsoft Power Apps.',
    },
  ];

  education = [
    {
      period: '2025 - Ongoing',
      place: 'Karachi, Pakistan',
      degree: "Master's Of Business Administration",
      institute: 'Institute Of Business Management',
    },
    {
      period: '2018 - 2023',
      place: 'Karachi, Pakistan',
      degree: 'Doctor Of Pharmacy',
      institute: 'Hamdard University',
    },
  ];

  selectedCert: any = null;
  isModalOpen = false;

  viewCertificationDetails(cert: any) {
    this.selectedCert = cert;
    this.isModalOpen = true;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedCert = null;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  openCertificateLink() {
    if (this.selectedCert?.certificateLink) {
      window.open(this.selectedCert.certificateLink, '_blank');
    }
  }
}
