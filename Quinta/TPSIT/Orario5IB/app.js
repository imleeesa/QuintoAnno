let jdata;
let inputTable = "<tr><th>Ore</th><th>Materia</th><th>Professore</th> <th>Giorno</th><th>Orario</th><th>Professore IT</th></tr>"
fetch("http://localhost:3000/orario")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    let jstring = JSON.stringify(data);
    jdata = JSON.parse(jstring);
    console.log(jdata);
    let table = document.getElementById('table');
    table.innerHTML = inputTable;
    for (let i = 0; i < jdata.length; i++) {
      let row = table.insertRow();
      row.innerHTML = "<td>" + jdata[i].DURATION + "</td><td>" + jdata[i].SUBJECT + "</td><td>" + jdata[i].TEACHER0 + "</td><td>" + jdata[i].DAY + "</td>" + "</td><td>" + jdata[i].TIME + "</td>" + "</td><td>" + jdata[i].TEACHER1;
    }
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });


document.getElementById('option-select').addEventListener('change', function () {
  console.log(this.value);
  let divSelect = document.getElementById('various-options');
  divSelect.innerHTML = '';
  let hourCountDiv = document.querySelector('#hour-count');

  switch (this.value) {
    case '':
      for (let i = 0; i < jdata.length; i++) {
        let row = table.insertRow();
        row.innerHTML = "<td>" + jdata[i].DURATION + "</td><td>" + jdata[i].SUBJECT + "</td><td>" + jdata[i].TEACHER0 + "</td><td>" + jdata[i].DAY + "</td>" + "</td><td>" + jdata[i].TIME + "</td>" + "</td><td>" + jdata[i].TEACHER1;
      };
      break;
    case 'orariogiorno':
      let daySelect = document.createElement('select');
      daySelect.id = 'day-select';
      daySelect.innerHTML = `
            <option value="">--Scegli un giorno--</option>
            <option value="LUN">Lunedì</option>
            <option value="MAR">Martedì</option>
            <option value="MER">Mercoledì</option>
            <option value="GIO">Giovedì</option>
            <option value="VEN">Venerdì</option>
            <option value="Sabato">Sabato</option>
        `;
      divSelect.appendChild(daySelect);
      daySelect.addEventListener('change', function () {
        let value = this.value;
        let table = document.getElementById('table');
        table.innerHTML = inputTable;
        for (let i = 0; i < jdata.length; i++) {
          if (jdata[i].DAY == value) {
            let row = table.insertRow();
            row.innerHTML = "<td>" + jdata[i].DURATION + "</td><td>" + jdata[i].SUBJECT + "</td><td>" + jdata[i].TEACHER0 + "</td><td>" + jdata[i].DAY + "</td>" + "</td><td>" + jdata[i].TIME + "</td>" + "</td><td>" + jdata[i].TEACHER1;
          }
        }
      });
      break;
    case 'orariomateria':
      let subjectSelect = document.createElement('select');
      subjectSelect.id = 'subject-select';
      subjectSelect.innerHTML = `
                <option value="">--Scegli una materia--</option>
                <option value="LETTERE">Lettere</option>
                <option value="MATEMATICA">Matematica</option>
                <option value="GPOI">GPOI</option>
                <option value="INGLESE">Inglese</option>
                <option value="TPSIT">TPSIT</option>
                <option value="INFORMATICA">Informatica</option>
                <option value="SIST.RETI">Sistemi e Reti</option>
                <option value="SC.MOTORIE">Scienze Motorie</option>
                <option value="IRC">IRC</option>
            `;
      divSelect.appendChild(subjectSelect);

      subjectSelect.addEventListener('change', function () {
        let value = this.value;
        let table = document.getElementById('table');
        table.innerHTML = inputTable; // Reset the table to its initial state
        for (let i = 0; i < jdata.length; i++) {
          if (jdata[i].SUBJECT == value) {
            let row = table.insertRow();
            row.innerHTML = "<td>" + jdata[i].DURATION + "</td><td>" + jdata[i].SUBJECT + "</td><td>" + jdata[i].TEACHER0 + "</td><td>" + jdata[i].DAY + "</td>" + "</td><td>" + jdata[i].TIME + "</td>" + "</td><td>" + jdata[i].TEACHER1;
          }
        }
      });
      break;
    case 'numoremateria':
      let subjectHourSelect = document.createElement('select');
      subjectHourSelect.id = 'subject-select';
      subjectHourSelect.innerHTML = `
                <option value="">--Scegli una materia--</option>
                <option value="LETTERE">Lettere</option>
                <option value="MATEMATICA">Matematica</option>
                <option value="GPOI">GPOI</option>
                <option value="INGLESE">Inglese</option>
                <option value="TPSIT">TPSIT</option>
                <option value="INFORMATICA">Informatica</option>
                <option value="SIST.RETI">Sistemi e Reti</option>
                <option value="SC.MOTORIE">Scienze Motorie</option>
                <option value="IRC">IRC</option>
            `;
      divSelect.appendChild(subjectHourSelect);

      subjectHourSelect.addEventListener('change', function () {
        let value = this.value;
        let table = document.getElementById('table');
        let hourCount = 0;
        for (let i = 0; i < jdata.length; i++) {
          if (jdata[i].SUBJECT == value) {
            hourCount += parseInt(jdata[i].DURATION);
          }
        }
        hourCountDiv.innerHTML = `Numero di ore: ${hourCount}`;
        divSelect.appendChild(hourCountDiv);
        table.innerHTML = inputTable; // Reset the table to its initial state

        for (let i = 0; i < jdata.length; i++) {
          if (jdata[i].SUBJECT == value) {
            let row = table.insertRow();
            row.innerHTML = "<td>" + jdata[i].DURATION + "</td><td>" + jdata[i].SUBJECT + "</td><td>" + jdata[i].TEACHER0 + "</td><td>" + jdata[i].DAY + "</td>" + "</td><td>" + jdata[i].TIME + "</td>" + "</td><td>" + jdata[i].TEACHER1;
          }
        }

      });
      break;
    case 'numorelabmateria':
      let subjectLabSelect = document.createElement('select');
      subjectLabSelect.id = 'subject-select';
      subjectLabSelect.innerHTML = `
                <option value="">--Scegli una materia--</option>
                <option value="LETTERE">Lettere</option>
                <option value="MATEMATICA">Matematica</option>
                <option value="GPOI">GPOI</option>
                <option value="INGLESE">Inglese</option>
                <option value="TPSIT">TPSIT</option>
                <option value="INFORMATICA">Informatica</option>
                <option value="SIST.RETI">Sistemi e Reti</option>
                <option value="SC.MOTORIE">Scienze Motorie</option>
                <option value="IRC">IRC</option>
            `;
      divSelect.appendChild(subjectLabSelect);

      subjectLabSelect.addEventListener('change', function () {
        let value = this.value;
        let table = document.getElementById('table');
        let hourCount = 0;
        for (let i = 0; i < jdata.length; i++) {
          if (jdata[i].SUBJECT == value && jdata[i].TEACHER1 != "") {
            hourCount += parseInt(jdata[i].DURATION);
          }
        }
        hourCountDiv.id = 'hour-count';
        hourCountDiv.innerHTML = `Numero di ore di laboratorio: ${hourCount}`;
        divSelect.appendChild(hourCountDiv);
        table.innerHTML = inputTable;

        for (let i = 0; i < jdata.length; i++) {
          if (jdata[i].SUBJECT == value) {
            let row = table.insertRow();
            row.innerHTML = "<td>" + jdata[i].DURATION + "</td><td>" + jdata[i].SUBJECT + "</td><td>" + jdata[i].TEACHER0 + "</td><td>" + jdata[i].DAY + "</td>" + "</td><td>" + jdata[i].TIME + "</td>" + "</td><td>" + jdata[i].TEACHER1;
          }
        }

      });
      break;
  }
});