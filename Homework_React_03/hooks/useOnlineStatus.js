export function useOnlineStatus() {
  if (!navigator.onLine) {
    alert("Нет интернета Бро =(");
  }
}
