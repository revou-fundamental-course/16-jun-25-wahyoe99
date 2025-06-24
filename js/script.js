// Hitung Luas
document.getElementById("triangle-area-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const alas = parseFloat(document.getElementById("alas").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);

  if (isNaN(alas) || isNaN(tinggi)) {
    alert("Harap masukkan angka valid untuk alas dan tinggi.");
    return;
  }

  const luas = 0.5 * alas * tinggi;

  const resultDiv = document.getElementById("luas-result");
  resultDiv.innerHTML = `
    L = 1/2 x a x t <br>
    L = 1/2 x ${alas} x ${tinggi} <br>
    L = ${luas.toFixed(2)} cm²
  `;
});

function resetLuas() {
      document.getElementById('luas-result').innerHTML = '';
}
function resetKeliling() {
  document.getElementById('keliling-result').innerHTML = '';
}


// Hitung Keliling
document.getElementById('triangle-perimeter-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const a = parseFloat(document.getElementById('sisiA').value);
  const b = parseFloat(document.getElementById('sisiB').value);
  const c = parseFloat(document.getElementById('sisiC').value);
  const keliling = a + b + c;

  document.getElementById('keliling-result').innerHTML =
    `K = S1 + S2 + S3 <br>K = ${a} + ${b} + ${c} <br>K = ${keliling.toFixed(2)} cm`;
});

