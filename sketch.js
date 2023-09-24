let moneyInput;
let sharePriceInput;
let calculateButton;
let resultP;

function setup() {
  createCanvas(windowWidth, 200);
  background(200);

  createLabel("จำนวนเงิน (บาท):", 20, 20);
  moneyInput = createInput('');
  moneyInput.position(20, 60);
  moneyInput.size(200);
  moneyInput.input(validateInput);
  
  createLabel("ราคาต่อหุ้น (บาท):", 240, 20);
  sharePriceInput = createInput('');
  sharePriceInput.position(240, 60);
  sharePriceInput.size(200);
  sharePriceInput.input(validateInput);

  calculateButton = createButton('คำนวณหุ้น');
  calculateButton.position(20, 100);
  calculateButton.mousePressed(calculateShares);
  calculateButton.mouseOver(() => calculateButton.style('background-color', '#f0f0f0'));
  calculateButton.mouseOut(() => calculateButton.style('background-color', '#ffffff'));

  resultP = createP('คุณสามารถซื้อได้: 0 หุ้น');
  resultP.position(20, 140);
  resultP.style('font-size', '18px');
}

function createLabel(text, x, y) {
  let label = createP(text);
  label.position(x, y);
  label.style('font-weight', 'bold');
}

function validateInput() {
  if (isNaN(this.value()) || parseFloat(this.value()) < 0) {
    this.style('border', '2px solid red');
  } else {
    this.style('border', '2px solid green');
  }
}

function calculateShares() {
  let money = parseFloat(moneyInput.value());
  let sharePrice = parseFloat(sharePriceInput.value());

  if (!isNaN(money) && !isNaN(sharePrice) && money >= 0 && sharePrice > 0) {
    let shares = money / sharePrice;
    resultP.html('คุณสามารถซื้อได้: ' + shares.toLocaleString('th-TH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' หุ้น');
    resultP.style('color', 'blue');
  } else {
    resultP.html('โปรดป้อนข้อมูลที่ถูกต้อง');
    resultP.style('color', 'red');
  }
}

function windowResized() {
  resizeCanvas(windowWidth, 200);
}
