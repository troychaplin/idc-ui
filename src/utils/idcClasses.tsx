export const globalSpace = {
  margin: 'm-8 md:m-12',
  padding: 'p-8 md:p-12',
  marginX: 'mx-8 md:mx-12',
  marginNegX: '-mx-8 md:-mx-12',
  marginY: 'py-8 md:py-12',
  paddingY: 'py-8 md:py-12',
  paddingX: 'px-8 md:px-12',
}

export const globalStyles = {
  prose: `prose prose-idc prose-lg md:prose-xl max-w-none prose-img:w-full prose-img:rounded-lg`,
}

export const childWidth = {
  full: '[&>:not(.idc-container)]:max-w-full [&>:not(.idc-container)]:mx-auto',
  '5xl': '[&>:not(.idc-container)]:max-w-5xl [&>:not(.idc-container)]:mx-auto',
  '7xl': '[&>:not(.idc-container)]:max-w-7xl [&>:not(.idc-container)]:mx-auto',
}

export const columnWidth = {
  full: 'max-w-full',
  '5xl': 'max-w-5xl',
  '7xl': 'max-w-7xl',
}

export const gridColumns = {
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-3',
  '4': 'md:grid-cols-2 lg:grid-cols-4',
  '1/3': 'lg:grid-cols-3 lg:[&>*:last-child]:col-span-2',
  '2/3': 'lg:grid-cols-3 lg:[&>*:first-child]:col-span-2',
}
