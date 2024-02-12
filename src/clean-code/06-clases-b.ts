(() => {
  // No aplicando el pricipio de responsabilidad unica

  type Gender = "M" | "F";

  interface PersonProps {
    birthday: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthday: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthday }: PersonProps) {
      this.birthday = birthday;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps {
    birthday: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role, gender, name, birthday }: UserProps) {
      super({gender, name, birthday});

      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  interface UserSettingProps {
    birthday         : Date,
    email            : string,
    gender           : Gender,
    lastOpenFolder   : string,
    name             : string,
    role             : string,
    workingDirectory : string,
  }

  class UserSetting extends User {
    public lastOpenFolder: string;
    public workingDirectory: string;

      constructor( { birthday, email, gender, lastOpenFolder, name, role, workingDirectory }: UserSettingProps ){
          super({email, role, gender, name, birthday});
          this.lastOpenFolder = lastOpenFolder;
          this.workingDirectory = workingDirectory;
      }
  }

  const userSetting = new UserSetting({
          birthday: new Date('1999-03-19'),
          email: 'rasec.camacho19@gmail.com',
          gender: 'M',
          lastOpenFolder: '/home',
          name: 'Rasec',
          role: 'Admin',
          workingDirectory: '/usr/home',
      });

  console.log({ userSetting  });
})();