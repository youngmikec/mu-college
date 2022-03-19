export const FREEXIT = {
  ADMIN: "5a51bc91860d8b5ba000a000",
  USERID: "5a51bc91860d8b5ba0001000",
  USERID2: "5a51bc91860d8b5ba0002000",
  WALLET_DEBIT: "1234ABCDEF",
  WALLET_CREDIT: "1000ABCDEF",
  WALLET_AMOUNT: 1_000_000_000_000,
  START_DATE: "2021-04-01",
};

export const TRANSACTION = {
  DEPOSIT: "D", // Crediting by Merchant or Customer
  WITHDRAW: "W", // Cashing out by Merchant or Customer
  TRANSFER: "T", // Spending within Ewallet System between Mechant and Cutsomer
};

export const COVERAGE = {
  "1": "GLOBAL",
  "2": "COUNTRY",
  "3": "REGION",
};

export const PAYMENT = {
  GATEWAY: {
    STRIP: "STRIP",
    INTERSWITCH: "INTERSWITCH",
    UNIONBANK: "UNIONBANK",
    PAYSTACK: "PAYSTACK",
    STRIPE: "STRIPE",
    PAYPAL: "PAYPAL",
    GOOGLE_WALLET: "GOOGLE_WALLET",
    FREEXIT_WALLET: "FREEXIT_WALLET",
  },
  METHOD: {
    GATEWAY: "GATEWAY",
    POS: "POS",
    CASH: "CASH",
    CHEQUE: "CHEQUE",
    TRANSFER: "TRANSFER",
    USSD: "USSD",
    WALLET: "WALLET",
  },
  STATUS: {
    PENDING: "PENDING",
    SUCCESSFUL: "SUCCESSFUL",
    FAIL: "FAIL",
  },
};

export const USER_ROLE = {
  "1": "OWNER",
  "2": "ADMIN",
  "3": "SUPPORT",
  "4": "USER",
};

export const USER_TYPE = {
  SENDER: "SENDER",
  DISPATCHER: "DISPATCHER",
  ADMIN: "ADMIN",
};

export const SCHEDULE = {
  PENDING: 1,
  LOADING: 2,
  TRANSIT: 3,
};

export const ACCESS_LEVEL = {
  BLOCKED:    0,
  LOGIN:      1,
  READ:       2,
  CREATE:     3,
  UPDATE:     4,
  DELETE:     5,
  ASSIGNMENT: 6,
  SCHEDULE:   7,
  TRANSFER:   8,
  WITHDRAW:   9,
};

export const ASSIGNMENT_STATUS = {
  CANCELLED: 0,
  PENDING: 1,
  ASSIGNED: 2,
  ACCEPTED: 3,
  COLLECTION: 4,
  DECLINED: 5,
  DISPATCHED: 6,
  DELIVERED: 7,
  CONFIRMED: 8,
  EXPIRED: 9,
}

export const PARCEL_STATUS =  {
  CANCELLED: 0,
  PENDING: 1,
  CHECKOUT: 2,
  CHARGED: 3,
  PACKAGED: 4,    
  ASSIGNED: 5,
  ACCEPTED: 6,
  COLLECTION: 7,
  DECLINED: 8,
  DISPATCHED: 9,
  SHIPPED: 10,
  DELIVERED: 11,
  CONFIRMED: 11,
}

export const VEHICLE_TYPES = [
    "BUS",
    "CAR",
    "TAXI",
    "KEKE",
    "BIKE",
    "TRUCK",
    "TRAILER",
    "AIRCRAFT",
    "SHIP",
    "BOAT",
]

export const EMAIL = {
  ADMIN: "freexittechnologies@gmail.com",
  SENDER: "sender@freexitnow.com",
  DISPATCHER: "dispatcher@freexitnow.com",
  CONTACT: "contact@freexitnow.com",
  NO_REPLY: "no-reply@freexitnow.com",
};

export const GENDER = {
  MALE: "M",
  FEMALE: "F",
  OTHER: "O",
};

export const BUCKET = {
  PARCEL: "parcel",
  BLOG: "blog",
  PROFILE: "profile",
  VEHICLE: "vehicle",
  CATEGORY: "category",
};

