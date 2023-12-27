export class PersonInfo {
    name: string;
    technologies: Technologies;
    contactInformation: ContactInformation;
    educationalInfo: EducationalInfo[];

    constructor(name: string, technologies: Technologies, contactInformation: ContactInformation, educationalInfo: EducationalInfo[]) {
        this.name = name;
        this.technologies = technologies;
        this.contactInformation = contactInformation;
        this.educationalInfo = educationalInfo;
    }
}

export interface Technologies {
    backend: string[],
    frontend: string[],
    versionControl: string[],
    gestionDeProyecto: string[]
}

export interface ContactInformation {
    location: string,
    linkedinProfile: string,
    gitProfile: string,
    mail: string
}

interface EducationalInfo {
    institutos: string
    tiempo: string
}

 export const technologies: Technologies = {
    backend: ['Java', 'Spring boot', 'Spring data JPA', 'Spring security', 'Swagger', 'JWT', 'Junit 5', 'Mockito', 'Docker', 'Database Management in Low-Resource Environments'],
    frontend: ['HTML - JSON - XML - YAML', 'CSS -> SCSS --> Bootstrap --> Angular Material', 'JavaScript --> Typscript --> Angular v12+'],
    versionControl: ['Git --> Commitlint y Husky'],
    gestionDeProyecto: ['Jira', 'Confluence']
};

export const contactInformation: ContactInformation = {
    location: 'Buenos Aires, Argentina',
    linkedinProfile: 'https://www.linkedin.com/in/brandon-maciel/',
    gitProfile: 'https://github.com/BrandonDev1996',
    mail: 'brandonmaciel96@gmail.com'
};

const educationalInfo: EducationalInfo[] = [
    {
        institutos: 'INSTITUTO SUPERIOR TECNOLÓGICO EMPRESARIAL ARGENTINO',
        tiempo: 'Technical Degree in Software Development [in progress: 2023/act]'
    },
    {
        institutos: 'Centro de e-Learning UTN FRBA',
        tiempo: 'Certificado de Angular [filled: nov/2021]'
    },
    {
        institutos: 'Platzi',
        tiempo: 'Certificado de Angular Componentes y Servicios [filled: 23/02/2022]'
    },
    {
        institutos: 'EducacionIT',
        tiempo: 'Certificado de Programacion Orientada a Objetos [filled: 30/11/2019]'
    }
];


export const person: PersonInfo = new PersonInfo('Brandon Maciel', technologies, contactInformation, educationalInfo);

