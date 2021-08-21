function updateValue(value, type) {
  const compInput = document.getElementById(type + "-price");
  compInput.innerHTML = value;
  const basic = document.getElementById("basic-price").innerHTML;
  const memory = document.getElementById("memory-price").innerHTML;
  const storage = document.getElementById("storage-price").innerHTML;
  const delivery = document.getElementById("delivery-price").innerHTML;
  const total = document.getElementById("basic-subtotal");
  total.innerHTML = parseFloat(basic) + parseFloat(memory) + parseFloat(storage) + parseFloat(delivery);
  document.getElementById("total").innerHTML = total.innerHTML;
}
document.getElementById("promo-code-click").addEventListener("click", function () {
    const promo = document.getElementById("promo-code").value;
    if (promo === "stevekaku") {
      const basic = document.getElementById("basic-subtotal").innerHTML;
      const all = parseFloat(basic) - (parseFloat(basic) / 100) * 20;
      document.getElementById("total").innerHTML = all;
      document.getElementById("promo-code").value = "";
    } else {
      alert("Promo Code in not valid");
    }
  });
// For Memory
document.getElementById("memory-8gb").addEventListener("click", function () {
  updateValue(0, "memory");
});
document.getElementById("memory-16gb").addEventListener("click", function () {
  updateValue(180, "memory");
});
// For Storage
document.getElementById("storage-256gb").addEventListener("click", function () {
  updateValue(0, "storage");
});
document.getElementById("storage-512gb").addEventListener("click", function () {
  updateValue(100, "storage");
});
document.getElementById("storage-1tb").addEventListener("click", function () {
  updateValue(180, "storage");
});
// For  Delivery
document.getElementById("prime-delivery").addEventListener("click", function () {
    updateValue(0, "delivery");
  });
document.getElementById("fast-delivery").addEventListener("click", function () {
  updateValue(20, "delivery");
});