export const DATABASE = {
  ERP_VERSION: 1,
  OBJECT_ID_REGEX: /^[0-9a-fA-F]{24}$/,
  PRELOAD_TABLE_DATA: { TRUE: true, FALSE: false, DEFAULT: false },
  RECORD_STATUS: {
    REJECTED: 0,
    PENDING: 1,
    APPROVED: 2,
    AUDITED: 3,
    CLOSED: 4,
  },
  BASE_ID: {
    COUNTRY: "5c51bc91860d8bab00000001",
    REGION: "5c51bc91860d8bbc00000001",
  },
  OPTIONS: {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    autoIndex: true,
    minimize: false,
    versionKey: false,
    toJSON: {
      virtuals: true,
      // eslint-disable-next-line object-shorthand
      transform: function (doc: any, ret: {_id: string, id: string, updated_at: any, created_at: any, __v: any}) {
        ret.id = ret._id;
        // ret.createdAt = ret.created_at;
        // ret.updatedAt = ret.updated_at;
        //@ts-ignore
        delete ret._id;
        delete ret.updated_at;
        delete ret.created_at;
        delete ret.__v;
      },
    },
    toObject: { virtuals: true },
  },
};

export const ENTITY = {
  ASSIGNMENT: "Assignment",
  BANK: "Bank",
  CATEGORY: "Category",
  COUNTRY: "Country",
  DEPOSIT: "Deposit",
  LIEN: "Lien",
  MAIL: "Mail",
  MEDIA: "Media",
  NOTIFICATION: "Notification",
  OTP: "Otp",
  PARCEL: "Parcel",
  RATING: "Rating",
  REGION: "Region",
  REPORT: "Report",
  SCHEDULE: "Schedule",
  SETTING: "Setting",
  SMS: "Sms",
  TERMINAL: "Terminal",
  TICKET: "Ticket",
  TRACK: "Track",
  TRANSACTION: "Transaction",
  TRANSFER: "Transfer",
  UPGRADE: "Upgrade",
  USER: "User",
  VERHICLE: "Verhicle",
  WITHDRAW: "Withdraw",
}
export const JWT = {
  saltRounds: 2,
  jwtSecret: "Moi-moiSoupe-it`s-a_dragonEGG-secret",
  tokenExpireTime: "72h",
};

export const SMS = {
  FREEXIT_SMS_SENDER: "+1323649 6765",
};

export const API = {
  URL: "https://freexitnow.com",
};

export const INPUT_TYPE = {
  TEXT: "TEXT",
  TEXTAREA: "TEXTAREA",
  DROPDOWN: "DROPDOWN",
  FILE: "FILE",
  DATETIME: "DATETIME",
  LOCATION: "LOCATION",
  SELECTLIST: "SELECTLIST",
  RADIOBUTTON: "RADIOBUTTON",
  CHECKBOXES: "CHECKBOXES",
  DATE: "DATE",
  TIME: "TIME",
  NUMBER: "NUMBER",
};

export const ISSUE_PRIORITY = {
  EMERGENCY: "P1",
  HIGH: "P2",
  NORMAL: "P3",
  LOW: "P4",
};

export const ASSIGNMENT = {
  STATUS: {
    CANCELLED: 0,
    PENDING: 1,
    ASSIGNED: 2,
    ACCEPTED: 3,
    COLLECTION: 4,
    DECLINED: 5,
    DISPATCHED: 6,
    DELIVERED: 7,
    CONFIRMED: 8,
    EXPIRED: 9,
  },
  TYPE: {
    SYSTEM: 1,
    ADMIN: 2,
    SENDER: 3,
    DISPATCHER: 4,
  },
};

export const PARCEL = {
  STATUS: {
    CANCELLED: 0,
    PENDING: 1,
    CHECKOUT: 2,
    CHARGED: 3,
    PACKAGED: 4,  // UNASSIGNED   
    ASSIGNED: 5,
    ACCEPTED: 6,
    COLLECTION: 7,
    DECLINED: 8,
    DISPATCHED: 9,
    SHIPPED: 10,
    DELIVERED: 11,
    CONFIRMED: 11,
  },
  FRAGILITY: { ROBUST: "ROBUST", FRAGILE: "FRAGILE" },
  PERISHABILITY: { NONPERISHABLE: "NONPERISHABLE", PERISHABLE: "PERISHABLE" },
  COMBUSTIBILITY: {
    NONCOMBUSTIBLE: "NONCOMBUSTIBLE",
    COMBUSTIBLE: "COMBUSTIBLE",
  },
  ODIFEROUSNESS: { ODOROUS: "ODOROUS", ODORLESS: "ODORLESS" },
  SOLIDITY: { SOLID: "SOLID", LIQUID: "LIQUID" },
  UNIQUENESS: { ORDINARY: "ORDINARY", EXTRAORDINARY: "EXTRAORDINARY" },
  MAX_MASS: 9_000_000,
  MAX_VOLUME: 9_000_000,
  MAX_DISTANCE: 50_000,
  MAX_WORTH: 9_000_000,
  MAX_CHARGE: 9_000_000_000,
  MIN_CHARGE: 1_000,
};

