
const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.REACT_APP_DB_DATABASE}`;
const useDatabaseQuery = `USE ${process.env.REACT_APP_DB_DATABASE}`;

const createAdminTableQuery = `
CREATE TABLE IF NOT EXISTS admin (
    firstname VARCHAR(60) NULL,
    middlename VARCHAR(60) NULL,
    lastname VARCHAR(60) NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    mobile BIGINT(10) NULL,
    bloodgroup VARCHAR(45) NULL,
    gender VARCHAR(45) NULL,
    dateofbirth DATE NULL,
    country VARCHAR(45) NULL,
    state VARCHAR(45) NULL,
    city VARCHAR(45) NULL,
    street1 VARCHAR(60) NULL,
    street2 VARCHAR(60) NULL,
    zipcode INT NULL,
    UNIQUE INDEX email_UNIQUE (email ASC),
    UNIQUE INDEX mobile_UNIQUE (mobile ASC));
`

const insertAdminTableQuery = `
INSERT IGNORE INTO admin 
  (email, password) 
VALUES 
  ("admin", "admin");
`

const createDoctorsTableQuery = `
CREATE TABLE IF NOT EXISTS doctors (
    doctor_id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(60) NOT NULL,
    middlename VARCHAR(60) NULL,
    lastname VARCHAR(60) NOT NULL,
    gender VARCHAR(45) NOT NULL,
    phone BIGINT(10) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    dob DATE NULL,
    bloodgroup VARCHAR(45) NULL,
    hospital VARCHAR(60) NOT NULL,
    specialization VARCHAR(60) NOT NULL,
    address VARCHAR(60) NOT NULL,
    country VARCHAR(45) NOT NULL,
    state VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    street1 VARCHAR(45) NULL,
    street2 VARCHAR(45) NULL,
    zipcode MEDIUMINT(6) NULL,
    UNIQUE INDEX doctor_id_UNIQUE (doctor_id ASC),
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    UNIQUE INDEX email_UNIQUE (email ASC));
`;

const createPatientsTableQuery = `
CREATE TABLE IF NOT EXISTS patients (
    patient_id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(60) NOT NULL,
    middlename VARCHAR(60) NULL,
    lastname VARCHAR(60) NOT NULL,
    gender VARCHAR(45) NOT NULL,
    phone BIGINT(10) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    dob DATE NULL,
    bloodgroup VARCHAR(45) NULL,
    address VARCHAR(60) NULL,
    country VARCHAR(45) NULL,
    state VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    status VARCHAR(45) NULL,
    street1 VARCHAR(45) NULL,
    street2 VARCHAR(45) NULL,
    zipcode MEDIUMINT(6) NULL,
    UNIQUE INDEX patient_id_UNIQUE (patient_id ASC),
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    UNIQUE INDEX email_UNIQUE (email ASC));
`;

const createLabagentsTableQuery = `
CREATE TABLE IF NOT EXISTS labagents (
    labagent_id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(60) NOT NULL,
    lastname VARCHAR(60) NOT NULL,
    gender VARCHAR(45) NOT NULL,
    phone BIGINT(10) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    labname VARCHAR(60) NOT NULL,
    address VARCHAR(60) NOT NULL,
    state VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    UNIQUE INDEX labagent_id_UNIQUE (labagent_id ASC),
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    UNIQUE INDEX email_UNIQUE (email ASC));
`;

const createCentersTableQuery = `
CREATE TABLE IF NOT EXISTS centers (
    center_id INT NOT NULL AUTO_INCREMENT,
    centername VARCHAR(60) NOT NULL,
    phone BIGINT(10) NOT NULL,
    email VARCHAR(60) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fromtiming VARCHAR(45) NOT NULL,
    totiming VARCHAR(45) NOT NULL,
    address VARCHAR(60) NOT NULL,
    state VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    UNIQUE INDEX center_id_UNIQUE (center_id ASC),
    UNIQUE INDEX phone_UNIQUE (phone ASC),
    UNIQUE INDEX email_UNIQUE (email ASC));
