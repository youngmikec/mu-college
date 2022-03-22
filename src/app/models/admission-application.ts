import { AdmissionStatus, AdmissionStep } from "./enums";
import { 
    FileType,
    Institution,
    PrimaryStudent, 
    SecondaryStudent,
    UniversityStudent,
    User,
} from "./index";

export interface AdmissionApplication {
    id?:                           string;
    _id?:                          string;
    academicYear?:                 number;
    code?:                         string;
    createdAt?:                    Date;
    createdBy?:                    string;
    deleted?:                      boolean;
    deletedAt?:                    Date;
    deletedBy?:                    string;
    fileTypes?:                    Array<FileType>;
    givenNames?:                   string;
    institution?:                  Institution;
    level?:                        number;
    middleName?:                   string;
    primaryStudent?:               PrimaryStudent;
    secondaryStudent?:             SecondaryStudent;
    status?:                       AdmissionStatus;
    step?:                         AdmissionStep;
    surname?:                      string;
    universityStudent?:            UniversityStudent
    updatedAt?:                    Date;
    updatedBy?:                    string;
    user?:                         User;
}


export class AdmissionApplication {
    id?:                           string;
    _id?:                          string;
    academicYear?:                 number;
    code?:                         string;
    createdAt?:                    Date;
    createdBy?:                    string;
    deleted?:                      boolean;
    deletedAt?:                    Date;
    deletedBy?:                    string;
    fileTypes?:                    Array<FileType>;
    givenNames?:                   string;
    institution?:                  Institution;
    level?:                        number;
    middleName?:                   string;
    primaryStudent?:               PrimaryStudent;
    secondaryStudent?:             SecondaryStudent;
    status?:                       AdmissionStatus;
    step?:                         AdmissionStep;
    surname?:                      string;
    universityStudent?:            UniversityStudent
    updatedAt?:                    Date;
    updatedBy?:                    string;
    user?:                         User;

    constructor(fields: any){
        for(let f of fields){
            Object.assign(this, fields[f]);
        }
    }
}