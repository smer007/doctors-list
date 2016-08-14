'use strict';

/**
 * @ngdoc function
 * @name doctorsListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doctorsListApp
 */
angular.module('doctorsListApp')
  .controller('MainCtrl', function () {
    var mainVm = this;



	mainVm.sort = {
	      by: 'id',
	      reverse: false
	    };

    mainVm.doctorData = [
  {
    "name": "Dr. Leanne Graham",
    "email": "Sincere@april.biz",
    "specialty": "Dentistry",
    "review": 4,
    "experience": 12,
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874"
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
  },
  {
    "name": "Dr. Ervin Howell",
    "email": "Shanna@melissa.tv",
    "specialty": "Internal Medicine",
    "review": 3,
    "experience": 13,
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771"
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net"
  },
  {
    "name": "Dr. Clementine Bauch",
    "email": "Nathan@yesenia.net",
    "specialty": "Cardiology",
    "review": 2,
    "experience": 11,
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157"
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info"
  },
  {
    "name": "Dr. Patricia Lebsack",
    "email": "Julianne.OConner@kory.org",
    "specialty": "Cardiology",
    "review": 5,
    "experience": 16,
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257"
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz"
  },
  {
    "name": "Dr. Chelsey Dietrich",
    "email": "Lucio_Hettinger@annie.ca",
    "specialty": "Internal Medicine",
    "review": 4,
    "experience": 17,
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263"
    },
    "phone": "(254)954-1289",
    "website": "demarco.info"
  },
  {
    "name": "Dr. Dennis Schulist",
    "email": "Karley_Dach@jasper.info",
    "specialty": "Dentistry",
    "review": 3,
    "experience": 14,
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337"
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org"
  },
  {
    "name": "Dr. Kurtis Weissnat",
    "email": "Telly.Hoeger@billy.biz",
    "specialty": "Cardiology",
    "review": 1,
    "experience": 2,
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099"
    },
    "phone": "210.067.6132",
    "website": "elvis.io"
  },
  {
    "name": "Dr. Nicholas Runolfsdottir V",
    "email": "Sherwood@rosamond.me",
    "specialty": "Internal Medicine",
    "review": 5,
    "experience": 8,
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169"
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com"
  },
  {
    "name": "Dr. Glenna Reichert",
    "email": "Chaim_McDermott@dana.io",
    "specialty": "Cardiology",
    "review": 4,
    "experience": 9,
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109"
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com"
  },
  {
    "name": "Dr. Clementina DuBuque",
    "email": "Rey.Padberg@karina.biz",
    "specialty": "Internal Medicine",
    "review": 5,
    "experience": 5,
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261"
    },
    "phone": "024-648-3804",
    "website": "ambrose.net"
  },

  {
    "name": "Dr. Leane Grahm",
    "email": "Sincere@april.biz",
    "specialty": "Dentistry",
    "review": 4,
    "experience": 12,
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874"
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
  },
  {
    "name": "Dr. Ervn Howel",
    "email": "Shanna@melissa.tv",
    "specialty": "Internal Medicine",
    "review": 3,
    "experience": 13,
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771"
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net"
  },
  {
    "name": "Dr. Clement Bach",
    "email": "Nathan@yesenia.net",
    "specialty": "Internal Medicine",
    "review": 2,
    "experience": 11,
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157"
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info"
  },
  {
    "name": "Dr. Pat Leb",
    "email": "Julianne.OConner@kory.org",
    "specialty": "Dentistry",
    "review": 5,
    "experience": 16,
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257"
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz"
  },
  {
    "name": "Dr. Chels D",
    "email": "Lucio_Hettinger@annie.ca",
    "specialty": "Internal Medicine",
    "review": 4,
    "experience": 17,
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263"
    },
    "phone": "(254)954-1289",
    "website": "demarco.info"
  },
  {
    "name": "Dr. Dennis S",
    "email": "Karley_Dach@jasper.info",
    "specialty": "Dentistry",
    "review": 3,
    "experience": 14,
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337"
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org"
  },
  {
    "name": "Dr. Kurtis W",
    "email": "Telly.Hoeger@billy.biz",
    "specialty": "Cardiology",
    "review": 1,
    "experience": 2,
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099"
    },
    "phone": "210.067.6132",
    "website": "elvis.io"
  },
  {
    "name": "Dr. Nicholas Runolfsdottir V",
    "email": "Sherwood@rosamond.me",
    "specialty": "Internal Medicine",
    "review": 5,
    "experience": 8,
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169"
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com"
  },
  {
    "name": "Dr. Glenna R",
    "email": "Chaim_McDermott@dana.io",
    "specialty": "Dentistry",
    "review": 4,
    "experience": 9,
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109"
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com"
  },
  {
    "name": "Dr. Clementina D",
    "email": "Rey.Padberg@karina.biz",
    "specialty": "Internal Medicine",
    "review": 5,
    "experience": 5,
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261"
    },
    "phone": "024-648-3804",
    "website": "ambrose.net"
  }
]
  });
