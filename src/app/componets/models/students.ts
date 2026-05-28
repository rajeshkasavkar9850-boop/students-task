



export interface Istudent{
    fname: string;
    lname: string;
    email: string;
    contact: number;
    stdId: string;
    isActive: boolean;
}

export interface IRes<T>{
    msg : string
    data : T
}

export interface IstdRes{
    msg : string
    data : Istudent
}

