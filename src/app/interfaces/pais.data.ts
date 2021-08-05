export interface Pais {
    ID: string;
    pa: string;
  }
  
export interface PaisGroup {
    letra: string;
    paises: Pais[];
  }

/** list of pais groups */
export const PAISGROUPS: PaisGroup[] = [
        {
            letra: "A",
            paises: [
                {ID: '01', pa: 'Afganistan'},
                {ID: '02', pa: 'Albania'},
                {ID: '03', pa: 'Alemania'},
                {ID: '04', pa: 'Andorra'},
                {ID: '05', pa: 'Angola'},
                {ID: '06', pa: 'Antigua y Barbuda'},
                {ID: '07', pa: 'Arabia Saudita'},
                {ID: '08', pa: 'Argelia'},
                {ID: '09', pa: 'Argentina'},
                {ID: '10', pa: 'Armenia'},
                {ID: '11', pa: 'Australia'},
                {ID: '12', pa: 'Austria'},
                {ID: '13', pa: 'Azerbaiyan'}
                ]
        },
        {
            letra: "B",
            paises: [
                {ID: '14', pa: 'Bahamas'},
                {ID: '15', pa: 'Bangladesh'},
                {ID: '16', pa: 'Barbados'},
                {ID: '17', pa: 'Barein'},
                {ID: '18', pa: 'Belgica'},
                {ID: '19', pa: 'Belice'},
                {ID: '20', pa: 'Benin'},
                {ID: '21', pa: 'Bielorrusia'},
                {ID: '22', pa: 'Bolivia'},
                {ID: '23', pa: 'Bosnia y Herzegovina'},
                {ID: '24', pa: 'Botsuana'},
                {ID: '25', pa: 'Brasil'},
                {ID: '26', pa: 'Brunei'},
                {ID: '27', pa: 'Bulgaria'},
                {ID: '28', pa: 'Burkina Faso'},
                {ID: '29', pa: 'Burundi'},
                {ID: '30', pa: 'Butan'}
                ]
        },
        {
            letra: "C",
            paises: [
                {ID: '31', pa: 'Cabo Verde'},
                {ID: '32', pa: 'Camboya'},
                {ID: '33', pa: 'Camerun'},
                {ID: '34', pa: 'Canada'},
                {ID: '35', pa: 'Catar'},
                {ID: '36', pa: 'Chad'},
                {ID: '37', pa: 'Chile'},
                {ID: '38', pa: 'China'},
                {ID: '39', pa: 'Chipre'},
                {ID: '40', pa: 'Ciudad del Vaticano'},
                {ID: '41', pa: 'Colombia'},
                {ID: '42', pa: 'Comoras'},
                {ID: '43', pa: 'Corea del Norte'},
                {ID: '44', pa: 'Corea del Sur'},
                {ID: '45', pa: 'Costa de Marfil'},
                {ID: '46', pa: 'Costa Rica'},
                {ID: '47', pa: 'Croacia'},
                {ID: '48', pa: 'Cuba'}
            ]
        },
        {
            letra: "D",
            paises: [
                {ID: '49', pa: 'Dinamarca'},
                {ID: '50', pa: 'Dominica'}
            ]
        },
        {
            letra: "E",
            paises: [
                {ID: '51', pa: 'Ecuador'},
                {ID: '52', pa: 'Egipto'},
                {ID: '53', pa: 'El Salvador'},
                {ID: '54', pa: 'Emiratos Arabes Unidos'},
                {ID: '55', pa: 'Eritrea'},
                {ID: '56', pa: 'Eslovaquia'},
                {ID: '57', pa: 'Eslovenia'},
                {ID: '58', pa: 'España'},
                {ID: '59', pa: 'Estados Unidos'},
                {ID: '60', pa: 'Estonia'},
                {ID: '61', pa: 'EtiopIa'}
            ]
        },
        {
            letra: "F",
            paises: [
                {ID: '62', pa: 'Filipinas'},
                {ID: '63', pa: 'Finlandia'},
                {ID: '64', pa: 'Fiyi'},
                {ID: '65', pa: 'Francia'}
            ]
        },
        {
            letra: "G",
            paises: [
                {ID: '66', pa: 'Gabon'},
                {ID: '67', pa: 'Gambia'},
                {ID: '68', pa: 'Georgia'},
                {ID: '69', pa: 'Ghana'},
                {ID: '70', pa: 'Granada'},
                {ID: '71', pa: 'Grecia'},
                {ID: '72', pa: 'Guatemala'},
                {ID: '73', pa: 'Guinea'},
                {ID: '74', pa: 'Guinea-Bisau'},
                {ID: '75', pa: 'Guinea Ecuatorial'},
                {ID: '76', pa: 'Guyana'}
            ]
        },
        {
            letra: "H",
            paises: [
                {ID: '77', pa: 'Haiti'},
                {ID: '78', pa: 'Honduras'},
                {ID: '79', pa: 'Hungria'},
            ]
        },
        {
            letra: "I",
            paises: [
                {ID: '80', pa: 'India'},
                {ID: '81', pa: 'Indonesia'},
                {ID: '82', pa: 'Irak'},
                {ID: '83', pa: 'Iran'},
                {ID: '84', pa: 'Irlanda'},
                {ID: '85', pa: 'Islandia'},
                {ID: '86', pa: 'Islas Marshall'},
                {ID: '196', pa: 'Islas Malvinas'},
                {ID: '87', pa: 'Islas Salomon'},
                {ID: '88', pa: 'Israel'},
                {ID: '89', pa: 'Italia'}
            ]
        },
        {
            letra: "J",
            paises: [
                {ID: '90', pa: 'Jamaica'},
                {ID: '91', pa: 'Japon'},
                {ID: '92', pa: 'Jordania'}
            ]
        },
        {
            letra: "K",
            paises: [
                {ID: '93', pa: 'Kazajistan'},
                {ID: '94', pa: 'Kenia'},
                {ID: '95', pa: 'Kirguistan'},
                {ID: '96', pa: 'Kiribati'},
                {ID: '97', pa: 'Kuwait'}
            ]
        },
        {
            letra: "L",
            paises: [
                {ID: '98', pa: 'Laos'},
                {ID: '99', pa: 'Lesoto'},
                {ID: '100', pa: 'Letonia'},
                {ID: '101', pa: 'Libano'},
                {ID: '102', pa: 'Liberia'},
                {ID: '103', pa: 'Libia'},
                {ID: '104', pa: 'Liechtenstein'},
                {ID: '105', pa: 'Lituania'},
                {ID: '106', pa: 'Luxemburgo'}
            ]
        },
        {
            letra: "M",
            paises: [
                {ID: '107', pa: 'Macedonia del Norte'},
                {ID: '108', pa: 'Madagascar'},
                {ID: '109', pa: 'Malasia'},
                {ID: '110', pa: 'Malaui'},
                {ID: '111', pa: 'Maldivas'},
                {ID: '112', pa: 'Mali'},
                {ID: '113', pa: 'Malta'},
                {ID: '114', pa: 'Marruecos'},
                {ID: '115', pa: 'Mauricio'},
                {ID: '116', pa: 'Mauritania'},
                {ID: '117', pa: 'Mexico'},
                {ID: '118', pa: 'Micronesia'},
                {ID: '119', pa: 'Moldavia'},
                {ID: '120', pa: 'Monaco'},
                {ID: '121', pa: 'Mongolia'},
                {ID: '122', pa: 'Montenegro'},
                {ID: '123', pa: 'Mozambique'},
                {ID: '124', pa: 'Myanmar'}
            ]
        }, 
        {
            letra: "N",
            paises: [
                {ID: '125', pa: 'Namibia'},
                {ID: '126', pa: 'Nauru'},
                {ID: '127', pa: 'Nepal'},
                {ID: '128', pa: 'Nicaragua'},
                {ID: '129', pa: 'Niger'},
                {ID: '130', pa: 'Nigeria'},
                {ID: '131', pa: 'Noruega'},
                {ID: '132', pa: 'Nueva Zelanda'}
            ]
        }, 
        {
            letra: "O",
            paises: [
                {ID: '133', pa: 'Oman'},
            ]
        },
        {
            letra: "P",
            paises: [
                {ID: '134', pa: 'Paises Bajos'},
                {ID: '135', pa: 'Pakistan'},
                {ID: '136', pa: 'Palaos'},
                {ID: '137', pa: 'Palestina'},
                {ID: '138', pa: 'Panama'},
                {ID: '139', pa: 'Papua Nueva Guinea'},
                {ID: '140', pa: 'Paraguay'},
                {ID: '141', pa: 'Peru'},
                {ID: '142', pa: 'Polonia'},
                {ID: '143', pa: 'Portugal'},
            ]
        },
        {
            letra: "R",
            paises: [
                {ID: '144', pa: 'Reino Unido'},
                {ID: '145', pa: 'Republica Centroafricana'},
                {ID: '146', pa: 'Republica Checa'},
                {ID: '147', pa: 'Republica del Congo'},
                {ID: '148', pa: 'Republica Democratica del Congo'},
                {ID: '149', pa: 'Republica Dominicana'},
                {ID: '150', pa: 'Ruanda'},
                {ID: '151', pa: 'Rumania'},
                {ID: '152', pa: 'Rusia'},
            ]
        },
        {
            letra: "S",
            paises: [
                {ID: '153', pa: 'Samoa'},
                {ID: '154', pa: 'San Cristobal y Nieves'},
                {ID: '155', pa: 'San Marino'},
                {ID: '156', pa: 'San Vicente y las Granadinas'},
                {ID: '157', pa: 'Santa Lucia'},
                {ID: '158', pa: 'Santo Tome y Principe'},
                {ID: '159', pa: 'Senegal'},
                {ID: '160', pa: 'Serbia'},
                {ID: '161', pa: 'Seychelles'},
                {ID: '162', pa: 'Sierra Leona'},
                {ID: '163', pa: 'Singapur'},
                {ID: '164', pa: 'Siria'},
                {ID: '165', pa: 'Somalia'},
                {ID: '166', pa: 'Sri Lanka'},
                {ID: '167', pa: 'Suazilandia'},
                {ID: '168', pa: 'Sudafrica'},
                {ID: '169', pa: 'Sudan'},
                {ID: '170', pa: 'Sudan del Sur'},
                {ID: '171', pa: 'Suecia'},
                {ID: '172', pa: 'Suiza'},
                {ID: '173', pa: 'Surinam'},
            ]
        },
        {
            letra: "T",
            paises: [
                {ID: '174', pa: 'Tailandia'},
                {ID: '175', pa: 'Tanzania'},
                {ID: '176', pa: 'Tayikistan'},
                {ID: '177', pa: 'Timor Oriental'},
                {ID: '178', pa: 'Togo'},
                {ID: '179', pa: 'Tonga'},
                {ID: '180', pa: 'Trinidad y Tobago'},
                {ID: '181', pa: 'Tunez'},
                {ID: '182', pa: 'Turkmenistan'},
                {ID: '183', pa: 'Turquia'},
                {ID: '184', pa: 'Tuvalu'},
            ]
        },
        {
            letra: "U",
            paises: [
                {ID: '185', pa: 'Ucrania'},
                {ID: '186', pa: 'Uganda'},
                {ID: '187', pa: 'Uruguay'},
                {ID: '188', pa: 'Uzbekistan'},
            ]
        },
        {
            letra: "V",
            paises: [
                {ID: '189', pa: 'Vanuatu'},
                {ID: '190', pa: 'Venezuela'},
                {ID: '191', pa: 'Vietnam'},
            ]
        },
        {
            letra: "V",
            paises: [
                {ID: '192', pa: 'Yemen'},
                {ID: '193', pa: 'Yibuti'},
            ]
        },
        {
            letra: "Z",
            paises: [
                {ID: '194', pa: 'Zambia'},
                {ID: '195', pa: 'Zimbabue'},
            ]
        },
    ]
        
  