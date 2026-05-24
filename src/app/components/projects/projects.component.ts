import { Component } from '@angular/core';
@Component({ 
    selector: 'app-projects', 
    templateUrl: './projects.component.html', 
    styleUrls: ['./projects.component.scss'] 
})

export class ProjectsComponent {
    projects = [
    {
        title: 'Food For All',
        desc: 'A web platform that connects restaurants and food donors with needy people to reduce food waste and ensure safe food distribution.',
        img: 'assets/images/pic.png'
    },
    {
        title: 'Travel Planner AI',
        desc: 'An AI-powered travel planning application that generates personalized itineraries, budget planning, and seasonal travel recommendations.',
        img: 'assets/images/vectra1.png'
    },
    {
        title: 'Zscaler Automation',
        desc: 'Enterprise automation solution for user provisioning and deprovisioning between Microsoft Entra ID and Zscaler with approval workflows and ServiceNow integration.',
        img: 'assets/images/project4.jpg'
    },
    {
        title: 'AI Chatbot with RAG',
        desc: 'An intelligent AI chatbot integrated with Retrieval-Augmented Generation (RAG) for contextual conversations and accurate information retrieval.',
        img: 'assets/images/project2.jpg'
    },
    {
        title: 'Zscaler Location Management',
        desc: 'Integrated external MCP Zscaler servers on Zscaler Location Management automate managing location-based configurations and IP address operations. Implemented human-in-the-loop approval before processing requests.',
        img: 'assets/images/project4.jpg'
    },
    {
        title: 'Student Faculty Interaction System',
        desc: 'A communication and collaboration platform that enables seamless interaction between students and faculty members.',
        img: 'assets/images/project3.png'
    }
];
}