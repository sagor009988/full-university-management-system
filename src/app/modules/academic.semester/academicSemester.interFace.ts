export type TMonth = "january" | "february" | "march" | "april" | "may" | "june" | "july" | "august" | "september" | "october" | "november" | "december";

export type TName='Autumn'|'Summar'|'Fall';
export type TCode='01'|'02'|'03';

export type TacademicSemester={
    name:TName;
    code:TCode;
    year:Date,
    startMonth:TMonth,
    endMonth:TMonth,
 }