export const VEHICLE = {
  TYPE: {
    BUS: "BUS",
    CAR: "CAR",
    TAXI: "TAXI",
    KEKE: "KEKE",
    BIKE: "BIKE",
    JEEP: "JEEP",
    TRUCK: "TRUCK",
    TRAILER: "TRAILER",
    AIRCRAFT: "AIRCRAFT",
    SHIP: "SHIP",
    BOAT: "BOAT",
  },
  MAKE: {
    TOYOTA: "TOYOTA",
    UGAMA: "UGAMA",
    MEIYER: "MEIYER",
    SIENNA: "SIENNA",
    KINGO: "KINGO",
  },
};

export const DATASET = [
  {
    "_id": "62319d5634cf2e94fe0298db",
    "index": 0,
    "guid": "cbac9f54-855f-4a6b-9414-d558f1d7ca25",
    "isActive": true,
    "balance": "$2,495.65",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "green",
    "name": "Bray Kramer",
    "gender": "male",
    "company": "PHEAST",
    "email": "braykramer@pheast.com",
    "phone": "+1 (883) 426-2656",
    "address": "371 Imlay Street, Stouchsburg, Arkansas, 2459",
    "about": "Nostrud aliqua culpa incididunt dolore cupidatat. Voluptate pariatur nostrud incididunt do. Commodo minim dolor id qui non sit et ad sint culpa id. Nulla occaecat deserunt ut dolor ut sint aliquip officia proident commodo incididunt incididunt.\r\n",
    "registered": "2017-07-31T11:12:50 -01:00",
    "latitude": -49.439855,
    "longitude": -6.293314,
    "tags": [
      "laborum",
      "reprehenderit",
      "laboris",
      "non",
      "et",
      "amet",
      "ut"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Russell Hatfield"
      },
      {
        "id": 1,
        "name": "Lynne Cook"
      },
      {
        "id": 2,
        "name": "Pugh Spencer"
      }
    ],
    "greeting": "Hello, Bray Kramer! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "62319d56a25d54bd2b426e4f",
    "index": 1,
    "guid": "3a5f0691-629e-4e2a-9da8-8e8164dc9749",
    "isActive": true,
    "balance": "$2,392.77",
    "picture": "http://placehold.it/32x32",
    "age": 34,
    "eyeColor": "brown",
    "name": "Nora Sanford",
    "gender": "female",
    "company": "APEXTRI",
    "email": "norasanford@apextri.com",
    "phone": "+1 (948) 501-3926",
    "address": "597 Johnson Street, Lavalette, Delaware, 4944",
    "about": "Qui irure aute fugiat officia deserunt cillum laborum proident eu officia culpa. Est fugiat velit ullamco nisi aliqua duis commodo nulla pariatur elit ipsum. Sunt sit aliquip dolore Lorem sint aute pariatur exercitation. Cillum fugiat laborum fugiat deserunt tempor. Occaecat nisi dolore ipsum esse ea. Quis reprehenderit velit adipisicing ullamco veniam voluptate irure labore id incididunt amet sint.\r\n",
    "registered": "2019-05-23T11:18:57 -01:00",
    "latitude": 56.814093,
    "longitude": -112.616201,
    "tags": [
      "labore",
      "deserunt",
      "consectetur",
      "dolor",
      "consectetur",
      "ut",
      "ullamco"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Erna Tillman"
      },
      {
        "id": 1,
        "name": "Shirley Figueroa"
      },
      {
        "id": 2,
        "name": "Ellison Fowler"
      }
    ],
    "greeting": "Hello, Nora Sanford! You have 2 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "62319d56dbc9faee38f7c87e",
    "index": 2,
    "guid": "a71e350f-7130-437b-90d4-fe5bfc2b5ba4",
    "isActive": false,
    "balance": "$2,924.93",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": "Essie Conley",
    "gender": "female",
    "company": "IMMUNICS",
    "email": "essieconley@immunics.com",
    "phone": "+1 (939) 414-2000",
    "address": "482 Ferry Place, Greenfields, Nebraska, 9595",
    "about": "Nulla non cillum ad officia culpa. Ut nostrud aliquip eu incididunt voluptate reprehenderit irure elit. Fugiat cupidatat eiusmod anim velit sint magna pariatur laboris deserunt laborum nulla pariatur in veniam. Consectetur est eiusmod proident duis nostrud. Culpa ea aliqua reprehenderit non laborum culpa pariatur magna nulla ullamco. Velit velit aute ex laborum cillum ut cillum elit non labore ad mollit mollit voluptate. Mollit laborum excepteur elit exercitation nostrud aute voluptate adipisicing nostrud adipisicing ullamco veniam.\r\n",
    "registered": "2020-03-09T11:42:47 -01:00",
    "latitude": 76.621224,
    "longitude": -162.230726,
    "tags": [
      "consectetur",
      "ad",
      "mollit",
      "id",
      "cupidatat",
      "dolor",
      "nostrud"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Stout Christian"
      },
      {
        "id": 1,
        "name": "Ochoa Arnold"
      },
      {
        "id": 2,
        "name": "Erma Griffin"
      }
    ],
    "greeting": "Hello, Essie Conley! You have 6 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "62319d569b6c8cda0ead8458",
    "index": 3,
    "guid": "22267d55-944e-4afe-9017-9fdf768fc572",
    "isActive": true,
    "balance": "$1,842.58",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "brown",
    "name": "Nina Atkinson",
    "gender": "female",
    "company": "INTERODEO",
    "email": "ninaatkinson@interodeo.com",
    "phone": "+1 (900) 511-2034",
    "address": "135 Fair Street, Iberia, Indiana, 3683",
    "about": "Sunt aute consequat consectetur non aute deserunt exercitation deserunt do non. Sunt sint qui ut et et laborum ipsum enim do excepteur duis fugiat. Aliqua cupidatat irure ex dolor elit laboris labore minim eu ipsum cillum. Laboris id amet consequat minim officia.\r\n",
    "registered": "2017-05-12T10:27:49 -01:00",
    "latitude": -0.981135,
    "longitude": -116.722089,
    "tags": [
      "non",
      "voluptate",
      "occaecat",
      "laborum",
      "nostrud",
      "minim",
      "tempor"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Heather Castro"
      },
      {
        "id": 1,
        "name": "Marie Bird"
      },
      {
        "id": 2,
        "name": "Cain Ratliff"
      }
    ],
    "greeting": "Hello, Nina Atkinson! You have 2 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "62319d56274cf3c388d05172",
    "index": 4,
    "guid": "85f28255-5d80-4757-9f31-ea7012a2f59a",
    "isActive": false,
    "balance": "$1,529.46",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "brown",
    "name": "Hayes Morton",
    "gender": "male",
    "company": "APEX",
    "email": "hayesmorton@apex.com",
    "phone": "+1 (860) 461-3846",
    "address": "837 Myrtle Avenue, Belmont, Vermont, 3016",
    "about": "In ad minim ipsum anim deserunt sunt quis enim et magna sint minim et. Ad sint incididunt velit minim enim cupidatat. Cillum duis aliqua nostrud amet non. Excepteur ullamco exercitation aliqua ad aliqua ipsum nostrud cillum enim fugiat ea id non dolore.\r\n",
    "registered": "2019-07-09T08:25:06 -01:00",
    "latitude": 0.456091,
    "longitude": 120.308103,
    "tags": [
      "aliquip",
      "sunt",
      "magna",
      "qui",
      "elit",
      "aliquip",
      "eiusmod"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Hodges Mullins"
      },
      {
        "id": 1,
        "name": "Tillman Mccullough"
      },
      {
        "id": 2,
        "name": "Reid Dorsey"
      }
    ],
    "greeting": "Hello, Hayes Morton! You have 9 unread messages.",
    "favoriteFruit": "strawberry"
  }
]
