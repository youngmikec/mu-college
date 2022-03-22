export enum AccountStatus {
    ACTIVATED = "ACTIVATED",
    BLOCKED = "BLOCKED",
    DEACTIVATED = "DEACTIVATED",
    DELETED = "DELETED",
    PENDING = "PENDING",
}

export enum AdmissionStatus {
    ADMITTED = "ADMITTED",
    PENDING = "PENDING",
    REJECTED = "REJECTED",
}

export enum AdmissionStep {
    ACCEPTANCE = "ACCEPTANCE",
    INTERVIEW = "INTERVIEW",
    PENDING = "PENDING",
    REJECTED = "REJECTED",
    SCREENING = "SCREENING",
    SUBMIT = "SUBMIT",
}

export enum FileType {
    AUDIO = "AUDIO",
    DOCUMENT = "DOCUMENT",
    GALLERY = "GALLERY",
    OTHER = "OTHER",
    PHOTO = "PHOTO",
    RESUME = "RESUME",
    VIDEO = "VIDEO",
}

export enum Gender {
    MALE = "MALE", 
    FEMALE = "FEMALE", 
    OTHER = "OTHER",
}

export enum Institution {
    DAYCARE = "DAYCARE",
    NURSERY = "NURSERY",
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    UNIVERSITY = "UNIVERSITY",
}

export enum UserType {
    APPLICANT = "APPLICANT",
    CANDIDATE = "CANDIDATE",
    EMPLOYEE = "EMPLOYEE",
    SPONSOR = "SPONSOR",
    STUDENT = "STUDENT",
}

export enum UserTypeSignup {
    APPLICANT = "APPLICANT",
    CANDIDATE = "CANDIDATE",
    SPONSOR = "SPONSOR",
}