const fs = require("fs");

fs.writeFile("student.txt", `Name: Tanish Suvarna
Course: Backend Development
Technology: Express`, (err) => {
  if (err) throw err;

  console.log("File created successfully");

  fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) throw err;

    console.log(data);

    fs.appendFile("student.txt", `
Experience: 1 Year
City: Mumbai`, (err) => {
      if (err) throw err;

      console.log("Data updated successfully");

      fs.rename("student.txt", "studentDetails.txt", (err) => {
        if (err) throw err;

        console.log("File renamed successfully");

        fs.unlink("studentDetails.txt", (err) => {
          if (err) throw err;

          console.log("File deleted successfully");
        });
      });
    });
  });
});