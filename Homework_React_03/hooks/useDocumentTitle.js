export function useDocumentTitle(newTitle) {
  useEffect(() => {
    document.title = newTitle;
  }, [newTitle]);
}