`;

const createLabsTableQuery = `
CREATE TABLE IF NOT EXISTS labs (
    lab_id INT NOT NULL AUTO_INCREMENT,
    labname VARCHAR(60) NOT NULL,
    address VARCHAR(60) NOT NULL,
    state VARCHAR(45) NOT NULL,
    city VARCHAR(45) NOT NULL,
    fromtiming VARCHAR(45) NOT NULL,
    totiming VARCHAR(45) NOT NULL,
    UNIQUE INDEX lab_id_UNIQUE (lab_id ASC));
`;

const createAppointmentsTableQuery = `
CREATE TABLE IF NOT EXISTS appointments (
    appointment_id INT NOT NULL AUTO_INCREMENT,
    patient VARCHAR(60) NOT NULL,
    appointment VARCHAR(45) NOT NULL,
    center VARCHAR(45) NOT NULL,
    date DATE NOT NULL,
    time VARCHAR(45) NOT NULL,
    UNIQUE INDEX appointment_id_UNIQUE (appointment_id ASC));
`;

const createPackagesTableQuery = `
CREATE TABLE IF NOT EXISTS packages (
    package_id INT NOT NULL AUTO_INCREMENT,
    packagename VARCHAR(60) NOT NULL,
    packagedescription TINYTEXT NOT NULL,
    amount SMALLINT(5) NOT NULL,
    imageurl TINYTEXT NULL,
    service1 VARCHAR(60) NULL,
    service2 VARCHAR(60) NULL,
    service3 VARCHAR(60) NULL,
    service4 VARCHAR(60) NULL,
    service5 VARCHAR(60) NULL,
    service6 VARCHAR(60) NULL,
    service7 VARCHAR(60) NULL,
    service8 VARCHAR(60) NULL,
    service9 VARCHAR(60) NULL,
    service10 VARCHAR(60) NULL,
    UNIQUE INDEX package_id_UNIQUE (package_id ASC));
`;

const createMailboxTableQuery = `
CREATE TABLE IF NOT EXISTS sentmailbox (
    mail_id INT NOT NULL AUTO_INCREMENT,
    fromemail VARCHAR(60) NOT NULL, 
    toemail VARCHAR(45) NOT NULL,
    message LONGTEXT NOT NULL,
    subject VARCHAR(60) NOT NULL,
    date DATE NOT NULL,
    time VARCHAR(45) NOT NULL,
    status VARCHAR(45) NOT NULL,
    UNIQUE INDEX mail_id_UNIQUE (mail_id ASC));
`;

const createAssementTableQuery=`
CREATE TABLE IF NOT EXISTS assessments (
    assement_id INT NOT NULL,
    assessment VARCHAR(60) NOT NULL,
    plans VARCHAR(60) NOT NULL,
    FOREIGN KEY (assement_id) REFERENCES appointments(appointment_id)
  )
