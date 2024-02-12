(() => {

    // No aplicando el pricipio de responsabilidad unica

    type Gender = 'M'|'F';

    class Person {
        constructor(
            public name: string, 
            public gender: Gender, 
            public birthdate: Date
        ){}
    }

    class User extends Person {

        public lastAccess: Date;

        constructor(
            public email: string, 
            public rol: string, 
            name: string,
            gender: Gender,
            birthday: Date,
        ){
            super( name, gender, birthday );
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    class UserSetting extends User {
        constructor(
            public workingDirectory : string,
            public lastOpenFolder   : string,
            email                   : string,
            rol                     : string,
            name                    : string,
            gender                  : Gender,
            birthday                : Date,
        ){
            super(email, rol, name, gender, birthday);
        }
    }


    const userSetting = new UserSetting(
            '/usr/home',
            '/home',
            'rasec.camacho19@gmail.com',
            'Admin',
            'Rasec',
            'M',
            new Date('1999-03-19')
        );

    console.log({ userSetting  });
    

    


})();