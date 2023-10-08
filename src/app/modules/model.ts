export interface ipassenger{
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: number|null;
    children: null |ichild[];
}

export interface ichild{
    age:number,
    name:string
}