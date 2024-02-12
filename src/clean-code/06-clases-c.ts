(() => {

  // Aplicando el pricipio de responsabilidad unica
  // Priorizar la composición frente a la herencia!


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
    email: string;
    role: string;
  }

  class User {
    public email      : string;
    public lastAccess : Date;
    public role       : string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials(): boolean {
      return true;
    }
  }

  interface SettingsProps {
    lastOpenFolder   : string,
    workingDirectory : string,
  }

  class Settings {
    public lastOpenFolder: string;
    public workingDirectory: string;

      constructor( { lastOpenFolder, workingDirectory }: SettingsProps ){
          this.lastOpenFolder = lastOpenFolder;
          this.workingDirectory = workingDirectory;
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

  class UserSettings {

    public person   : Person;
    public user     : User;
    public settings : Settings;

    constructor( {
      name, gender, birthday, email, role, workingDirectory, lastOpenFolder 
    }: UserSettingProps ){
      this.person = new Person({name, gender, birthday});
      this.user = new User({email, role});
      this.settings = new Settings({workingDirectory, lastOpenFolder});
    }

  }

  const userSetting = new UserSettings({
          birthday: new Date('1999-03-19'),
          email: 'rasec.camacho19@gmail.com',
          gender: 'M',
          lastOpenFolder: '/home',
          name: 'Rasec',
          role: 'Admin',
          workingDirectory: '/usr/home',
      });

  const { user } = userSetting

  console.log({ userSetting, checkCredentials: user.checkCredentials() });
  
})();