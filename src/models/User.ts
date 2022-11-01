class User {
  ID?: number;
  EMAIL: string;
  FIRST_NAME: string;
  LAST_NAME: string;
  AVATAR: string;
  CREATED_AT?: Date;
  UPDATED_AT?: Date;

  constructor(props: User) { Object.assign(this, props) }
}

export default User;