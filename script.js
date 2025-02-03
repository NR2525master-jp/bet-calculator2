function calculateInvestment() {
    let loss = parseFloat(document.getElementById("loss").value);
    let profit = parseFloat(document.getElementById("profit").value);
    let odds = parseFloat(document.getElementById("odds").value);

    if (isNaN(loss) || isNaN(profit) || isNaN(odds) || odds <= 1) {
        alert("正しい数値を入力してください（オッズは1より大きい値）");
        return;
    }

    let investment = (loss + profit) / (odds - 1);
    let roundedInvestment = Math.ceil(investment / 100) * 100; // 100円単位で切り上げ

    document.getElementById("result").innerText = roundedInvestment.toLocaleString();
}
