type ExtractYearFromQueryReturn = {
  year: string | null
  query: string
}

const YEAR_SHORTCUT_REGEX = /y:(\d+)/g

export function extractYearFromQuery(
  query: string
): ExtractYearFromQueryReturn {
  const yearRegexResult = YEAR_SHORTCUT_REGEX.exec(query)
  const queryWithoutYearShortcut = query.replace(YEAR_SHORTCUT_REGEX, '').trim()

  return {
    year: yearRegexResult && yearRegexResult[1],
    query: queryWithoutYearShortcut
  }
}
