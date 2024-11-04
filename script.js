function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const paciente = document.getElementById('paciente').value;
    const edad = document.getElementById('edad').value;
    const gestas = document.getElementById('gestas').value;
    const paras = document.getElementById('paras').value;
    const abortos = document.getElementById('abortos').value;
    const otros = document.getElementById('otros').value;
    const fur = document.getElementById('fur').value;
    const fup = document.getElementById('fup').value;
    const vejiga = document.getElementById('vejiga').value;
    const utero = document.getElementById('utero').value;
    const anexos = document.getElementById('anexos').value;
    const otrosEcografia = document.getElementById('otrosEcografia').value;
    const ecografiaMamaria = document.getElementById('ecografiaMamaria').value;
    const cervix = document.getElementById('cervix').value;
    const lugol = document.getElementById('lugol').value;
    const secrecion = document.getElementById('secrecion').value;
    const citologia = document.getElementById('citologia').value;
    const peso = document.getElementById('peso').value;
    const ta = document.getElementById('t/a').value;
    const conclusiones = document.getElementById('conclusiones').value;

    doc.text("Dr JOSE RAMON MEDINA OCHOA", 10, 10);
    doc.text("GINECOLOGIA OBSTETICIA ECOGRAFIA", 10, 20);
    doc.text("M.A.S.A.S 16786 C.M.B 686", 10, 30);
    doc.text("Informacion Paciente", 75, 45);

    const pacientee = [
        ["Paciente", paciente],
        ["Edad", edad],
        ["Peso", peso],
        ["T/A", ta],
        ["Gestas", gestas],
        ["Paras", paras],
        ["Abortos", abortos],
        ["Otros", otros],
        ["F.U.R", fur],
        ["F.U.P", fup],
    ];

    const eco_pelvica = [
        ["Vejiga", vejiga],
        ["Utero", utero],
        ["Anexos", anexos],
        ["Otros", otrosEcografia],
    ];

    const colposcopia = [
        ["Cervix", cervix],
        ["Lugol", lugol],
        ["Secrecion Vaginal", secrecion],
    ];

    doc.autoTable({
        head: [['Paciente', 'Dato']],
        body: pacientee,
        startY: 50
    });

    doc.autoTable({
        head: [['Valor', 'Dato']],
        body: eco_pelvica,
        startY: 145
    });

    doc.autoTable({
        head: [['Valor', 'Dato']],
        body: colposcopia,
        startY: 235
    });

    doc.text("Ecografia Pelvica", 75, 140);

    doc.text("Ecografia Mamaria", 75, 190);
    doc.text(ecografiaMamaria, 10, 195);

    doc.text("Colposcopia", 75, 230);

    doc.text("Citologia: "+ citologia, 10, 280);

    const conclu = new jsPDF();

    conclu.text("TTO / Conclusiones / Observaciones", 60, 10);
    conclu.text(conclusiones, 20, 20);

    conclu.save("Conclusiones.pdf")

    doc.save("Ginecologo.pdf");
}
