export interface User {
    id?:             string;
    _id?:            string;
    // accountStatus?:                AccountStatus
    accountStatus?:                "ACTIVATED" | "BLOCKED" | "DEACTIVATED" | "DELETED" | "PENDING";
    address?:                      any;   // Location
    avatar?:                       string;
    bio?:                          string;
    biography?:                    string;
    birthdate?:                    Date;
    // comments?: [Comment]
    comments?:                     Array<any>;
    contactEmail?:                 string;
    contactJobTitle?:              string;
    contactName?:                  string;
    contactPhone?:                 string;
    coverImage?:                   string;
    createdAt?:                    Date;
    createdBy?:                    string;
    deleted?:                      boolean;
    deletedAt?:                    Date;
    deletedBy?:                    string;
    // educations?: [Education]
    educations?:                   Array<any>;
    email?:                        string;
    emailVerified?:                boolean;    
    // employee?: Employee
    employee?:                     any;
    ethnicity?:                    string;
    // experiences?: [Experience]
    experiences?:                  Array<any>;
    facebookUrl?:                  string;
    // fileItems?: [FileItem]
    fileItems?:                    Array<any>;
    gender?:                       "MALE" | "FEMALE" | "OTHER";
    givenNames?:                   string;
    height?:                       number;
    industry?:                     string;
    instagramUrl?:                 string;
    interests?:                    string;
    // jobApplications?: [JobApplication]
    jobApplications?:              Array<any>;
    jobTitle?:                     string;
    // jobs?: [Job]
    jobs?:                         Array<any>;
    languages?:                    string;
    linkedinUrl?:                  string;
    organization?:                 string;
    password?:                     string;
    // passwordResets?: [PasswordReset]
    passwordResets?:               Array<any>;
    phone?:                        string;
    phoneVerified?:                boolean;    
    // posts?: [Post]
    posts?:                        Array<any>;
    primaryStudent?:               any;
    // primaryStudent?: PrimaryStudent
    profession?:                   string;
    profileVerified?:              boolean;    
    provider?:                     string;
    providerId?:                   string;
    religion?:                     string;
    restorePasswordCode?:          string;
    roles?:                        string;
    salt?:                         string;
    secondaryStudent?:             any;
    // secondaryStudent?: SecondaryStudent
    siteUrl?:                      string;
    skills?:                       Array<string>;
    sponsorAsDependent?:           any;
    sponsorAsUser?:                any;
    // sponsorAsDependent?: Sponsor
    // sponsorAsUser?: Sponsor;
    surname?:                      string;
    title?:                        string;
    twitterUrl?:                   string;
    type?:                         "APPLICANT" | "CANDIDATE" | "EMPLOYEE" | "SPONSOR" | "STUDENT";
    unionStatus?:                  string;
    // universityStudent?: UniversityStudent
    universityStudent?:            any;
    updatedAt?:                    Date;
    updatedBy?:                    string;
    visibleToInstitution?:         boolean;    
    visibleToPublic?:              boolean;    
    websiteUrl?:                   string;
    // weight?: Float
    weight?:                       any;
    youtubeUrl?:                   string;
}

export class User {
    id?:             string;
    _id?:            string;
    // accountStatus?:                AccountStatus
    accountStatus?:                "ACTIVATED" | "BLOCKED" | "DEACTIVATED" | "DELETED" | "PENDING";
    address?:                      any;   // Location
    avatar?:                       string;
    bio?:                          string;
    biography?:                    string;
    birthdate?:                    Date;
    // comments?: [Comment]
    comments?:                     Array<any>;
    contactEmail?:                 string;
    contactJobTitle?:              string;
    contactName?:                  string;
    contactPhone?:                 string;
    coverImage?:                   string;
    createdAt?:                    Date;
    createdBy?:                    string;
    deleted?:                      boolean;
    deletedAt?:                    Date;
    deletedBy?:                    string;
    // educations?: [Education]
    educations?:                   Array<any>;
    email?:                        string;
    emailVerified?:                boolean;    
    // employee?: Employee
    employee?:                     any;
    ethnicity?:                    string;
    // experiences?: [Experience]
    experiences?:                  Array<any>;
    facebookUrl?:                  string;
    // fileItems?: [FileItem]
    fileItems?:                    Array<any>;
    gender?:                       "MALE" | "FEMALE" | "OTHER";
    givenNames?:                   string;
    height?:                       number;
    industry?:                     string;
    instagramUrl?:                 string;
    interests?:                    string;
    // jobApplications?: [JobApplication]
    jobApplications?:              Array<any>;
    jobTitle?:                     string;
    // jobs?: [Job]
    jobs?:                         Array<any>;
    languages?:                    string;
    linkedinUrl?:                  string;
    organization?:                 string;
    password?:                     string;
    // passwordResets?: [PasswordReset]
    passwordResets?:               Array<any>;
    phone?:                        string;
    phoneVerified?:                boolean;    
    // posts?: [Post]
    posts?:                        Array<any>;
    primaryStudent?:               any;
    // primaryStudent?: PrimaryStudent
    profession?:                   string;
    profileVerified?:              boolean;    
    provider?:                     string;
    providerId?:                   string;
    religion?:                     string;
    restorePasswordCode?:          string;
    roles?:                        string;
    salt?:                         string;
    secondaryStudent?:             any;
    // secondaryStudent?: SecondaryStudent
    siteUrl?:                      string;
    skills?:                       Array<string>;
    sponsorAsDependent?:           any;
    sponsorAsUser?:                any;
    // sponsorAsDependent?: Sponsor
    // sponsorAsUser?: Sponsor;
    surname?:                      string;
    title?:                        string;
    twitterUrl?:                   string;
    type?:                         "APPLICANT" | "CANDIDATE" | "EMPLOYEE" | "SPONSOR" | "STUDENT";
    unionStatus?:                  string;
    // universityStudent?: UniversityStudent
    universityStudent?:            any;
    updatedAt?:                    Date;
    updatedBy?:                    string;
    visibleToInstitution?:         boolean;    
    visibleToPublic?:              boolean;    
    websiteUrl?:                   string;
    // weight?: Float
    weight?:                       any;
    youtubeUrl?:                   string;

    constructor(fields: any){
        for(let f of fields){
            Object.assign(this, fields[f]);
        }
    }
}