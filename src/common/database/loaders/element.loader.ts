// import {Injectable, Scope} from "@nestjs/common";
// import DataLoader from "dataloader";
// import {ElementQuestion} from "../common/database/entities/element/element-question.entity";
// import {getRepository} from "typeorm";
// import {ElementAnswerOption} from "../common/database/entities/element/element-answer-option.entity";
// import {ElementOption} from "../common/database/entities/element/element-option-entity";
//
// @Injectable({scope: Scope.REQUEST})
// export class ElementLoader {
//
//     private hasQuestionsLoader = false;
//     private _questions: DataLoader<number, ElementQuestion[]>;
//
//     private hasAnswerOptionsLoader = false;
//     private _answerOptions: DataLoader<number, ElementAnswerOption[]>;
//
//     private hasOptionsLoader = false;
//     private _options: DataLoader<number, ElementOption[]>;
//
//
//     questions() {
//         if (!this.hasQuestionsLoader) {
//             this.makeQuestionLoader();
//         }
//         return this._questions;
//     }
//
//     answerOptions() {
//         if (!this.hasAnswerOptionsLoader) {
//             this.makeAnswerOptionLoader();
//         }
//         return this._answerOptions;
//     }
//
//     options() {
//         if (!this.hasOptionsLoader) {
//             this.makeOptionLoader();
//         }
//         return this._options;
//     }
//
//     private makeQuestionLoader() {
//         this._questions = new DataLoader<number, ElementQuestion[]>(async (elementIds: number[]) => {
//             const questions = await getRepository(ElementQuestion)
//                 .createQueryBuilder('questions')
//                 .where('questions.elementId in (:ids)', {ids: elementIds})
//                 .getMany();
//
//             const elementIdToQuestions: {[key: string]: ElementQuestion[]} = {};
//
//             questions.forEach(question => {
//                 if (!elementIdToQuestions.hasOwnProperty(question.elementId)) {
//                     elementIdToQuestions[question.elementId] = [];
//                 }
//                 elementIdToQuestions[question.elementId].push(question);
//             })
//             return elementIds.map(elementId => elementIdToQuestions.hasOwnProperty(elementId) ? elementIdToQuestions[elementId] : []);
//         })
//     }
//
//     private makeAnswerOptionLoader() {
//         this._answerOptions = new DataLoader<number, ElementAnswerOption[]>(async (elementIds: number[]) => {
//             const answerOptions = await getRepository(ElementAnswerOption)
//                 .createQueryBuilder('answerOptions')
//                 .where('answerOptions.elementId in (:ids)', {ids: elementIds})
//                 .getMany();
//
//             const elementIdToAnswerOptions: {[key: string]: ElementAnswerOption[]} = {};
//
//             answerOptions.forEach(answerOption => {
//                 if (!elementIdToAnswerOptions.hasOwnProperty(answerOption.elementId)) {
//                     elementIdToAnswerOptions[answerOption.elementId] = [];
//                 }
//                 elementIdToAnswerOptions[answerOption.elementId].push(answerOption);
//             })
//
//             return elementIds.map(elementId => elementIdToAnswerOptions.hasOwnProperty(elementId) ? elementIdToAnswerOptions[elementId] : []);
//         })
//     }
//
//     private makeOptionLoader() {
//         this._options = new DataLoader<number, ElementOption[]>(async (elementIds: number[]) => {
//             const options = await getRepository(ElementOption)
//                 .createQueryBuilder('options')
//                 .where('options.elementId in (:ids)', {ids: elementIds})
//                 .getMany();
//
//             const elementIdToOptions: {[key: string]: ElementOption[]} = {};
//
//             options.forEach(answerOption => {
//                 if (!elementIdToOptions.hasOwnProperty(answerOption.elementId)) {
//                     elementIdToOptions[answerOption.elementId] = [];
//                 }
//                 elementIdToOptions[answerOption.elementId].push(answerOption);
//             })
//
//             return elementIds.map(elementId => elementIdToOptions.hasOwnProperty(elementId) ? elementIdToOptions[elementId] : []);
//         })
//     }
//
// }
