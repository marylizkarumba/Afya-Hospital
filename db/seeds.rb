puts "👨‍⚕️👩‍⚕️ Seeding Doctors"

Doctor.create([
  {
    name: Faker::Name.name,
    address: Faker::Address.street_address,
    department: "Cardiologist",
    email: Faker::Internet.email,
    image_url: "https://images.pexels.com/photos/8376271/pexels-photo-8376271.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: Faker::Name.name,
    address: Faker::Address.street_address,
    department: "Neurologist",
    email: Faker::Internet.email,
    image_url: "https://images.pexels.com/photos/5722163/pexels-photo-5722163.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: Faker::Name.name,
    address: Faker::Address.street_address,
    department: "Gynecologist",
    email: Faker::Internet.email,
    image_url: "https://images.pexels.com/photos/5452291/pexels-photo-5452291.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: Faker::Name.name,
    address: Faker::Address.street_address,
    department: "Child Specialist",
    email: Faker::Internet.email,
    image_url: "https://images.pexels.com/photos/12889997/pexels-photo-12889997.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
])

puts "Done seeding Doctors"

puts "🤒🤒 Seeding Patients"
Patient.create([
  {
    name: Faker::Name.name,
    age: rand(1..56),
    address: Faker::Address.street_address,
    email: Faker::Internet.email
  },
  {
    name: Faker::Name.name,
    age: rand(1..56),
    address: Faker::Address.street_address,
    email: Faker::Internet.email
  },
  {
    name: Faker::Name.name,
    age: rand(1..56),
    address: Faker::Address.street_address,
    email: Faker::Internet.email
  },
  {
    name: Faker::Name.name,
    age: rand(1..56),
    address: Faker::Address.street_address,
    email: Faker::Internet.email
  }
])

puts "Done seeding Patients"

puts "🚑🚑 Seeding Services"

Service.create([
  {
    name: "Optical Services",
    description: "Opticians help fit people for eyeglasses and contact lenses, processing and following prescriptions from optometrists and ophthalmologists. Opticians also help visually-challenged patients select the right pair of lenses or contacts for their needs.",
    image_url: "https://images.pexels.com/photos/5996611/pexels-photo-5996611.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Dental Services",
    description: "Dentistry, the profession concerned with the prevention and treatment of oral disease, including diseases of the teeth and supporting structures and diseases of the soft tissues of the mouth.",
    image_url: "https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Dermatology Services",
    description: "A dermatologist is a medical doctor who specializes in conditions that affect the skin, hair, and nails.",
    image_url: "https://images.pexels.com/photos/7446683/pexels-photo-7446683.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Cardiology Services",
    description: "Cardiology is a branch of medicine that deals with disorders of the heart and the cardiovascular system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology",
    image_url: "https://media.istockphoto.com/photos/heart-on-heart-rhythm-background-concept-picture-id1257645087?b=1&k=20&m=1257645087&s=612x612&w=0&h=WccELEUn_Fb76F54VNHOmFS9m2B7YGcwymPDdOyC9zY="
  },
  {
    name: "Radiology Services",
    description: "Radiology is the medical discipline that uses medical imaging to diagnose diseases and guide their treatment, within the bodies of humans.",
    image_url: "https://media.istockphoto.com/photos/female-doctor-examining-patients-chest-xray-at-the-hospital-picture-id1218725091?b=1&k=20&m=1218725091&s=612x612&w=0&h=FMsRvVIz9hhNWA05hiHsa4xR5MwVHGtxamKBn3KrpkI="
  },
  {
    name: "Obstetric Services",
    description: "A branch of medicine that specializes in the care of women during pregnancy and childbirth and in the diagnosis and treatment of diseases of the female reproductive organs. It also specializes in other women's health issues, such as menopause, hormone problems, contraception (birth control), and infertility.",
    image_url: "https://images.pexels.com/photos/9765437/pexels-photo-9765437.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Neurology Services",
    description: "Neurologists are specialists who treat diseases of the brain and spinal cord, peripheral nerves and muscles. Neurological conditions include epilepsy, stroke, multiple sclerosis (MS) and Parkinson's disease.",
    image_url: "https://cdn.pixabay.com/photo/2014/10/02/09/12/doctor-469590__340.jpg"
  },
  {
    name: "Pharmaceutical Services",
    description: "Pharmacists provide optimal management of medication for chronic diseases such as diabetes, asthma, hypertension, etc. The collaboration of healthcare professionals, such as physicians and pharmacists, can help to ensure that patients properly take their medications as prescribed and avoid any harmful effects.",
    image_url: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
])
