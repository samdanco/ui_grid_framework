// @flow

export default class Filter {
  columnId : string;
  matcher : (any) => boolean;

  constructor(columnId: string, matcher: (any) => boolean) {

    if (columnId == null)
      throw new Error('Column must be provided')

    if (matcher == null)
      throw new Error('Filter matcher is required')

    this.columnId = columnId
    this.matcher = matcher
  }
}