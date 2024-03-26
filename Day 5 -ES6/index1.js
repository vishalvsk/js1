const resumeData = {
  name: "Vishal Karale",
  title: "Software Engineer",
  contact: {
    email: "vishalkaralevsk@example.com",
    phone: "+1234567890",
    address: "123 Main St, Ramling road , shirur, pune ",
  },
  summary:
    "Experienced software engineer with a passion for building robust and scalable applications.",
  experience: [
    {
      position: "Developer",
      company: "Tech Solutions Inc.",
      startDate: "2018",
      endDate: "Present",
      responsibilities: [
        "Lead a team of developers in designing and implementing software solutions.",
        "Developed and maintained critical systems for clients in various industries.",
        "Collaborated with cross-functional teams to deliver high-quality products.",
      ],
    },
    {
      position: "intern Developer",
      company: "CodeCrafters LLC",
      startDate: "2015",
      endDate: "2018",
      responsibilities: [
        "Contributed to the development of front-end and back-end systems.",
        "Participated in code reviews and provided technical guidance to junior developers.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "SPPU",
      graduationYear: "2015",
    },
  ],
  skills: ["JavaScript", "Node.js", "React", "Python", "SQL", "HTML", "CSS"],
};

// print that resume data -

console.log(resumeData);




// Using for loop
console.log("Using for loop:");
for (let key in resumeData) {
  console.log(`${key}:`);
  if (Array.isArray(resumeData[key])) {
    for (let i = 0; i < resumeData[key].length; i++) {
      if (typeof resumeData[key][i] === "object") {
        for (let prop in resumeData[key][i]) {
          console.log(`  ${prop}: ${resumeData[key][i][prop]}`);
        }
      } else {
        console.log(`  ${resumeData[key][i]}`);
      }
    }
  } else if (typeof resumeData[key] === "object") {
    for (let prop in resumeData[key]) {
      console.log(`  ${prop}: ${resumeData[key][prop]}`);
    }
  } else {
    console.log(`  ${resumeData[key]}`);
  }
}



// Using for...in loop
console.log("Using for...in loop:");
for (let key in resumeData) {
  if (Array.isArray(resumeData[key])) {
    console.log(`${key}:`);
    resumeData[key].forEach(item => {
      if (typeof item === "object") {
        for (let prop in item) {
          console.log(`  ${prop}: ${item[prop]}`);
        }
      } else {
        console.log(`  ${item}`);
      }
    });
  } else if (typeof resumeData[key] === "object") {
    console.log(`${key}:`);
    for (let prop in resumeData[key]) {
      console.log(`  ${prop}: ${resumeData[key][prop]}`);
    }
  } else {
    console.log(`${key}: ${resumeData[key]}`);
  }
}

// Using for...of loop (only works with iterable objects, not objects directly)
console.log("\nUsing for...of loop:");
for (let key of Object.keys(resumeData)) {
  if (Array.isArray(resumeData[key])) {
    console.log(`${key}:`);
    resumeData[key].forEach(item => {
      if (typeof item === "object") {
        for (let prop of Object.keys(item)) {
          console.log(`  ${prop}: ${item[prop]}`);
        }
      } else {
        console.log(`  ${item}`);
      }
    });
  } else if (typeof resumeData[key] === "object") {
    console.log(`${key}:`);
    for (let prop of Object.keys(resumeData[key])) {
      console.log(`  ${prop}: ${resumeData[key][prop]}`);
    }
  } else {
    console.log(`${key}: ${resumeData[key]}`);
  }
}

// Using forEach method (only works with arrays)
console.log("\nUsing forEach method:");
Object.keys(resumeData).forEach(key => {
  if (Array.isArray(resumeData[key])) {
    console.log(`${key}:`);
    resumeData[key].forEach(item => {
      if (typeof item === "object") {
        Object.keys(item).forEach(prop => {
          console.log(`  ${prop}: ${item[prop]}`);
        });
      } else {
        console.log(`  ${item}`);
      }
    });
  } else if (typeof resumeData[key] === "object") {
    console.log(`${key}:`);
    Object.keys(resumeData[key]).forEach(prop => {
      console.log(`  ${prop}: ${resumeData[key][prop]}`);
    });
  } else {
    console.log(`${key}: ${resumeData[key]}`);
  }
});

