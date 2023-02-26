import Child from "./Child";

export default class User {

    constructor(public Tz: string,
        public FirstName: string,
        public LastName: string,
        public BirthDate: Date,
        public eGender:number,
        public eHmo: number,
        public children:Child[]){

    }
}