export const initialState: AppState = {
  user: {
    email: 'a123@gmail.com',
    firstName: 'Aaron',
    lastName: 'Alpha',
    role: 'applicant',
    id: 'a123',
  },
  //password is not on FE, only stored in DB
  //public user has one app but internal employee users can have multiple apps, so an array here
  applications: [
    {
      internalAppStatus: 'TO_OPEN',
      externalAppStatus: 'DRAFT',
      id: Math.random().toString(36).slice(2),
      formNumber: '1040NR',
      signatory: 'Aaron Alpha',
      tinOfSignatory: '111-11-1111',
      dateSubmitted: new Date().toJSON(),
      body: {
        firstName: 'Aaron',
        lastName: 'Alpha',
        dateOfBirth: '1997-02-28',
        tin: '111-11-1111',
        gender: 'M',
        race: 'White',
        ethnicity: 'Caucasian',
        education: 'College',
        income: {
          has: true,
          monthly: 1000,
        },
      },
    },
  ],
};

export interface User {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  id: string;
}

export type ExternalAppStatus =
  | 'DRAFT'
  | 'SUBMITTED'
  | 'RESUBMIT_REQUIRED'
  | 'UNDER_REVIEW'
  | 'APPROVED'
  | 'DECLINED';

export type InternalAppStatus =
  | 'TO_OPEN'
  | 'OPENED'
  | 'RESUBMISSION_REQUESTED'
  | 'RECOMMEND_APPROVAL'
  | 'RECOMMEND_DECLINE'
  | 'APPROVED'
  | 'DECLINED';

export interface Application {
  externalAppStatus: ExternalAppStatus;
  internalAppStatus: InternalAppStatus;
  id: string;
  formNumber: string;
  signatory: string;
  tinOfSignatory: string;
  dateSubmitted: string;
  body: {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    tin: string;
    gender: 'M' | 'F' | 'NB';
    race: string;
    ethnicity: string;
    education: string;
    income: {
      has: boolean;
      monthly: number;
    };
  };
}

export interface AppState {
  user: User;
  applications: Application[];
}

//MORE MOCK DATA TO USE
// user: {
//   email: 'b123@gmail.com',
//   firstName: 'Bobby',
//   lastName: 'Bravo',
//   role: 'applicant',
//   id: 'b123',
// },
// //password is not on FE, only stored in DB
// applications: [
//   {
//     appStatus: 'DRAFT',
//     id: Math.random().toString(36).slice(2),
//     formNumber: '1040NR',
//     signatory: 'Bobby Bravo',
//     tinOfSignatory: '211-11-1111',
//     dateSubmitted: new Date().toJSON(),
//     body: {
//       firstName: 'Bobby',
//       lastName: 'Bravo',
//       dateOfBirth: '1990-03-28',
//       tin: '211-11-1111',
//       gender: 'M',
//       race: 'White',
//       ethnicity: 'Caucasian',
//       education: 'College',
//       income: {
//         has: true,
//         monthly: 2000,
//       },
//     },
//   },
// ],

// user: {
//   email: 'c123@gmail.com',
//   firstName: 'Cameron',
//   lastName: 'Charley',
//   role: 'applicant',
//   id: 'b123',
// },
// //password is not on FE, only stored in DB
// applications: [
//   {
//     appStatus: 'DRAFT',
//     id: Math.random().toString(36).slice(2),
//     formNumber: '1040NR',
//     signatory: 'Cameron Charley',
//     tinOfSignatory: '311-11-1111',
//     dateSubmitted: new Date().toJSON(),
//     body: {
//       firstName: 'Cameron',
//       lastName: 'Charley',
//       dateOfBirth: '1991-03-01',
//       tin: '311-11-1111',
//       gender: 'F',
//       race: '',
//       ethnicity: 'Black',
//       education: 'HighSchool',
//       income: {
//         has: false,
//         monthly: 0,
//       },
//     },
//   },
// ],

// import { Schema } from "mongoose";

// export class ModelManager {
//   private static readonly viewSchema = new Schema({
//     name: String,
//     view: {},
//   });
//   private static readonly roleSchema = new Schema({
//     name: String,
//   });
//   private static readonly modelSchema = new Schema({
//     name: String,
//     model: Map,
//   });
//   private static readonly moduleSchema = new Schema({
//     // the name of the module
//     moduleName: String,
//     // the relative or absolute path to the module's code on the server
//     path: String,
//     // whether the module should be run
//     active: Boolean,
//     // the views associated with this module
//     views: [ModelManager.viewSchema],
//     // the roles associated with this module
//     roles: [ModelManager.roleSchema],
//     // the data models associated with this module
//     models: [ModelManager.modelSchema],
//   });
//   private static readonly userSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     roles: [String],
//   });
//   private static readonly personSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     dateOfBirth: Date,
//     tin: String,
//     gender: String,
//     race: String,
//     ethnicity: String,
//     education: String,
//     income: new Schema({
//       has: Boolean,
//       monthly: Number,
//     }),
//   });

//   static getSchemas(): Array<Schema> {
//     const schemas: Array<Schema> = [];

//     schemas.push(ModelManager.view);
//     schemas.push(ModelManager.role);
//     schemas.push(ModelManager.model);
//     schemas.push(ModelManager.module);
//     schemas.push(ModelManager.user);
//     schemas.push(ModelManager.person);

//     return schemas;
//   }

//   static get model(): Schema {
//     return ModelManager.modelSchema;
//   }

//   static get view(): Schema {
//     return ModelManager.viewSchema;
//   }

//   static get role(): Schema {
//     return ModelManager.roleSchema;
//   }

//   static get module(): Schema {
//     return ModelManager.moduleSchema;
//   }

//   static get user(): Schema {
//     return ModelManager.userSchema;
//   }

//   static get person(): Schema {
//     return ModelManager.personSchema;
//   }
