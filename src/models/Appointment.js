export class Schedule {
  constructor({ day, intday, start, end }) {
    this.day = day;
    this.intday = intday;
    this.start = start;
    this.end = end;
  }

  toString() {
    return JSON.stringify(this);
  }

  toJson() {
    return JSON.parse(JSON.stringify(this));
  }
}

export class Appointment {
  constructor({ docid, docname, clinic, name, phone, date, schedule }) {
    this.docid = docid;
    this.docname = docname;
    this.clinic = clinic;
    this.name = name;
    this.phone = phone;
    this.date = date;
    this.schedule = schedule;
  }

  toString() {
    return JSON.stringify(this);
  }
  toJson() {
    return JSON.parse(JSON.stringify(this));
  }
}
