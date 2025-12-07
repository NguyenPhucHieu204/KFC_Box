export function showToast(message: string) {
  if (typeof window === "undefined") return;
  try {
    const el = document.createElement("div");
    el.className = "kfc-toast";
    el.textContent = message;
    document.body.appendChild(el);
    // trigger visible state
    requestAnimationFrame(() => el.classList.add("kfc-toast--visible"));
    // remove after 3s
    setTimeout(() => {
      el.classList.remove("kfc-toast--visible");
      setTimeout(() => el.remove(), 300);
    }, 3000);
  } catch (e) {
    // fallback to alert in edge cases
    // eslint-disable-next-line no-alert
    alert(message);
  }
}
