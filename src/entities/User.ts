export class User {
  id: number;

  googleId: string;

  name: string;
  
  email: string;

  createdAt: string;

  constructor(id: number, googleId: string, name: string, email: string, createdAt: string) {
    this.id = id;
    this.googleId = googleId;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }
}