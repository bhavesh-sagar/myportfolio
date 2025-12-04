import { Component } from '@angular/core';
@Component({ 
    selector: 'app-projects', 
    templateUrl: './projects.component.html', 
    styleUrls: ['./projects.component.scss'] 
})

export class ProjectsComponent {
    projects = 
    [
        { title: 'Food For All', desc: 'Platform to share leftover food safely.', img: 'assets/images/pic.png' },
        { title: 'Chat Bot', desc: 'User Interaction with AI Chatbot with RAG.', img: 'assets/images/project2.jpg' },
        { title: 'Student Faculty Interaction', desc: 'Interaction between faculties and students.', img: 'assets/images/project3.png' }
    ];
}