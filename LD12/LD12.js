document.getElementById('submitBtn').addEventListener('click', function () {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const q1 = document.getElementById('q1').value.trim();
    const q2 = document.getElementById('q2').value.trim();
    const q3 = document.getElementById('q3').value.trim();
    const q4 = document.getElementById('q4').value.trim();
    const q5 = document.getElementById('q5').value.trim();

  
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
        alert("El. paštas turi turėti @ simbolį ir būti teisingo formato.");
        return;
    }

    if (!/^\+370[0-9]{8}$/.test(phone)) {
        alert("Telefono numeris turi būti formatu +370XXXXXXXX");
        return;
    }

    const questions = [q1, q2, q3, q4, q5];
    for (let i = 0; i < questions.length; i++) {
        const value = questions[i];
        if (!/^[1-9]$|^10$/.test(value)) {
            alert("Klausimų atsakymai turi būti skaičiai nuo 1 iki 10, be raidžių ar simbolių.");
            return;
        }
        questions[i] = parseInt(value);
    }

    if (!firstName || !lastName || !email || !address) {
        alert("Visi laukai turi būti užpildyti!");
        return;
    }

    const contactData = {
        vardas: firstName,
        pavardė: lastName,
        el_pastas: email,
        telefonas: phone,
        adresas: address,
        klausimai: questions
    };

    console.log(contactData);


    const average = questions.reduce((a, b) => a + b, 0) / questions.length;
    let colorClass = average < 4 ? "red" : average < 7 ? "orange" : "green";


    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Vardas: ${contactData.vardas}</p>
        <p>Pavardė: ${contactData.pavardė}</p>
        <p>El. paštas: ${contactData.el_pastas}</p>
        <p>Telefonas: ${contactData.telefonas}</p>
        <p>Adresas: ${contactData.adresas}</p>
        <p>Klausimų vidurkis: <span class="${colorClass}">${average.toFixed(2)}</span></p>
    `;
});



