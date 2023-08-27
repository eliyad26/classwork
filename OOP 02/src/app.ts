console.log("hi");
class Person {
  fname: string;
  lname: string;
  constructor(first: string, last: string) {
    this.fname = first;
    this.lname = last;
  }
}
class Patient extends Person {
  id: string;
  constructor(first: string, last: string, _id: string) {
    super(first, last);
    this.id = _id;
  }
  show(): void {
    console.log(this);
  }
}
class Doctor extends Person {
  doctor_id: string;
  specialization: string;
  constructor(
    first: string,
    last: string,
    D_id: string,
    specialization: string
  ) {
    super(first, last);
    this.doctor_id = D_id;
    this.specialization = specialization;
  }
  show(): void {
    console.log(this);
  }
}
class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;

  constructor(patient: Patient, doctor: Doctor, date: string, time: string) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
  }
  appdit(): void {
    this.patient.show();
    this.doctor.show();
    console.log(`the appointment will be in the ${this.date} at ${this.time}`);
  }
}
class Hospital {
  patients: Patient[];
  doctors: Doctor[];
  appointments: Appointment[];
  hospital_name: string;
  constructor(
    patients: Patient[],
    doctors: Doctor[],
    appointments: Appointment[],
    hospital_name: string
  ) {
    this.patients = patients;
    this.doctors = doctors;
    this.appointments = appointments;
    this.hospital_name = hospital_name;
  }
  newpatient(new_patient: Patient): void {
    this.patients.push(new_patient);
  }
  newdoctor(new_doctor: Doctor): void {
    this.doctors.push(new_doctor);
  }
  newappointment(new_appointment: Appointment): void {
    this.appointments.push(new_appointment);
  }
  show_appointments(): void {
    this.appointments.forEach((element) => {
      element.appdit();
    });
  }
  show_doctor_appointments(id: string): void {
    const doctor_appointments = this.appointments.filter((element) => {
      element.doctor.doctor_id === id;
    });
    doctor_appointments.forEach((element) => {
      console.log(element.appdit());
    });
  }
  show_patient_appointments(id: string): void {
    const patient_appointments = this.appointments.filter(
      (element) => element.patient.id === id
    );
    patient_appointments.forEach((element) => {
      element.appdit;
    });
  }
  show_all_appointments(): void {
    this.appointments.forEach((element) => {
      element.appdit;
    });
  }
}
const t = new Patient("r", "duek", "2243423");
console.log(t);
