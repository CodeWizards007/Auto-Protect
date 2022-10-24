import {Voiture} from "./Voiture";


export class Assuree
{

  id!:number;
   nom!:string;
   prenom!:string;
   username!:string;
  email!:string;
   password!:string;
   cin!:number;
   telephone!:number;
  adresse!:string;
  dateNaissance!:Date;
  nbreAccident !:number;
  role!:Array<string>;
   voitures !:Array<Voiture>;
   roles!:Array<string>;
}
