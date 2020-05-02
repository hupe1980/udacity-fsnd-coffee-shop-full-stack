export const environment = {
         production: false,
         apiServerUrl: 'http://localhost:5000', // the running FLASK api server url
         auth0: {
           url: 'dev-hqrad4fi.eu', // the auth0 domain prefix
           audience: 'coffee_shop', // the audience set for the auth0 app
           clientId: 'Lc3dIelR3skY7sdfcCqK5QiHtdybOa1p', // the client id generated for the auth0 app
           callbackURL: 'http://localhost:8100', // the base url of the running ionic application.
         },
       };