`
const createPhysicalExam2Query = `
CREATE TABLE IF NOT EXISTS physicalexam2 (
    physical2_id INT NOT NULL,
    Masses VARCHAR(60) NOT NULL,
    \`Range of Motion\` VARCHAR(60) NOT NULL,
    \`Spine - trachea deviation\` VARCHAR(60) NOT NULL,
    \`Thyroid size\` VARCHAR(60) NOT NULL,
    \`Chest symmetry with respirations\` VARCHAR(60) NOT NULL,
    Wheezes VARCHAR(60) NOT NULL,
    Crackles VARCHAR(60) NOT NULL,
    \`Vocal Ferritus\` VARCHAR(60) NOT NULL,
    Rate VARCHAR(60) NOT NULL,
    Rhythm VARCHAR(60) NOT NULL,
    Murmurs VARCHAR(60) NOT NULL,
    Rubs VARCHAR(60) NOT NULL,
    Gallops VARCHAR(60) NOT NULL,
    Clicks VARCHAR(60) NOT NULL,
    \`Precordial Movements\` VARCHAR(60) NOT NULL,
    Shape VARCHAR(60) NOT NULL,
    Scars VARCHAR(60) NOT NULL,
    \`Bowel sounds\` VARCHAR(60) NOT NULL,
    Consistency VARCHAR(60) NOT NULL,
    \`Abdomen Tenderness\` VARCHAR(60) NOT NULL,
    Rebound VARCHAR(60) NOT NULL,
    \`Abdomen Masses\` VARCHAR(60) NOT NULL,
    Gaurding VARCHAR(60) NOT NULL,
    \`Spleen Size\` VARCHAR(60) NOT NULL,
    \`Liver Span\` VARCHAR(60) NOT NULL,
    Ercussion VARCHAR(60) NOT NULL,
    \`Costovertebral Tenderness\` VARCHAR(60) NOT NULL,
    \`Skin Changes\` VARCHAR(60) NOT NULL,
    Symmetry VARCHAR(60) NOT NULL,
    Tenderness VARCHAR(60) NOT NULL,
    \`Breasts Masses\` VARCHAR(60) NOT NULL,
    Dimpling VARCHAR(60) NOT NULL,
    Rashes VARCHAR(60) NOT NULL,
    Ulcers VARCHAR(60) NOT NULL,
    \`Genitourinary Scars\` VARCHAR(60) NOT NULL,
    Nodules VARCHAR(60) NOT NULL,
    Induration VARCHAR(60) NOT NULL,
    Discharge VARCHAR(60) NOT NULL,
    \`Scrotal Masses\` VARCHAR(60) NOT NULL,
    Carotid VARCHAR(60) NOT NULL,
    Radial VARCHAR(60) NOT NULL,
    Femoral VARCHAR(60) NOT NULL,
    Popliteal VARCHAR(60) NOT NULL,
    \`Posterior tibial\` VARCHAR(60) NOT NULL,
    \`Dorsalis pedis pulses\` VARCHAR(60) NOT NULL,
    \`Carotid Bruits\` VARCHAR(60) NOT NULL,
    \`Jugular Venous Distension\` VARCHAR(60) NOT NULL,
    Edema VARCHAR(60) NOT NULL,
    \`Varicosa Veins\` VARCHAR(60) NOT NULL,
    \`Cervical Infraclavicular\` VARCHAR(60) NOT NULL,
    Axillary VARCHAR(60) NOT NULL,
    Trochlear VARCHAR(60) NOT NULL,
    \`Cranial nerves\` VARCHAR(60) NOT NULL,
    Sensation VARCHAR(60) NOT NULL,
    Strength VARCHAR(60) NOT NULL,
    Reflexes VARCHAR(60) NOT NULL,
    Cerebellum VARCHAR(60) NOT NULL,
    Gait VARCHAR(60) NOT NULL,
    \`Sphincter tone\` VARCHAR(60) NOT NULL,
    \`Prostate consistency\` VARCHAR(60) NOT NULL,
    \`Masses Occult Stool Bicod\` VARCHAR(60) NOT NULL,
    \`Muscle Atrophy\` VARCHAR(60) NOT NULL,
    Weakness VARCHAR(60) NOT NULL,
    \`Joint ange of motion\` VARCHAR(60) NOT NULL,
    Instability VARCHAR(60) NOT NULL,
    Redness VARCHAR(60) NOT NULL,
    Swelling VARCHAR(60) NOT NULL,
    \`Musculoskeletal Tenderness\` VARCHAR(60) NOT NULL,
    \`Spine Deviation\` VARCHAR(60) NOT NULL,
    \`Musculoskeletal Gait\` VARCHAR(60) NOT NULL,
    FOREIGN KEY (physical2_id) REFERENCES appointments(appointment_id)

)
`;
const createPhysicalExam1Query=`
CREATE TABLE IF NOT EXISTS physicalexam1 (
    physical1_id INT NOT NULL,
    \`Blood Pressure\` VARCHAR(60) NOT NULL,
    Pulse VARCHAR(60) NOT NULL,
    Respirations VARCHAR(60) NOT NULL,
    Temperature VARCHAR(60) NOT NULL,
    \`State of Health\` VARCHAR(60) NOT NULL,
    Stature VARCHAR(60) NOT NULL,
    Dress VARCHAR(60) NOT NULL, 
    Hygiene VARCHAR(60) NOT NULL,
    \`Skin scars\` VARCHAR(60) NOT NULL,
    Rashes VARCHAR(60) NOT NULL,
    Bruises VARCHAR(60) NOT NULL,
    Tattoos VARCHAR(60) NOT NULL,
    \`Hair Consistency\` VARCHAR(60) NOT NULL,
    \`Nail Pitting\` VARCHAR(60) NOT NULL,
    selectedValue VARCHAR(60) NOT NULL,
    \`Pupil size\` VARCHAR(60) NOT NULL,
    Shape VARCHAR(60) NOT NULL,
    Reactivity VARCHAR(60) NOT NULL,
    Conjunctival VARCHAR(60) NOT NULL,
    \`Scelral icterus\` VARCHAR(60) NOT NULL,
    \`Fundal Papiledema\` VARCHAR(60) NOT NULL,
    Hemorrhage VARCHAR(60) NOT NULL,
    Lids VARCHAR(60) NOT NULL,
    \`Extraocular Movements\` VARCHAR(60) NOT NULL,
    \`Visual Fields\` VARCHAR(60) NOT NULL,
    Acuity VARCHAR(60) NOT NULL,
    \`Shape - Symmetry\` VARCHAR(60) NOT NULL,
    Tenderness VARCHAR(60) NOT NULL,
    Discharge VARCHAR(60) NOT NULL,
    \`External Canal\` VARCHAR(60) NOT NULL,
    \`Tympanic Membrone Inflammation\` VARCHAR(60) NOT NULL,
    \`Gross Auditory Acuity\` VARCHAR(60) NOT NULL,
    Symmetry VARCHAR(60) NOT NULL,
    \`Nose-Tenderness\` VARCHAR(60) NOT NULL,
    \`Nose-Discharge\` VARCHAR(60) NOT NULL,
    Mucosa VARCHAR(60) NOT NULL,
    \`Turbinate Inflammation\` VARCHAR(60) NOT NULL,
    \`Frontal Maxillary Sinus Tenderness\` VARCHAR(60) NOT NULL,
    \`Mouth Hygiene\` VARCHAR(60) NOT NULL,
    Dentures VARCHAR(60) NOT NULL,
    Erythema VARCHAR(60) NOT NULL,
    Exudates VARCHAR(60) NOT NULL,
    FOREIGN KEY (physical1_id) REFERENCES appointments(appointment_id)
)`
const createReviewSystem2Query=`
    CREATE TABLE IF NOT EXISTS reviewsystem2 (
        review2_id INT NOT NULL ,
        \`Skin Changes\` VARCHAR(60) NOT NULL,
        \`Masses/lumps\` VARCHAR(60) NOT NULL,
        \`Breast Pain\` VARCHAR(60) NOT NULL,
        Discharge VARCHAR(60) NOT NULL,
        \`Self Exams\` VARCHAR(60) NOT NULL,
        \`Shortness of Breath\` VARCHAR(60) NOT NULL,
        Wheeze VARCHAR(60) NOT NULL,
        Cough VARCHAR(60) NOT NULL,
        Sputum VARCHAR(60) NOT NULL,
        Hemoptysis VARCHAR(60) NOT NULL,
        Pneumonia VARCHAR(60) NOT NULL,
        Asthma VARCHAR(60) NOT NULL,
        Bronchitis VARCHAR(60) NOT NULL,
        Emphysema VARCHAR(60) NOT NULL,
        Tuberculosis VARCHAR(60) NOT NULL,
        \`Last Chest X-ray\` VARCHAR(60) NOT NULL,
        Hypertension VARCHAR(60) NOT NULL,
        Murmurs VARCHAR(60) NOT NULL,
        Angina VARCHAR(60) NOT NULL,
        Palpitation VARCHAR(60) NOT NULL,
        \`Dyspnea on exertion\` VARCHAR(60) NOT NULL,
        Orthopnea VARCHAR(60) NOT NULL,
        \`Paroxysmal nocturnal dyspnea\` VARCHAR(60) NOT NULL,
        Edema VARCHAR(60) NOT NULL,
        \`Last EKG\` VARCHAR(60) NOT NULL,
        Appetite VARCHAR(60) NOT NULL,
        Nausea VARCHAR(60) NOT NULL,
        Vomiting VARCHAR(60) NOT NULL,
        Indigestion VARCHAR(60) NOT NULL,
        Dysphagia VARCHAR(60) NOT NULL,
        \`Bowel Movement\` VARCHAR(60) NOT NULL,
        \`Frequency Change\` VARCHAR(60) NOT NULL,
        \`Stool Color\` VARCHAR(60) NOT NULL,
        Diarrhea VARCHAR(60) NOT NULL,
        Constipation VARCHAR(60) NOT NULL,
        \`Bleeding - Hemetemesis\` VARCHAR(60) NOT NULL,
        \`Bleeding - Hemorrhoids\` VARCHAR(60) NOT NULL,
        \`Bleeding - Melena or Hematechezia\` VARCHAR(60) NOT NULL,
        \`Abdominal Pain\` VARCHAR(60) NOT NULL,
        Jaundice VARCHAR(60) NOT NULL,
        Hepatic VARCHAR(60) NOT NULL,
        Frequency VARCHAR(60) NOT NULL,
        Hesitancy VARCHAR(60) NOT NULL,
        Urgency VARCHAR(60) NOT NULL,
        Polyuria VARCHAR(60) NOT NULL,
        Dysuria VARCHAR(60) NOT NULL,
        Hematuria VARCHAR(60) NOT NULL,
        Nocturia VARCHAR(60) NOT NULL,
        Incontinence VARCHAR(60) NOT NULL,
        Stones VARCHAR(60) NOT NULL,
        Infection VARCHAR(60) NOT NULL,
        \`Muscle Weakness\` VARCHAR(60) NOT NULL,
        \`Musculoskeletal Pain\` VARCHAR(60) NOT NULL,
        \`Joint Stiffness\` VARCHAR(60) NOT NULL,
        \`Range of Motion\` VARCHAR(60) NOT NULL,
        Instability VARCHAR(60) NOT NULL,
        Redness VARCHAR(60) NOT NULL,
        Swelling VARCHAR(60) NOT NULL,
        Arthritis VARCHAR(60) NOT NULL,
        Gout VARCHAR(60) NOT NULL,
        FOREIGN KEY (review2_id) REFERENCES appointments(appointment_id)
    ) `

const createReviewSystem3Query = `
   CREATE TABLE IF NOT EXISTS reviewsystem3 (
    review3_id INT NOT NULL,
  \`Penile discharge sore\` VARCHAR(60) NOT NULL,
  \`Testicular pain or masses\` VARCHAR(60) NOT NULL,
  Hernias VARCHAR(60) NOT NULL,
  Menarch VARCHAR(60) NOT NULL,
  \`Period regularity\` VARCHAR(60) NOT NULL,
  Frequency VARCHAR(60) NOT NULL,
  Duration VARCHAR(60) NOT NULL,
  Dysmennorhea VARCHAR(60) NOT NULL,
  \`Last Period\` VARCHAR(60) NOT NULL,
  Itching VARCHAR(60) NOT NULL,
  Discharge VARCHAR(60) NOT NULL,
  Sores VARCHAR(60) NOT NULL,
  \`Pregnancies and Complications\` VARCHAR(60) NOT NULL,
  \`Miscarriages - Abortions\` VARCHAR(60) NOT NULL,
  \`Birth Control\` VARCHAR(60) NOT NULL,
  Menopause VARCHAR(60) NOT NULL,
  \`Hot flashes - Sweats\` VARCHAR(60) NOT NULL,
  \`STD History - treatment\` VARCHAR(60) NOT NULL,
  \`Sex interest\` VARCHAR(60) NOT NULL,
  \`Function problems\` VARCHAR(60) NOT NULL,
  \`Contraception methods\` VARCHAR(60) NOT NULL,
  \`Heat cold intolerance\` VARCHAR(60) NOT NULL,
  \`Excessive Sweating\` VARCHAR(60) NOT NULL,
  Polyuria VARCHAR(60) NOT NULL,
  Polydipsia VARCHAR(60) NOT NULL,
  Polyphagia VARCHAR(60) NOT NULL,
  \`Thyroid Problems\` VARCHAR(60) NOT NULL,
  Diabetes VARCHAR(60) NOT NULL,
  Anaemia VARCHAR(60) NOT NULL,
  \`Easy bruising - bleeding\` VARCHAR(60) NOT NULL,
  Petechia VARCHAR(60) NOT NULL,
  Purpura VARCHAR(60) NOT NULL,
  Transfusions VARCHAR(60) NOT NULL,
  \`Loss of sensation - numbness\` VARCHAR(60) NOT NULL,
  Tingling VARCHAR(60) NOT NULL,
  Tremors VARCHAR(60) NOT NULL,
  Weakness VARCHAR(60) NOT NULL,
  \`Paralysis Fainting\` VARCHAR(60) NOT NULL,
  Blackouts VARCHAR(60) NOT NULL,
  Seizures VARCHAR(60) NOT NULL,
  Mood VARCHAR(60) NOT NULL,
  Anxiety VARCHAR(60) NOT NULL,
  Depression VARCHAR(60) NOT NULL,
  Tension VARCHAR(60) NOT NULL,
  Memory VARCHAR(60) NOT NULL,
  \`Leg edema\` VARCHAR(60) NOT NULL,
  Claudication VARCHAR(60) NOT NULL,
  \`Varicose veins\` VARCHAR(60) NOT NULL,
  \`Thromboses - emboli\` VARCHAR(60) NOT NULL,
  FOREIGN KEY (review3_id) REFERENCES appointments(appointment_id)
)`
const createHistory1TableQuery =`
CREATE TABLE IF NOT EXISTS emrhistory1 (
    history1_id INT NOT NULL,
    date DATE NOT NULL,
    present_illness VARCHAR(255) NULL,
    onset VARCHAR(60) NULL,
    duration VARCHAR(45) NULL,
    frequency VARCHAR(45) NULL,
    location VARCHAR(60) NULL,
    quality VARCHAR(60) NULL,
    severity VARCHAR(45) NULL,
    aggravating_factors VARCHAR(255) NULL,
    alleviating_factors VARCHAR(255) NULL,
    associated_symptoms VARCHAR(255) NULL,
    UNIQUE INDEX history1_id_UNIQUE (history1_id ASC),
    FOREIGN KEY (history1_id) REFERENCES appointments(appointment_id)); 
`
const createHistory2TableQuery = `
CREATE TABLE IF NOT EXISTS emrhistory2 (
    history2_id INT NOT NULL,
    diabetes VARCHAR(255) NULL,
    heartdisease VARCHAR(255) NULL,
    heartdisease_desc VARCHAR(255) NULL,
    hypertension VARCHAR(255) NULL,
    stroke VARCHAR(255) NULL,
    asthama VARCHAR(255) NULL,
    asthama_desc VARCHAR(255) NULL,
    cancer VARCHAR(255) NULL,
    arthritis VARCHAR(255) NULL,
    tuberculosis VARCHAR(255) NULL,
    epilepsy VARCHAR(255) NULL,
    epilepsy_desc VARCHAR(255) NULL,
    operation_date VARCHAR(255) NULL,
    operation_type VARCHAR(255) NULL,
    operation_reason VARCHAR(255) NULL,
    operation_outcome VARCHAR(255) NULL,
    operation_complication VARCHAR(255) NULL,
    polio VARCHAR(255) NULL,
    measles VARCHAR(45) NULL,
    mumps VARCHAR(45) NULL,
    rubella VARCHAR(45) NULL,
    whooping_cough VARCHAR(45) NULL,
    chicken_pox VARCHAR(45) NULL,
    rheumatic_fever VARCHAR(45) NULL,
    bcg VARCHAR(45) NULL,
    mmr VARCHAR(45) NULL,
    polio_immune VARCHAR(45) NULL,
    hepatitis VARCHAR(45) NULL,
    influenza VARCHAR(45) NULL,
    pneumonia VARCHAR(45) NULL,
    varicella VARCHAR(45) NULL,
    motor_vehicle_accidents VARCHAR(255) NULL,
    motor_vehicle_accidents_desc VARCHAR(255) NULL,
    blood_group VARCHAR(255) NULL,
    blood_transfusions_received VARCHAR(255) NULL,
    blood_transfusions_given VARCHAR(255) NULL,
    hospitalizations VARCHAR(255) NULL,
    hospitalized_date VARCHAR(255) NULL,
    hospitalized_reason VARCHAR(255) NULL,
    hospitalized_outcome VARCHAR(255) NULL,
    parents_living VARCHAR(255) NULL,
    cause_of_death VARCHAR(255) NULL,
    siblings VARCHAR(255) NULL,
    medical_issues_with_siblings VARCHAR(255) NULL,
    no_of_children VARCHAR(255) NULL,
    medical_issues_with_children VARCHAR(255) NULL,
    spouse VARCHAR(255) NULL,
    hemoccults VARCHAR(255) NULL,
    blood_pressure VARCHAR(255) NULL,
    xray_chest VARCHAR(255) NULL,
    hepotitis_b VARCHAR(255) NULL,
    cholestorol_screen VARCHAR(255) NULL,
    basic_metabolic_panel VARCHAR(255) NULL,
    foot_exam VARCHAR(255) NULL,
    tuberculin_skin_test VARCHAR(255) NULL,
    random_blood_sugar VARCHAR(255) NULL,
    vision_check VARCHAR(255) NULL,
    hepatitis_c VARCHAR(255) NULL,
    pap_smear VARCHAR(255) NULL,
    liver_function_tests VARCHAR(255) NULL,
    hepotitis_a VARCHAR(255) NULL,
    urine_analysis VARCHAR(255) NULL,
    CBC_with_differential VARCHAR(255) NULL,
    diabetics_urine VARCHAR(255) NULL,
    hiv VARCHAR(255) NULL,
    living_accommodations VARCHAR(255) NULL,
    birthplace VARCHAR(255) NULL,
    education VARCHAR(255) NULL,
    hobbies VARCHAR(255) NULL,
    religion VARCHAR(255) NULL,
    persons_at_home VARCHAR(255) NULL,
    employment VARCHAR(255) NULL,
    diet VARCHAR(255) NULL,
    marriage_divorce VARCHAR(255) NULL,
    exercise VARCHAR(255) NULL,
    secondary_smoking VARCHAR(255) NULL,
    history_of_secondary_smoking VARCHAR(255) NULL,
    tobacco VARCHAR(45) NULL,
    tobacco_no_of_years VARCHAR(45) NULL,
    drugs VARCHAR(45) NULL,
    drugs_no_of_years VARCHAR(45) NULL,
    alcohol VARCHAR(45) NULL,
    alcohol_no_of_years VARCHAR(45) NULL,
    UNIQUE INDEX history2_id_UNIQUE (history2_id ASC),
    FOREIGN KEY (history2_id) REFERENCES appointments(appointment_id));
`

const createMedicationsTableQuery = `
CREATE TABLE IF NOT EXISTS  emrmedication (
    medications_id INT NOT NULL,
    medications VARCHAR(255) NULL,
    medicine_type VARCHAR(255) NULL,
    medicine_name VARCHAR(255) NULL,
    dose VARCHAR(45) NULL,
    frequency VARCHAR(45) NULL,
    duration VARCHAR(45) NULL,
    reason_for_taking VARCHAR(255) NULL,
    compliance VARCHAR(255) NULL,
    takes_as_prescribed VARCHAR(255) NULL,
    allergies VARCHAR(45) NULL,
    allergic_reaction VARCHAR(255) NULL,
    allergy_type VARCHAR(255) NULL,
    UNIQUE INDEX medications_id_UNIQUE (medications_id ASC),
    FOREIGN KEY (medications_id) REFERENCES appointments(appointment_id));
`

const createReviewSystem1TableQuery = `
CREATE TABLE IF NOT EXISTS reviewsystem1 (
    review1_id INT NOT NULL,
    weight_change VARCHAR(45) NULL,
    weight_change_in_kg INT NULL,
    weight_change_time VARCHAR(45) NULL,
    fatigue VARCHAR(45) NULL,
    weakness VARCHAR(45) NULL,
    fever VARCHAR(45) NULL,
    chills VARCHAR(45) NULL,
    night_sweats VARCHAR(45) NULL,
    Skin VARCHAR(255) NULL,
    Hair VARCHAR(255) NULL,
    \`Nail Changes\` VARCHAR(255) NULL,
    \`Itching Skin\` VARCHAR(255) NULL,
    Rashes VARCHAR(255) NULL,
    Sores VARCHAR(255) NULL,
    Lumps VARCHAR(255) NULL,
    trauma VARCHAR(45) NULL,
    trauma_desc VARCHAR(255) NULL,
    headache VARCHAR(45) NULL,
    location VARCHAR(255) NULL,
    frequency VARCHAR(255) NULL,
    vomiting VARCHAR(255) NULL,
    nausea VARCHAR(255) NULL,
    visual_changes VARCHAR(255) NULL,
    Glasses VARCHAR(255) NULL,
    \`Contact Lenses\` VARCHAR(255) NULL,
    Blurriness VARCHAR(255) NULL,
    Tearing VARCHAR(255) NULL,
    \`Itching Eyes\` VARCHAR(255) NULL,
    \`Acute Visual Loss\` VARCHAR(255) NULL,
    Rhinorrhea VARCHAR(255) NULL,
    Stuffiness VARCHAR(255) NULL,
    Sneezing VARCHAR(255) NULL,
    Allergy VARCHAR(255) NULL,
    \`Itching Nose\` VARCHAR(255) NULL,
    Epistaxis VARCHAR(255) NULL,
    \`Bleeding Gums\` VARCHAR(255) NULL,
    Hoarseness VARCHAR(255) NULL,
    \`Soar Throat\` VARCHAR(255) NULL,
    \`Swollen Neck\` VARCHAR(255) NULL,
    UNIQUE INDEX review1_id_UNIQUE (review1_id ASC),
    FOREIGN KEY (review1_id) REFERENCES appointments(appointment_id));
`

module.exports = {
  createAdminTableQuery,  
  insertAdminTableQuery,
  createHistory1TableQuery,  
  createHistory2TableQuery,
  createDatabaseQuery,
  useDatabaseQuery,
  createDoctorsTableQuery,
  createPatientsTableQuery,
  createLabagentsTableQuery,
  createCentersTableQuery,
  createLabsTableQuery,
  createAppointmentsTableQuery,
  createPackagesTableQuery,
  createMailboxTableQuery,
  createReviewSystem3Query,  
  createReviewSystem2Query,  
  createPhysicalExam1Query,
  createPhysicalExam2Query,
  createAssementTableQuery,
  createMedicationsTableQuery,
  createReviewSystem1TableQuery
};
