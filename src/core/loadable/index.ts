import baseLoadable, {
  DefaultComponent,
  OptionsWithoutResolver,
} from '@loadable/component'

function loadable<T>(
  loader: () => Promise<DefaultComponent<T>>,
  options?: OptionsWithoutResolver<T>
) {
  return baseLoadable(loader, { ssr: true, ...options })
}

export default loadable
