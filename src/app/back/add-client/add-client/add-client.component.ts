import { Component, OnInit } from '@angular/core';
import {Expert} from "../../../common/Expert";
import {Role} from "../../../common/Role";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ExpertService} from "../../../services/expert.service";
import {Assuree} from "../../../common/Assuree";
import {Voiture} from "../../../common/Voiture";
import {ClientService} from "../../../services/client.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  assuree: Assuree= new Assuree();
  voiture : Voiture = new Voiture();
  listVoiture : Voiture[]=[];
  show : boolean = true;
  roles : string[]=Object.keys(Role).filter((item) => {
    return isNaN(Number(item));});

  addassuree=this.fb.group({
    username: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(40)]],
    nom: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
    cin: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
    prenom: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
    adresse: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]],
    password: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(50)]],
    telephone: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(12),Validators.pattern('[0-9]+')]],
    email: ['',[Validators.required,Validators.email]],

    nbreAccident: ['',[Validators.required]],
    dateNaissance: ['',[Validators.required]],

    rol: ['',[Validators.required]]

  })


  constructor(private route : Router,private fb: FormBuilder,private clienService:ClientService) { }

  ngOnInit(): void {



  }

  addExpert(assuree1:Assuree){
    console.log("ddddd");
    assuree1.voitures=this.listVoiture;
    let roles: string[]=[];
    roles.push(this.addassuree.controls['rol'].value!)
    assuree1.username=this.addassuree.controls['username'].value!;//f
    assuree1.nom=this.addassuree.controls['nom'].value!;//f
    assuree1.prenom=this.addassuree.controls['prenom'].value!;//f
    assuree1.telephone=Number(this.addassuree.controls['telephone'].value!);//f
    assuree1.email=this.addassuree.controls['email'].value!;//f
    assuree1.password=this.addassuree.controls['password'].value!;//f
    assuree1.cin=Number(this.addassuree.controls['cin'].value!);
    assuree1.adresse=this.addassuree.controls['adresse'].value!;
    assuree1.nbreAccident=Number(this.addassuree.controls['nbreAccident'].value!);
    assuree1.dateNaissance=new Date(this.addassuree.controls['dateNaissance'].value!) ;
    assuree1.role=roles;

    this.clienService.addAssuree(assuree1).subscribe(
      (data)=>{console.log(data)},
      (error)=>{/*this.messageService.add({severity:'error', summary: 'Error', detail: error.error.message});*/
        setTimeout(()=>{
          if(error.status==401){
            this.route.navigate(['login']);
          };},1000)},
      ()=>{/*this.messageService.add({severity:'success', summary: 'Success', detail: 'Ajouter avec succée'}
      );*/
      }
    )
  }

  ajouterVoiture(voiture:Voiture) {
    this.listVoiture.push(voiture);

    this.voiture=new Voiture();
    this.show=false;
    setTimeout(()=>{
      this.voiture=new Voiture();
      this.show=true;
    },1000)
  }

  get nom(){
    return this.addassuree.get('nom');
  }
  get photo(){
    return this.addassuree.get('photo');
  }
  get prenom(){
    return this.addassuree.get('prenom');
  }
  get email(){
    return this.addassuree.get('email');
  }
  get telephone(){
    return this.addassuree.get('telephone');
  }

}
