import {DataModel} from "../../DataModel";

export class ApplicationModel implements DataModel {
    typeName: String = "application";
    fields: Map<String, unknown> = new Map<String, unknown>()

    constructor() {
        this.fields.set("FirstName", typeof String)
        this.fields.set("SubmissionDate", typeof Date)
        this.fields.set("Documents", typeof Array)
    }
}
