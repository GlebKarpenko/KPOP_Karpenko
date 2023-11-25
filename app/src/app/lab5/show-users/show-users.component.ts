import { Component, HostListener} from '@angular/core';
import { DataService } from '../data.service';

interface User {
  id: {
    name: "SID",
    value: "621692693"
  },
  name: {
    title: string,
    first: string,
    last: string
  },
  email: string,
  login: {
    username: string,
    sha256: string
  },
  phone: string
}

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrl: './show-users.component.scss'
})
export class ShowUsersComponent {
  filteredUsers: User[] = [];
  private selectedUsers: User[] = [];
  users: any;
  popupData: any;

  popupVisible: boolean = false;
  offClickStatus: boolean = false;
  allChecked: boolean = false;
  selectionDisplayStatus: boolean = false;

  constructor(private dataService: DataService){ }

  ngOnInit(): void{
    this.loadData();
  }

  getSelectedUsers(): User[] {
    return this.selectedUsers;
  }

  private loadData(): void{
    this.dataService.getData().subscribe(
      (data) => {
        this.users = Object.values(data)[0];
        this.filteredUsers = this.filterUsers(this.users);
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }

  private filterUsers(userData: any): User[]{
    let users: User[] = [];

    for (let data of userData){
      let user: User = {
        id: {
          name: data.id.name,
          value: data.id.value
        },
        name: {
          title: data.name.title,
          first: data.name.first,
          last: data.name.last
        },

        email: data.email,

        login: {
          username: data.login.username,
          sha256: data.login.sha256
        },

        phone: data.phone
      };
      users.push(user);
    }
    return users;
  }

  showHash(hash: string){
    alert(hash);
  }

  showPopup(filteredUser: User){
    this.popupVisible = true;
    setTimeout(() => {
      this.offClickStatus = true;
    }, 10);

    this.popupData = (this.users.find((user: User) =>
      user.id.value === filteredUser.id.value));
  }

  closePopup(){
    this.popupVisible = false;
    this.offClickStatus = false;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event): void {
    if (!this.isClickInsidePopup(event) && this.offClickStatus) {
      this.closePopup();
    }
  }

  private isClickInsidePopup(event: Event): boolean {
    const element = event.target as HTMLElement;
    return !!element.closest('#pop-up');
  }

  togglecheckAll(){
    this.allChecked = !this.allChecked;
    if (this.allChecked){
      this.selectedUsers = this.filteredUsers;
    }
    else{
      this.selectedUsers = [];
    }
    this.setSelectionStatus();
  }

  handleSelection(event: any, user: User){
    if (event.target.checked) {
    this.selectedUsers.push(user);
    }
    else {
      this.selectedUsers = this.selectedUsers.filter((selectedUser) =>
        selectedUser.id.value !== user.id.value);
    }
    this.setSelectionStatus();
  }

  private setSelectionStatus(){
    if (this.selectedUsers.length > 0) {
      this.selectionDisplayStatus = true
    }
    else{
      this.selectionDisplayStatus = false;
    }
  }
}
