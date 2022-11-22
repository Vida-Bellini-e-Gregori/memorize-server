export class User {
  id: number;

  name: string;
  
  email: string;

  createdAt: string;

  constructor(id: number, name: string, email: string, createdAt: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }
}