function handleSubmit() {
  const introh1 = document.getElementById("head").value;
  const introp1 = document.getElementById("para").value;

  localStorage.setItem("INTROH1", introh1);
  localStorage.setItem("INTROP1", introp1);

  return;
}
