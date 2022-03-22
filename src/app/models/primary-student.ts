import { AdmissionApplication, User } from './index';

export interface PrimaryStudent {
    id?:                    string;
    _id?:                   string;
    admissionApplication?:  AdmissionApplication;
    code?:                  string;
    createdAt?:             Date;
    createdBy?:             string;
    deleted?:               boolean;
    deletedAt?:             Date;
    deletedBy?:             string;
    level?:                 number;
    status?:                string;
    updatedAt?:             Date;
    updatedBy?:             string;
    user?:                  User;
}

export class PrimaryStudent {
    id?:                    string;
    _id?:                   string;
    admissionApplication?:  AdmissionApplication;
    code?:                  string;
    createdAt?:             Date;
    createdBy?:             string;
    deleted?:               boolean;
    deletedAt?:             Date;
    deletedBy?:             string;
    level?:                 number;
    status?:                string;
    updatedAt?:             Date;
    updatedBy?:             string;
    user?:                  User;

    constructor(fields: any){
        for(let f of fields){
            Object.assign(this, fields[f]);
        }
    }
}