console.log("hi");
class Person {
  fname: string;
  lname: string;
  adress: string;
  age: number;
  constructor(first: string, last: string, adress: string, age: number) {
    this.fname = first;
    this.lname = last;
    this.adress = adress;
    this.age = age;
  }
}
class Patient extends Person {
  id: string;
  emergency_contact: string;
  medical_history: Appointment[];
  constructor(
    first: string,
    last: string,
    adress: string,
    age: number,
    _id: string,
    emergency_contact: string,
    medical_history: Appointment[]
  ) {
    super(first, last, adress, age);
    this.id = _id;
    this.emergency_contact = emergency_contact;
    this.medical_history = medical_history;
  }
  show() {
    console.log(this);
  }
  update_appointment(new_appointment: Appointment) {
    this.medical_history.push(new_appointment);
    console.log("success update");
  }
}
class Medical_Staff extends Person {
  staff_ID: string;
  position: string;
  department: string;
  constructor(
    first: string,
    last: string,
    adress: string,
    age: number,
    id: string,
    position: string,
    department: string
  ) {
    super(first, last, adress, age);
    this.staff_ID = id;
    this.position = position;
    this.department = department;
  }
}
class Appointment {
  patient: Patient;
  doctor: Doctor;
  date: string;
  time: string;
  status: " Scheduled" | "Canceled" | "Done";

  constructor(
    patient: Patient,
    doctor: Doctor,
    date: string,
    time: string,
    status: " Scheduled" | "Canceled" | "Done"
  ) {
    this.patient = patient;
    this.doctor = doctor;
    this.date = date;
    this.time = time;
    this.status = status;
  }
  appdit(): void {
    this.patient.show();
    this.doctor.show();
    console.log(`the appointment will be in the ${this.date} at ${this.time}`);
  }
}
class Doctor extends Medical_Staff {
  specialization: string;
  availability: { [date: string]: string[] };
  ageRange: { min: number; max: number };
  constructor(
    first: string,
    last: string,
    adress: string,
    age: number,
    D_id: string,
    position: string,
    department: string,
    specialization: string,
    availability: { [date: string]: string[] },
    ageRange: { min: number; max: number }
  ) {
    super(first, last, adress, age, D_id, position, department);
    this.specialization = specialization;
    this.availability = availability;
    this.ageRange = ageRange;
  }
  show(): void {
    console.log(this);
  }
}
class Medical_Record {
  patient: Patient;
  doctor: Doctor;
  diagnosis: string;
  prescription: string;
  constructor(
    patient: Patient,
    doctor: Doctor,
    diagnosis: string,
    prescription: string
  ) {
    this.patient = patient;
    this.doctor = doctor;
    this.diagnosis = diagnosis;
    this.prescription = prescription;
  }
}
class Hospital {
  patients: Patient[];
  doctors: Doctor[];
  appointments: Appointment[];
  medical_records: Medical_Record[];
  hospital_name: string;
  constructor(
    patients: Patient[],
    doctors: Doctor[],
    appointments: Appointment[],
    medical_records: Medical_Record[],
    hospital_name: string
  ) {
    this.patients = patients;
    this.doctors = doctors;
    this.appointments = appointments;
    this.medical_records = medical_records;
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
      element.doctor.staff_ID === id;
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
  show_doctor_by_specialization(specialization: string): Doctor[] {
    const the_doctor = this.doctors.filter(
      (element) => element.specialization === specialization
    );
    return the_doctor;
  }
  createMedicalRecord(
    patient: Patient,
    doctor: Doctor,
    diagnosis: string,
    prescription: string
  ) {
    const medical_rec = new Medical_Record(
      patient,
      doctor,
      diagnosis,
      prescription
    );
    this.medical_records.push(medical_rec);
  }
  getMedicalRecords(_id: string) {
    const patient_medicalrec = this.medical_records.filter(
      (element) => element.patient.id === _id
    );
    patient_medicalrec.forEach((element) => {
      console.log(element);
    });
  }
  getDoctorSchedule(date: string, id: string) {
    const doc = this.doctors.find((element) => element.staff_ID === id);
    const scheduele = doc?.availability.date;
    console.log(scheduele);
  }
}

// Create hospital
const myHospital = new Hospital([], [], [], [], "My Hospital");

// Create doctors
const doctor1 = new Doctor(
  "John",
  "Doe",
  "123 Main St",
  35,
  "D001",
  "Doctor",
  "Internal Medicine",
  "Cardiologist",
  {
    "2023-08-27": ["10:00", "14:00"],
    "2023-08-28": ["11:00", "15:00"],
  },
  { min: 30, max: 60 }
);

// Create patients
const patient1 = new Patient(
  "Alice",
  "Johnson",
  "789 Elm St",
  25,
  "P001",
  "123-456-7890",
  []
);

// Create appointments
const appointment1 = new Appointment(
  patient1,
  doctor1,
  "2023-08-27",
  "10:00",
  "Scheduled"
);

// Add doctors, patients, and appointments to the hospital
myHospital.newdoctor(doctor1);
myHospital.newpatient(patient1);
myHospital.newappointment(appointment1);

// Use various methods from the Hospital class
console.log("All Appointments:");
myHospital.show_appointments();

console.log("\nDoctor Appointments:");
myHospital.show_doctor_appointments("D001");

console.log("\nPatient Appointments:");
myHospital.show_patient_appointments("P001");

console.log("\nDoctor by Specialization (Cardiologist):");
const cardiologists = myHospital.show_doctor_by_specialization("Cardiologist");
console.log(cardiologists);

console.log("\nCreating Medical Record:");
myHospital.createMedicalRecord(patient1, doctor1, "Fever", "Rest and fluids");

console.log("\nGetting Medical Records for Patient P001:");
myHospital.getMedicalRecords("P001");

console.log("\nGetting Doctor Schedule for Doctor D001:");
const doctorAvailability = myHospital.getDoctorSchedule("2023-08-28", "D001");
console.log("Doctor's availability on 2023-08-28:", doctorAvailability);
