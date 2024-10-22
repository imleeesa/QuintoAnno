let jdata;
let inputTable = "<tr><th>Ore</th><th>Materia</th><th>Codice Materia</th><th>Sede</th><th>Modulo</th><th>Professore</th><th>Gruppo</th><th>Aula</th><th>Settimana</th><th>Giorno</th><th>Orario</th></tr>";
fetch("http://localhost:3000/LESSONS")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    jdata = data;
    console.log(jdata);
    let table = document.getElementById('table');
    table.innerHTML = inputTable;
    for (let i = 0; i < jdata.length; i++) {
      let row = table.insertRow();
      row.innerHTML = "<td>" + jdata[i].DURATION + "</td><td>" + jdata[i].SUBJECT + "</td><td>" + jdata[i].SUBJECTCODE + "</td><td>" + jdata[i].SITE + "</td><td>" + jdata[i].MODULE + "</td><td>" + jdata[i].TEACHER + "</td><td>" + jdata[i].GROUP + "</td><td>" + jdata[i].ROOM + "</td><td>" + jdata[i].WEEK + "</td><td>" + jdata[i].DAY + "</td><td>" + jdata[i].TIME + "</td>";
    }

    let uniqueGroups = [...new Set(jdata.map(item => item.GROUP))];
    let groupSelect = document.getElementById('class-select');
    uniqueGroups.forEach(group => {
      groupSelect.innerHTML += `<option value="${group}">${group}</option>`;
    });

    groupSelect.addEventListener('change', function () {
      let value = this.value;
      let table = document.getElementById('table');
      table.innerHTML = inputTable;
      for (let i = 0; i < jdata.length; i++) {
        if (jdata[i].GROUP == value) {
          let row = table.insertRow();
          row.innerHTML = "<td>" + jdata[i].DURATION + "</td><td>" + jdata[i].SUBJECT + "</td><td>" + jdata[i].SUBJECTCODE + "</td><td>" + jdata[i].SITE + "</td><td>" + jdata[i].MODULE + "</td><td>" + jdata[i].TEACHER + "</td><td>" + jdata[i].GROUP + "</td><td>" + jdata[i].ROOM + "</td><td>" + jdata[i].WEEK + "</td><td>" + jdata[i].DAY + "</td><td>" + jdata[i].TIME + "</td>";
        }
      }
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
