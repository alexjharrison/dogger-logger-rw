const slugify = (str: string) => str.replaceAll(' ', '-').toLowerCase()

export function generateSlug<T>(field: keyof T): Promise<string> {
  const
}
