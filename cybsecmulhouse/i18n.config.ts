export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'en',
    messages: {
      en: {
        welcome: 'Welcome',
        subtitle_m: 'Come and capture the flag in a relaxed event !',
        register_m: 'Register',
        name_m:'Name',
        forename_m:'Forename',
        uni_m:'University or school you represent',
        challenge_m:'How much is 10!>>7 in hexadecimal representation ?',
        contribute_m:'Contribute',
        values_m:'Code Of Conduct',
        sponsors_m:'Sponsors',
        day_m:'days',
        hour_m:'hours',
        min_m:'minutes',
        sec_m:'seconds',

      },
      fr: {
        welcome: 'Bienvenue',
        subtitle_m: 'Un capture the flag dans une ambiance relaxé !',
        register_m: 'S\'enregistrer',
        name_m:'Nom',
        forename_m:'Prénom',
         uni_m:'Université',
        challenge_m:'Combien vaut 10!>>7 en écriture hexadécimale ?',
        contribute_m:'Contribuer',
        values_m:'Code de Conduite',
        sponsors_m:'Sponsors',
        day_m:'jours',
        hour_m:'heures',
        min_m:'minutes',
        sec_m:'secondes',

      }
    }
  }))