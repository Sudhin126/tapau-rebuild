import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../services/packages.service';


@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})
export class PackagesComponent implements OnInit {
  files: File[] = [];
  
  packk=[];

  constructor(private packagesService: PackagesService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    debugger;
    this.packagesService.getList().subscribe((data)=>{
      debugger;
      this.packk = data["data"];
      // this.searches.sort((a,b) => a.coName.localeCompare(b.coName));
    });
}
deleteList(id:string) {
  this.packagesService.deleteList(id)
    .subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error));
}


	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

}
