export function createPageUrl(name: string) {
  const withSpaces = name.replace(/([a-z])([A-Z])/g, "$1 $2").trim();
  const slug = withSpaces.toLowerCase().replace(/\s+/g, "-");
  // special case: send "home" to the root path
  return slug === "home" ? "/" : `/${slug}`;
}
